"use client";

import { useMemo, useState } from "react";

import { CheckoutOrderBump } from "./CheckoutOrderBump";
import {
  useInitializePaymentMutation,
  useStartCampaignCheckoutMutation,
  useStartPaymentAttemptMutation,
  setPaymentContext,
  type PaymentProvider,
  type StartPaymentAttemptResponse,
} from "@/slices/payment";

import { useAppDispatch } from "@/stores/hooks";
import { useRegisterGuestUserMutation } from "@/slices/auth";
/** BDT amounts (integer taka) */
export const CHECKOUT_BASE_PRICE_TAKA = 2999;
export const CHECKOUT_BUMP_AUDIOBOOK_TAKA = 997;
export const CHECKOUT_BUMP_VIDEO_TAKA = 1997;

const PLID_CAMPAIGN_ITEM_ID =
  process.env.NEXT_PUBLIC_PLID_CAMPAIGN_ITEM_ID ?? "";

const DEVICE_ID_STORAGE_KEY = "ywd-device-id";

function formatTaka(amount: number) {
  return `৳${amount.toLocaleString("en-IN")}`;
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

export function SalesCheckoutForm() {
  const [bumpAudiobook, setBumpAudiobook] = useState(false);
  const [bumpVideoCall, setBumpVideoCall] = useState(false);
  const [paymentProvider] = useState<PaymentProvider>("SSL");
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const total = useMemo(
    () =>
      CHECKOUT_BASE_PRICE_TAKA +
      (bumpAudiobook ? CHECKOUT_BUMP_AUDIOBOOK_TAKA : 0) +
      (bumpVideoCall ? CHECKOUT_BUMP_VIDEO_TAKA : 0),
    [bumpAudiobook, bumpVideoCall],
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

    if (!PLID_CAMPAIGN_ITEM_ID) {
      setPaymentError(
        "Campaign is not configured (missing NEXT_PUBLIC_PLID_CAMPAIGN_ITEM_ID).",
      );
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

      const guest = await registerGuestUser({
        name,
        phone,
        ...(email ? { email } : {}),
        deviceId: getOrCreateDeviceId(),
        platform: "web",
      }).unwrap();

      const guestAny = guest as unknown as {
        data?: {
          userId?: unknown;
          user?: { id?: unknown };
          userMode?: unknown;
        };
      };
      const guestUserId =
        guestAny?.data?.userId ??
        guestAny?.data?.user?.id ??
        guestAny?.data?.userMode ??
        null;
      if (!guestUserId || typeof guestUserId !== "string") {
        setPaymentError("Failed to create guest user. Please try again.");
        return;
      }

      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : "";

      const campaignCheckout = await startCampaignCheckout({
        campaignItemId: PLID_CAMPAIGN_ITEM_ID,
        selectedChildIds: [],
        provider: paymentProvider,
        siteRef: "YWD",
        projectKey: "YWD",
        meta: {
          userId: guestUserId,
          userMode:
            (guestAny?.data?.userMode as "GUEST" | "VERIFIED" | undefined) ??
            "GUEST",
          platform: "WEB",
          clientType: "BROWSER",
          appId: "ywd-web",
          returnMode: "REDIRECT",
          deepLink: null,
          successUrl: `${origin}/checkout/success`,
          failUrl: `${origin}/checkout/failed`,
          cancelUrl: `${origin}/checkout/review`,
        },
        userId: guestUserId,
      }).unwrap();

      const newPurchaseId = campaignCheckout.data.purchase.id;
      if (!newPurchaseId) {
        setPaymentError("Invalid response from checkout. Please try again.");
        return;
      }

      const initPayment = await initializePayment({
        amount: total,
        currency: "BDT",
        metaData: { purchaseId: newPurchaseId, userId: guestUserId },
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
          amount: total,
          currency: "BDT",
          metaData: { purchaseId: newPurchaseId, userId: guestUserId },
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
      console.error("[plid] payment flow error", err);
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
      {/* <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="address">
          সম্পূর্ণ ঠিকানা <span className="text-secondary">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          autoComplete="street-address"
          className="w-full rounded-xl border-none bg-surface-container-low px-6 py-4 transition-all focus:ring-2 focus:ring-primary/20"
          placeholder="বাড়ি নং, রোড, থানা, জেলা"
          rows={3}
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="condition">
          আপনার শারীরিক অবস্থা
        </label>
        <textarea
          id="condition"
          name="condition"
          className="w-full rounded-xl border-none bg-surface-container-low px-6 py-4 transition-all focus:ring-2 focus:ring-primary/20"
          placeholder="আপনার ব্যথার বিবরণ সংক্ষেপে লিখুন"
          rows={3}
        />
      </div> */}

      <div className="space-y-4 pt-2">
        <p className="text-sm font-semibold text-on-surface/80">
          ঐচ্ছিক অ্যাড-অন (আপনার পছন্দ)
        </p>
        <CheckoutOrderBump
          checked={bumpAudiobook}
          fullDescription={
            <div className="space-y-2">
              <p>
                এই প্যাকেজে আপনি পাবেন{" "}
                <strong>সম্পূর্ণ প্রোগ্রামের অডিও ভার্সন</strong>—যাতে চলার সময়
                বা বিশ্রামে শুনে অনুশীলন করতে পারেন। সাথে থাকছে{" "}
                <strong>৫টি এক্সক্লুসিভ ডিজিটাল রিসোর্স</strong>: প্রিন্টেবল
                চেকলিস্ট, পোসচার রিমাইন্ডার কার্ড, সপ্তাহিক ট্র্যাকিং শিট, দ্রুত
                ব্যথা উপশম গাইড, এবং বিশেষজ্ঞদের টিপস সহ বোনাস PDF। সব কিছু
                আপনার ইমেইলে ডেলিভারি—আজই অ্যাক্সেস।
              </p>
            </div>
          }
          headline="অডিও গাইড + ৫টি এক্সক্লুসিভ ডিজিটাল বোনাস প্যাকেজ!"
          imageAlt="অডিও ও ডিজিটাল বোনাস ম্যাটেরিয়াল"
          imageSrc="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
          name="orderBumpAudiobook"
          offerLabel="বিশেষ এককালীন অফার:"
          onCheckedChange={setBumpAudiobook}
          price="৳৯৯৭"
          shortDescription="প্রোগ্রামের অডিও সংস্করণ ও ৫টি প্রিমিয়াম ডিজিটাল টুল—দৈনিক রুটিন আরও সহজ করতে।"
        />
        <CheckoutOrderBump
          checked={bumpVideoCall}
          fullDescription={
            <div className="space-y-2">
              <p>
                <strong>৩০ মিনিটের ১-১ ভিডিও সেশন</strong>—আপনার বর্তমান অবস্থা,
                ব্যথার ধরন ও লাইফস্টাইল শুনে{" "}
                <strong>ব্যক্তিগতভাবে কাস্টম টিপস</strong>। আমাদের ক্লিনিক্যাল
                টিম আপনার ফর্ম ঠিক করতে সাহায্য করবে এবং পরবর্তী ২ সপ্তাহের জন্য
                একটি <strong>সংক্ষিপ্ত অ্যাকশন প্ল্যান</strong> দেবে। স্লট
                সীমিত; অর্ডারের সাথে যুক্ত করলে অগ্রাধিকার বুকিং।
              </p>
            </div>
          }
          headline="এক্সক্লুসিভ আপগ্রেড: ১-১ ভিডিও কল—ব্যক্তিগত থেরাপি রিভিউ ও পরামর্শ"
          imageAlt="ভিডিও কলে ব্যক্তিগত পরামর্শ"
          imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
          name="orderBumpVideoCall"
          offerLabel="এক্সক্লুসিভ আপগ্রেড:"
          onCheckedChange={setBumpVideoCall}
          price="৳১,৯৯৭"
          shortDescription="৩০ মিনিটের ডেডিকেটেড ভিডিও কল—আপনার ধাপগুলো নিয়ে সরাসরি গাইড ও ফলো-আপ প্ল্যান।"
        />
      </div>

      <div className="rounded-2xl border border-primary/15 bg-surface-container-low px-5 py-4 shadow-inner">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-on-surface/60">
          মূল্য সংক্ষেপ
        </p>
        <ul className="space-y-2 text-sm text-on-surface/80">
          <li className="flex justify-between gap-4">
            <span>মূল প্রোগ্রাম</span>
            <span className="tabular-nums font-medium text-on-surface">
              {formatTaka(CHECKOUT_BASE_PRICE_TAKA)}
            </span>
          </li>
          {bumpAudiobook ? (
            <li className="flex justify-between gap-4">
              <span>অডিও + ডিজিটাল বোনাস</span>
              <span className="tabular-nums font-medium text-on-surface">
                +{formatTaka(CHECKOUT_BUMP_AUDIOBOOK_TAKA)}
              </span>
            </li>
          ) : null}
          {bumpVideoCall ? (
            <li className="flex justify-between gap-4">
              <span>১-১ ভিডিও কল আপগ্রেড</span>
              <span className="tabular-nums font-medium text-on-surface">
                +{formatTaka(CHECKOUT_BUMP_VIDEO_TAKA)}
              </span>
            </li>
          ) : null}
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
