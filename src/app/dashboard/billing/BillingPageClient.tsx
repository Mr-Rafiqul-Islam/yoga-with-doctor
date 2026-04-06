"use client";

import {
  downloadPurchaseInvoicePdf,
  profileUserToInvoiceCustomer,
} from "@/features/billing/invoicePdf";
import { InfoCard, TransactionList } from "@/features/subscription/components";
import type { TransactionListItem } from "@/features/subscription/components/TransactionList";
import { useGetProfileQuery } from "@/slices/profile";
import {
  useGetPurchaseHistoryQuery,
  useGetPurchaseSummaryQuery,
  type PurchaseProductType,
  type PurchaseRecord,
  type PurchaseStatus,
} from "@/slices/purchase";

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

const PRODUCT_TYPE_LABEL: Record<PurchaseProductType, string> = {
  COURSE_ONE_TIME: "Course",
  BUNDLE_ONE_TIME: "Bundle",
  BUNDLE_SUBSCRIPTION: "Subscription",
  PREMIUM_SUBSCRIPTION: "Premium",
  LIVE_EVENT_TICKET: "Live event",
};

function productTypeLabel(type: PurchaseProductType): string {
  return PRODUCT_TYPE_LABEL[type] ?? type;
}

function purchaseIcon(type: PurchaseProductType): string {
  switch (type) {
    case "COURSE_ONE_TIME":
      return "menu_book";
    case "BUNDLE_ONE_TIME":
      return "inventory_2";
    case "BUNDLE_SUBSCRIPTION":
    case "PREMIUM_SUBSCRIPTION":
      return "autorenew";
    case "LIVE_EVENT_TICKET":
      return "event";
    default:
      return "shopping_bag";
  }
}

function purchaseIconColors(type: PurchaseProductType): {
  iconBgClassName: string;
  iconClassName: string;
} {
  switch (type) {
    case "COURSE_ONE_TIME":
      return {
        iconBgClassName: "bg-orange-100 dark:bg-orange-900/20",
        iconClassName: "text-orange-600 dark:text-orange-400",
      };
    case "BUNDLE_SUBSCRIPTION":
    case "PREMIUM_SUBSCRIPTION":
      return {
        iconBgClassName: "bg-green-100 dark:bg-green-900/20",
        iconClassName: "text-green-600 dark:text-green-400",
      };
    case "LIVE_EVENT_TICKET":
      return {
        iconBgClassName: "bg-purple-100 dark:bg-purple-900/20",
        iconClassName: "text-purple-600 dark:text-purple-400",
      };
    default:
      return {
        iconBgClassName: "bg-gray-100 dark:bg-gray-800",
        iconClassName: "text-gray-500 dark:text-gray-400",
      };
  }
}

function statusDotClass(status: PurchaseStatus): string {
  switch (status) {
    case "PAID":
      return "bg-primary";
    case "PENDING":
      return "bg-amber-400";
    case "ON_HOLD":
      return "bg-orange-400";
    case "FAILED":
    case "CANCELED":
    case "REFUNDED":
      return "bg-gray-300 dark:bg-gray-600";
    default:
      return "bg-gray-300 dark:bg-gray-600";
  }
}

function formatPurchaseDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfPurchase = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diffDays = Math.round(
    (startOfToday.getTime() - startOfPurchase.getTime()) / (24 * 60 * 60 * 1000),
  );
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return d.toLocaleDateString("en-BD", { month: "short", day: "numeric", year: "numeric" });
}

function mapPurchaseToTransaction(p: PurchaseRecord): TransactionListItem {
  const colors = purchaseIconColors(p.product.type);
  const when = p.paidAt ?? p.createdAt;
  return {
    id: p.id,
    title: p.product.title || "Purchase",
    type: `${productTypeLabel(p.product.type)} · ${p.status}`,
    amount: `-${formatMoney(p.amount, p.currency)}`,
    isCredit: false,
    date: formatPurchaseDate(when),
    icon: purchaseIcon(p.product.type),
    ...colors,
    statusDotClassName: statusDotClass(p.status),
    className: p.status !== "PAID" ? "opacity-90" : undefined,
  };
}

function mapPurchaseToTransactionWithInvoice(
  p: PurchaseRecord,
  profileUser:
    | {
        name: string;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
      }
    | undefined,
  profileLoading: boolean,
): TransactionListItem {
  const base = mapPurchaseToTransaction(p);
  if (p.status !== "PAID") return base;
  return {
    ...base,
    invoiceDownload: {
      disabled: profileLoading || !profileUser,
      disabledReason: profileLoading
        ? "Loading profile…"
        : !profileUser
          ? "Profile required for invoice details."
          : undefined,
      onClick: async () => {
        if (!profileUser) return;
        await downloadPurchaseInvoicePdf(
          p,
          profileUserToInvoiceCustomer(profileUser),
        );
      },
    },
  };
}

