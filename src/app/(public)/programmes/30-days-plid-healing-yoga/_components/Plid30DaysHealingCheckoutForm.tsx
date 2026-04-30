"use client";

import { useMemo, useState } from "react";

import { Plid30DaysHealingOrderBump } from "./Plid30DaysHealingOrderBump";
import {
  useInitializePaymentMutation,
  useStartCampaignCheckoutMutation,
  useStartPaymentAttemptMutation,
  setPaymentContext,
  type PaymentProvider,
  type StartPaymentAttemptResponse,
} from "@/slices/payment";

import { useAppDispatch } from "@/stores/hooks";
import {
  authApi,
  getToken,
  persistClientAuthTokens,
  persistGuestSession,
  useRegisterGuestUserMutation,
  type RegisterGuestUserResponse,
} from "@/slices/auth";
import type { CampaignItemSummary } from "@/lib/campaignPublicApi";
import { establishNextAuthSessionFromStoredTokensForGuest } from "@/lib/auth/client";

const DEVICE_ID_STORAGE_KEY = "ywd-device-id";

function formatTaka(amount: number) {
  return `৳${amount.toLocaleString("en-IN")}`;
}

function toNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return null;
}

function getOrCreateDeviceId(): string {
  if (typeof window === "undefined") return "web";
  try {
    const existing = window.localStorage.getItem(DEVICE_ID_STORAGE_KEY);
    if (existing && existing.trim()) return existing;
    const created =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, created);
    return created;
  } catch {
    return "web";
  }
}

function normalizeCheckoutUserMode(
  raw: unknown,
  fallback: "GUEST" | "VERIFIED",
): "GUEST" | "VERIFIED" {
  if (raw === "VERIFIED") return "VERIFIED";
  if (raw === "GUEST") return "GUEST";
  return fallback;
}

function extractRegisterGuestUserId(
  data: RegisterGuestUserResponse["data"],
): string | null {
  const fromUser = data?.user?.id;
  const fromRoot = data?.userId;
  if (typeof fromUser === "string" && fromUser.trim()) return fromUser.trim();
  if (typeof fromRoot === "string" && fromRoot.trim()) return fromRoot.trim();
  return null;
}

export type Plid30DaysHealingCheckoutFormProps = {
  campaignItemId: string;
  /** BDT integer (taka) */
  basePriceTaka: number;
  campaignItem: CampaignItemSummary | null;
};

