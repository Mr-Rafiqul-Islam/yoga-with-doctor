"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { useCallback, useLayoutEffect, useState } from "react";

import {
  downloadPurchaseInvoicePdf,
  profileUserToInvoiceCustomer,
} from "@/features/billing/invoicePdf";
import {
  PaymentSuccessActions,
  PaymentSuccessBackground,
  PaymentSuccessHeading,
  PaymentSuccessIcon,
  PaymentSuccessReceiptCard,
} from "@/features/checkout/components";
import { useGetProfileQuery } from "@/slices/profile";
import {
  useGetPurchaseByTransactionQuery,
  type PurchaseProductType,
  type PurchaseRecord,
} from "@/slices/purchase";
import { getGuestSession } from "@/slices/auth";

const PRODUCT_TYPE_LABEL: Record<PurchaseProductType, string> = {
  COURSE_ONE_TIME: "Course",
  BUNDLE_ONE_TIME: "Bundle",
  BUNDLE_SUBSCRIPTION: "Subscription",
  PREMIUM_SUBSCRIPTION: "Premium",
  LIVE_EVENT_TICKET: "Live event",
};

function formatMoney(amount: number, currencyCode: string): string {
  try {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currencyCode} ${amount.toFixed(2)}`;
  }
}

function formatPurchaseDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-BD", { month: "short", day: "numeric", year: "numeric" });
}

function productTypeLabel(type: PurchaseProductType): string {
  return PRODUCT_TYPE_LABEL[type] ?? type;
}

function receiptSubtitle(purchase: PurchaseRecord): string {
  const kind = productTypeLabel(purchase.product.type);
  return `${kind} · ${purchase.status}`;
}

/**
 * Payment success page. Expects `transactionId` in the URL (e.g. after SSLCommerz redirect).
 * Optional: `providerTrxId`, `status` — not required for the receipt API.
 * Protected route (via checkout layout).
 */
export function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId")?.trim() ?? "";
  const [isGuestCheckout, setIsGuestCheckout] = useState(false);

  useLayoutEffect(() => {
    setIsGuestCheckout(Boolean(getGuestSession()));
  }, []);

  const { data: profileRes, isLoading: profileLoading } = useGetProfileQuery();
  const profileUser = profileRes?.data?.user;

  const { data: purchaseRes, isLoading, isError } = useGetPurchaseByTransactionQuery(
    transactionId,
    { skip: !transactionId },
  );

  const purchase: PurchaseRecord | undefined = purchaseRes?.data;

  const handleDownloadInvoice = useCallback(async () => {
    if (!purchase || !profileUser) return;
    await downloadPurchaseInvoicePdf(
      purchase,
      profileUserToInvoiceCustomer(profileUser),
    );
  }, [purchase, profileUser]);

  const shell = (children: ReactNode) => (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      <PaymentSuccessBackground />
      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-2xl flex-col items-center">{children}</div>
      </main>
    </div>
  );

  if (!transactionId) {
    return shell(
      <>
        <PaymentSuccessIcon />
        <h1 className="mb-4 font-display text-3xl font-bold text-foreground dark:text-white">
          Missing payment reference
        </h1>
        <p className="mb-8 max-w-md text-center text-muted">
          No transaction id was found in the link. If you completed a payment, check your email or
          billing history.
        </p>
        <Link
          href="/dashboard"
          className="rounded-full bg-primary px-8 py-3 font-medium text-white hover:bg-primary-dark"
        >
          Go to Dashboard
        </Link>
      </>,
    );
  }

  if (isLoading) {
    return shell(
      <>
        <PaymentSuccessIcon />
        <PaymentSuccessHeading />
        <div
          className="mb-10 w-full max-w-2xl animate-pulse rounded-xl border border-gray-100 bg-surface p-8 dark:border-gray-800 dark:bg-surface-dark"
          aria-hidden
        >
          <div className="mb-6 h-4 w-1/3 rounded bg-muted/40" />
          <div className="mb-4 h-6 w-2/3 rounded bg-muted/40" />
          <div className="mb-4 h-4 w-1/2 rounded bg-muted/40" />
          <div className="h-10 w-1/4 rounded bg-muted/40" />
        </div>
      </>,
    );
  }

  if (isError || !purchase) {
    const guestRecovery =
      isGuestCheckout ||
      (typeof window !== "undefined" && Boolean(getGuestSession()));
    if (guestRecovery) {
      return shell(
        <>
          <PaymentSuccessIcon />
          <div className="mb-8 w-full max-w-lg space-y-4 text-center">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground dark:text-white md:text-4xl">
              Thank you!
            </h1>
            <p className="text-base leading-relaxed text-muted">
              Your payment was successful. We couldn&apos;t show your order summary on this page yet. You can still <strong>access your course</strong> after you
              open your <strong>dashboard</strong> and <strong>verify your account</strong>.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              For your <strong>payment receipt</strong>, check <strong>Billing</strong> on your
              dashboard.
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
            <Link
              href="/dashboard"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-center font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/30 active:scale-95 sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-nowrap"
            >
              Go to dashboard &amp; verify account
              
            </Link>
            <Link
              href="/dashboard/billing"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-transparent px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 sm:w-80"
            >
              <span className="material-icons-outlined text-lg" aria-hidden>
                receipt_long
              </span>
              Billing &amp; receipts
            </Link>
          </div>
        </>,
      );
    }
    return shell(
      <>
        <PaymentSuccessIcon />
        <h1 className="mb-4 font-display text-3xl font-bold text-foreground dark:text-white">
          Could not load receipt
        </h1>
        <p className="mb-8 max-w-md text-center text-muted">
          We could not find an order for this transaction. If you were charged, your purchase may
          still appear in billing shortly.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard/billing"
            className="rounded-full bg-primary px-8 py-3 text-center font-medium text-white hover:bg-primary-dark"
          >
            Billing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-muted px-8 py-3 text-center font-medium text-foreground hover:bg-muted/10"
          >
            Dashboard
          </Link>
        </div>
      </>,
    );
  }

  const transactionLabel = purchase.displayId?.trim()
    ? purchase.displayId
    : purchase.transactionId?.trim()
      ? purchase.transactionId
      : transactionId;
  const productTitle = purchase.product.title?.trim() || "Purchase";
  const headingProductTitle =
    purchase.product.type === "COURSE_ONE_TIME"
      ? purchase.product.course?.title?.trim() || productTitle
      : productTitle;
  const purchaseDate = formatPurchaseDate(purchase.paidAt ?? purchase.createdAt);
  const totalFormatted = formatMoney(purchase.amount, purchase.currency);
  const courseSlug = purchase.product.course?.slug;
  const invoiceReady = purchase.status === "PAID";
  const invoiceDisabled =
    !invoiceReady || profileLoading || !profileUser;
  const invoiceDisabledReason =
    !invoiceReady
      ? "Invoice is available once payment is confirmed."
      : profileLoading
        ? "Loading your profile…"
        : !profileUser
          ? isGuestCheckout
            ? "Verify your account on the dashboard to download your receipt."
            : "Could not load profile for billing details."
          : undefined;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      <PaymentSuccessBackground />

      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <PaymentSuccessIcon />
          {isGuestCheckout ? (
            <div className="mb-8 w-full max-w-lg space-y-4 text-center">
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground dark:text-white md:text-4xl">
                Thank you!
              </h1>
              <p className="text-base leading-relaxed text-muted">
                Your payment was successful. To <strong>access your course</strong>, go to your{" "}
                <strong>dashboard</strong> and <strong>verify your account</strong>—that unlocks
                your lessons and full access.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Your <strong>payment receipt</strong>: use the button below once payment is confirmed
                and your profile is ready, or open <strong>Billing</strong> on your dashboard after
                you verify.
              </p>
            </div>
          ) : null}
          {purchase.status === "PENDING" ? (
            <p className="mb-6 max-w-md rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
              We are confirming your payment. This usually takes a few seconds. You can stay on this
              page or check billing if amounts look wrong.
            </p>
          ) : null}
          {!isGuestCheckout ? (
            <PaymentSuccessHeading productTitle={headingProductTitle} />
          ) : null}
          <PaymentSuccessReceiptCard
            transactionLabel={transactionLabel}
            productTitle={productTitle}
            productSubtitle={receiptSubtitle(purchase)}
            purchaseDate={purchaseDate}
            totalFormatted={totalFormatted}
          />
          {isGuestCheckout ? (
            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto">
              <Link
                href="/dashboard"
                className="group flex text-nowrap w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-center font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/30 active:scale-95 sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Go to dashboard &amp; verify account
              </Link>
              <button
                type="button"
                disabled={invoiceDisabled}
                title={invoiceDisabled ? invoiceDisabledReason : undefined}
                onClick={handleDownloadInvoice}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-transparent px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-80"
              >
                <span className="material-icons-outlined text-lg" aria-hidden>
                  download
                </span>
                Download payment receipt
              </button>
            </div>
          ) : (
            <PaymentSuccessActions
              courseSlug={courseSlug}
              onDownloadInvoice={handleDownloadInvoice}
              invoiceDisabled={invoiceDisabled}
              invoiceDisabledReason={invoiceDisabledReason}
            />
          )}
        </div>
      </main>
    </div>
  );
}