export function BillingPageClient() {
  const {
    data: summaryRes,
    isLoading: summaryLoading,
    isError: summaryError,
  } = useGetPurchaseSummaryQuery();
  const {
    data: historyRes,
    isLoading: historyLoading,
    isError: historyError,
  } = useGetPurchaseHistoryQuery({ page: 1, limit: 20 });
  const { data: profileRes, isLoading: profileLoading } = useGetProfileQuery();
  const profileUser = profileRes?.data?.user;

  const summary = summaryRes?.data;
  const purchases = historyRes?.data?.purchases ?? [];
  const pagination = historyRes?.data?.pagination;
  const transactions = purchases.map((p) =>
    mapPurchaseToTransactionWithInvoice(p, profileUser, profileLoading),
  );

  const summaryCurrency = summary?.currency ?? "BDT";

  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3" aria-label="Purchase summary">
        <div className="rounded-3xl border border-transparent bg-surface p-6 shadow-card dark:bg-surface-dark">
          <p className="text-sm font-medium text-muted">Total spent (paid)</p>
          {summaryLoading ? (
            <p className="mt-2 h-8 animate-pulse rounded bg-muted/30" />
          ) : summaryError ? (
            <p className="mt-2 text-sm text-destructive">Could not load summary.</p>
          ) : (
            <p className="mt-2 text-2xl font-bold text-foreground">
              {formatMoney(summary?.totalSpent ?? 0, summaryCurrency)}
            </p>
          )}
        </div>
        <div className="rounded-3xl border border-transparent bg-surface p-6 shadow-card dark:bg-surface-dark">
          <p className="text-sm font-medium text-muted">Last calendar month</p>
          {summaryLoading ? (
            <p className="mt-2 h-8 animate-pulse rounded bg-muted/30" />
          ) : summaryError ? (
            <p className="mt-2 text-sm text-destructive">—</p>
          ) : (
            <>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {formatMoney(summary?.lastMonthSpent ?? 0, summaryCurrency)}
              </p>
              {summary?.lastMonthChangePercent != null && (
                <p className="mt-1 text-xs text-muted">
                  {summary.lastMonthChangePercent >= 0 ? "+" : ""}
                  {summary.lastMonthChangePercent}% vs prior month
                </p>
              )}
            </>
          )}
        </div>
        <div className="rounded-3xl border border-transparent bg-surface p-6 shadow-card dark:bg-surface-dark">
          <p className="text-sm font-medium text-muted">Previous month</p>
          {summaryLoading ? (
            <p className="mt-2 h-8 animate-pulse rounded bg-muted/30" />
          ) : summaryError ? (
            <p className="mt-2 text-sm text-destructive">—</p>
          ) : (
            <p className="mt-2 text-2xl font-bold text-foreground">
              {formatMoney(summary?.previousMonthSpent ?? 0, summaryCurrency)}
            </p>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Support and history">
            <InfoCard
              title="Invoices"
              subtitle="From transactions"
              icon="receipt_long"
              iconBgClassName="bg-teal-50 dark:bg-teal-900/20"
              iconClassName="text-teal-600 dark:text-teal-400"
              href="#transactions-heading"
            />
            <InfoCard
              title="Billing Support"
              subtitle="Get help now"
              icon="help_outline"
              iconBgClassName="bg-purple-50 dark:bg-purple-900/20"
              iconClassName="text-purple-600 dark:text-purple-400"
              href="/contact"
            />
          </section>
        </div>

        <aside className="lg:col-span-1" aria-labelledby="transactions-heading">
          <h2 id="transactions-heading" className="sr-only">
            Recent purchases
          </h2>
          {historyLoading ? (
            <div className="h-full rounded-3xl border border-gray-100 bg-surface p-6 shadow-card dark:border-gray-800 dark:bg-surface-dark">
              <div className="mb-6 h-7 w-40 animate-pulse rounded bg-muted/30" />
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 shrink-0 animate-pulse rounded-2xl bg-muted/30" />
                    <div className="flex-1 space-y-2 pt-1">
                      <div className="h-4 max-w-[75%] animate-pulse rounded bg-muted/30" />
                      <div className="h-3 max-w-[50%] animate-pulse rounded bg-muted/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : historyError ? (
            <div className="rounded-3xl border border-gray-100 bg-surface p-6 shadow-card dark:border-gray-800 dark:bg-surface-dark">
              <p className="text-sm text-destructive">Could not load purchases.</p>
            </div>
          ) : transactions.length === 0 ? (
            <div className="rounded-3xl border border-gray-100 bg-surface p-6 shadow-card dark:border-gray-800 dark:bg-surface-dark">
              <h3 className="text-xl font-bold text-foreground">Transactions</h3>
              <p className="mt-4 text-sm text-muted">No purchases yet.</p>
            </div>
          ) : (
            <TransactionList
              transactions={transactions}
              seeAllHref={pagination && pagination.totalPages > 1 ? "#" : undefined}
            />
          )}
        </aside>
      </div>
    </>
  );
}