export function Plid30DaysHealingCheckoutForm({
  campaignItemId,
  basePriceTaka,
  campaignItem,
}: Plid30DaysHealingCheckoutFormProps) {
  const [paymentProvider] = useState<PaymentProvider>("SSL");
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const children = useMemo(
    () => (Array.isArray(campaignItem?.children) ? campaignItem!.children! : []),
    [campaignItem],
  );

  const initialSelectedChildIds = useMemo(() => {
    const ids: string[] = [];
    for (const c of children) {
      const id = c?.id ? String(c.id) : "";
      if (!id) continue;
      if (c?.isRequired || c?.isDefaultSelected) ids.push(id);
    }
    return ids;
  }, [children]);

  const [selectedChildIds, setSelectedChildIds] = useState<string[]>(
    () => initialSelectedChildIds,
  );

  const selectedChildSet = useMemo(
    () => new Set(selectedChildIds),
    [selectedChildIds],
  );

  const selectedChildrenTotal = useMemo(() => {
    let sum = 0;
    for (const c of children) {
      const id = c?.id ? String(c.id) : "";
      if (!id || !selectedChildSet.has(id)) continue;
      const price = toNumber(c?.price);
      if (typeof price === "number" && Number.isFinite(price) && price > 0) {
        sum += Math.round(price);
      }
    }
    return sum;
  }, [children, selectedChildSet]);

  const currency = useMemo(() => {
    const c = campaignItem?.product?.currency;
    return typeof c === "string" && c.trim() ? c : "BDT";
  }, [campaignItem]);

  const total = useMemo(
    () => basePriceTaka + selectedChildrenTotal,
    [basePriceTaka, selectedChildrenTotal],
  );

  const dispatch = useAppDispatch();
  const [registerGuestUser, { isLoading: isRegisteringGuestUser }] =
    useRegisterGuestUserMutation();
  const [startCampaignCheckout, { isLoading: isStartingCheckout }] =
    useStartCampaignCheckoutMutation();
  const [initializePayment, { isLoading: isInitializingPayment }] =
    useInitializePaymentMutation();
  const [startPaymentAttempt, { isLoading: isStartingAttempt }] =
    useStartPaymentAttemptMutation();

  const isProceeding =
    isRegisteringGuestUser ||
    isStartingCheckout ||
    isInitializingPayment ||
    isStartingAttempt;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaymentError(null);

    if (!campaignItemId) {
      setPaymentError("Campaign is not configured. Please try again later.");
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const fullNameRaw = formData.get("fullName");
      const phoneRaw = formData.get("phone");
      const emailRaw = formData.get("email");

      const name = typeof fullNameRaw === "string" ? fullNameRaw.trim() : "";
      const phone = typeof phoneRaw === "string" ? phoneRaw.trim() : "";
      const email = typeof emailRaw === "string" ? emailRaw.trim() : "";

      if (!name || !phone) {
        setPaymentError("Name and phone are required.");
        return;
      }

      let checkoutUserId: string | undefined;
      let checkoutUserMode: "GUEST" | "VERIFIED" = "GUEST";

      if (getToken()) {
        try {
          const meResult = await dispatch(
            authApi.endpoints.getCurrentUser.initiate(undefined, {
              forceRefetch: true,
            }),
          ).unwrap();
          if (meResult?.success && meResult.data?.id) {
            checkoutUserId = meResult.data.id;
            checkoutUserMode =
              meResult.data.userMode === "GUEST" ? "GUEST" : "VERIFIED";
          }
        } catch {
          // Stale token or network error — continue with register-guest
        }
      }

      if (!checkoutUserId) {
        const guest = await registerGuestUser({
          name,
          phone,
          ...(email ? { email } : {}),
          deviceId: getOrCreateDeviceId(),
          platform: "web",
        }).unwrap();

        if (!guest.success) {
          setPaymentError(
            guest.message?.trim() ||
              "Could not start Create user. Please try again.",
          );
          return;
        }

        const uid = extractRegisterGuestUserId(guest.data);
        if (!uid) {
          setPaymentError("Failed to create guest user. Please try again.");
          return;
        }
        checkoutUserId = uid;
        checkoutUserMode = normalizeCheckoutUserMode(guest.data?.userMode, "GUEST");

        if (checkoutUserMode === "GUEST") {
          persistGuestSession(checkoutUserId, phone);
        } else {
          const d = guest.data;
          if (!d?.accessToken?.trim() || !d?.refreshToken?.trim()) {
            setPaymentError("Could not get existing user. Please try again or login.");
            return;
          }
          if (d?.accessToken?.trim() && d?.refreshToken?.trim()) {
            persistClientAuthTokens(d?.accessToken, d?.refreshToken);
            const sessionRes = await establishNextAuthSessionFromStoredTokensForGuest();
            if (!sessionRes.ok) {
              setPaymentError(sessionRes.error ?? "Could not start session. Try again.");
              return;
            }
          }
        }
      }

      if (!checkoutUserId) {
        setPaymentError("Could not determine your account. Please try again.");
        return;
      }

      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : "";

      const finalSelectedChildIds = children
        .map((c) => (c?.id ? String(c.id) : ""))
        .filter(Boolean)
        .filter((id) => selectedChildSet.has(id));

      const campaignCheckout = await startCampaignCheckout({
        campaignItemId,
        selectedChildIds: finalSelectedChildIds,
        provider: paymentProvider,
        siteRef: "YWD",
        projectKey: "YWD",
        meta: {
          userId: checkoutUserId,
          userMode: checkoutUserMode,
          platform: "WEB",
          clientType: "BROWSER",
          appId: "ywd-web",
          returnMode: "REDIRECT",
          deepLink: null,
          successUrl: `${origin}/checkout/success`,
          failUrl: `${origin}/checkout/failed`,
          cancelUrl: `${origin}/checkout/review`,
        },
        userId: checkoutUserId,
      }).unwrap();

      const newPurchaseId = campaignCheckout.data.purchase.id;
      if (!newPurchaseId) {
        setPaymentError("Invalid response from checkout. Please try again.");
        return;
      }

      const initPayment = await initializePayment({
        userId: checkoutUserId,
        amount: total,
        currency,
        metaData: {
          purchaseId: newPurchaseId,
          userId: checkoutUserId,
          campaignItemId,
          selectedChildIds: finalSelectedChildIds,
        },
        provider: paymentProvider,
        projectKey: "YWD",
        siteRef: "YWD",
      }).unwrap();

      const initData = initPayment?.data as
        | {
            transactionId?: string;
            id?: string;
            redirectUrl?: string;
            paymentUrl?: string;
          }
        | undefined;
      const transactionId = initData?.transactionId ?? initData?.id ?? null;

      if (newPurchaseId || transactionId) {
        dispatch(
          setPaymentContext({
            purchaseId: newPurchaseId,
            transactionId: transactionId ?? undefined,
          }),
        );
      }

      let startAttemptData: StartPaymentAttemptResponse | undefined;
      if (transactionId) {
        startAttemptData = await startPaymentAttempt({
          transactionId,
          userId: checkoutUserId,
          amount: total,
          currency,
          metaData: {
            purchaseId: newPurchaseId,
            userId: checkoutUserId,
            campaignItemId,
            selectedChildIds: finalSelectedChildIds,
          },
          provider: paymentProvider,
          siteRef: "YWD",
        }).unwrap();
      }

      const redirectUrl =
        startAttemptData?.data?.data?.checkoutUrl ??
        startAttemptData?.data?.data?.gatewayUrl ??
        null;

      if (redirectUrl) {
        
        window.location.href = redirectUrl;
        return;
      }
      setPaymentError("Payment gateway URL not received. Please try again.");
    } catch (err) {
      console.error("[plid30] payment flow error", err);
      setPaymentError("Failed to initialize payment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      

      {paymentError ? (
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-200"
          role="alert"
        >
          <p className="font-medium">Payment error</p>
          <p className="mt-1">{paymentError}</p>
        </div>
      ) : null}

      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="fullName">
          আপনার পূর্ণ নাম <span className="text-secondary">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          className="w-full rounded-xl border-none bg-surface-container-low px-6 py-4 transition-all focus:ring-2 focus:ring-primary/20"
          placeholder="উদা: আব্দুল করিম"
          type="text"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="email">
          ইমেইল ঠিকানা <span className="text-secondary">*</span>
        </label>
        <input
          id="email"
          name="email"
          autoComplete="email"
          className="w-full rounded-xl border-none bg-surface-container-low px-6 py-4 transition-all focus:ring-2 focus:ring-primary/20"
          placeholder="name@example.com"
          type="email"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="phone">
          ফোন নম্বর <span className="text-secondary">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          autoComplete="tel"
          className="w-full rounded-xl border-none bg-surface-container-low px-6 py-4 transition-all focus:ring-2 focus:ring-primary/20"
          placeholder="017xxxxxxxx"
          type="tel"
          required
        />
      </div>

      <div className="space-y-4 pt-2">
        <p className="text-sm font-semibold text-on-surface/80">
          ঐচ্ছিক অ্যাড-অন (আপনার পছন্দ)
        </p>
        {children.length ? (
          <div className="space-y-4">
            {children.map((c) => {
              const id = c?.id ? String(c.id) : "";
              if (!id) return null;
              const title =
                (c?.course?.title as string | undefined) ??
                (c?.title as string | undefined) ??
                "Add-on";
              const price = toNumber(c?.price);
              const compareAt = toNumber(c?.compareAtPrice);
              const checked = selectedChildSet.has(id);
              const isRequired = Boolean(c?.isRequired);
              const imageSrc =
                (typeof c?.course?.bannerUrl === "string" &&
                  c.course.bannerUrl) ||
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80";

              const offerLabel = isRequired ? "Required:" : "Special add-on:";
              const priceLabel =
                typeof price === "number" && price > 0
                  ? formatTaka(Math.round(price))
                  : "—";

              return (
                <Plid30DaysHealingOrderBump
                  key={id}
                  checked={checked}
                  fullDescription={
                    <div className="space-y-2">
                      <p className="font-medium text-on-surface/80">{title}</p>
                      {typeof compareAt === "number" && compareAt > 0 ? (
                        <p className="text-on-surface/70">
                          Regular:{" "}
                          <span className="line-through">
                            {formatTaka(Math.round(compareAt))}
                          </span>
                        </p>
                      ) : null}
                      <p className="text-on-surface/70">
                        Add this to your checkout to unlock instantly.
                      </p>
                    </div>
                  }
                  headline={title}
                  imageAlt={title}
                  imageSrc={imageSrc}
                  name={`orderBump-${id}`}
                  offerLabel={offerLabel}
                  onCheckedChange={(next) => {
                    if (isRequired) return;
                    setSelectedChildIds((prev) => {
                      const set = new Set(prev);
                      if (next) set.add(id);
                      else set.delete(id);
                      return Array.from(set);
                    });
                  }}
                  price={priceLabel}
                  shortDescription={
                    typeof compareAt === "number" &&
                    compareAt > 0 &&
                    typeof price === "number" &&
                    price > 0
                      ? `Save ${formatTaka(
                          Math.max(0, Math.round(compareAt) - Math.round(price)),
                        )} today.`
                      : "One-time add-on."
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-4 text-sm text-on-surface/70">
            No add-ons available for this campaign.
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-primary/15 bg-surface-container-low px-5 py-4 shadow-inner">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-on-surface/60">
          মূল্য সংক্ষেপ
        </p>
        <ul className="space-y-2 text-sm text-on-surface/80">
          <li className="flex justify-between gap-4">
            <span>মূল প্রোগ্রাম</span>
            <span className="tabular-nums font-medium text-on-surface">
              {formatTaka(basePriceTaka)}
            </span>
          </li>
          {children
            .filter((c) => c?.id && selectedChildSet.has(String(c.id)))
            .map((c) => {
              const id = String(c.id);
              const title =
                (c?.course?.title as string | undefined) ??
                (c?.title as string | undefined) ??
                "Add-on";
              const price = toNumber(c?.price);
              if (
                typeof price !== "number" ||
                !Number.isFinite(price) ||
                price <= 0
              )
                return null;
              return (
                <li key={id} className="flex justify-between gap-4">
                  <span>{title}</span>
                  <span className="tabular-nums font-medium text-on-surface">
                    +{formatTaka(Math.round(price))}
                  </span>
                </li>
              );
            })}
        </ul>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-primary/10 pt-4">
          <span className="text-lg font-extrabold text-on-surface">
            সর্বমোট
          </span>
          <span className="text-2xl font-extrabold tabular-nums text-primary">
            {formatTaka(total)}
          </span>
        </div>
      </div>

      <button
        className="w-full rounded-2xl bg-secondary py-5 text-xl font-bold text-on-primary shadow-lg shadow-secondary/20 transition-transform hover:scale-[1.01]"
        type="submit"
        disabled={isProceeding}
      >
        {isProceeding ? "Processing..." : "Get Instant Access"}
      </button>
    </form>
  );
}
