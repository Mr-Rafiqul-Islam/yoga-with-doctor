"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { useCallback } from "react";

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

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      <PaymentSuccessBackground />

      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <PaymentSuccessIcon />
          {purchase.status === "PENDING" ? (
            <p className="mb-6 max-w-md rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
              We are confirming your payment. This usually takes a few seconds. You can stay on this
              page or check billing if amounts look wrong.
            </p>
          ) : null}
          <PaymentSuccessHeading productTitle={headingProductTitle} />
          <PaymentSuccessReceiptCard
            transactionLabel={transactionLabel}
            productTitle={productTitle}
            productSubtitle={receiptSubtitle(purchase)}
            purchaseDate={purchaseDate}
            totalFormatted={totalFormatted}
          />
          <PaymentSuccessActions
            courseSlug={courseSlug}
            onDownloadInvoice={handleDownloadInvoice}
            invoiceDisabled={invoiceDisabled}
            invoiceDisabledReason={
              !invoiceReady
                ? "Invoice is available once payment is confirmed."
                : profileLoading
                  ? "Loading your profile…"
                  : !profileUser
                    ? "Could not load profile for billing details."
                    : undefined
            }
          />
        </div>
      </main>
    </div>
  );
}
