import { formatCheckoutPrice } from "@/features/checkout/data/checkoutReviewData";

type OrderTotalCardProps = {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  /** Currency from course product (e.g. BDT, USD) */
  currency: string | null | undefined;
  productId: string | null;
  onProceedToPayment: () => void;
  isProceeding?: boolean;
};

export function OrderTotalCard({
  subtotal,
  tax,
  discount,
  total,
  currency,
  productId,
  onProceedToPayment,
  isProceeding = false,
}: OrderTotalCardProps) {
  const canProceed = !!productId && !isProceeding;

  return (
    <div className="rounded-lg bg-surface p-8 shadow-soft transition-colors dark:bg-surface-dark">
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between text-muted">
            <span>Subtotal</span>
            <span className="font-medium text-foreground">
              {formatCheckoutPrice(subtotal, currency)}
            </span>
          </div>
          <div className="flex items-center justify-between text-muted">
            <span>Tax (0%)</span>
            <span className="font-medium text-foreground">
              {formatCheckoutPrice(tax, currency)}
            </span>
          </div>
          <div className="flex items-center justify-between text-primary">
            <span>Discount</span>
            <span className="font-medium">
              - {formatCheckoutPrice(discount, currency)}
            </span>
          </div>
        </div>
        <div className="mb-8 border-t border-gray-100 pt-6 dark:border-gray-700">
          <div className="flex items-end justify-between">
            <span className="font-display text-xl font-bold text-foreground">
              Total
            </span>
            <span className="font-display text-4xl font-bold text-foreground">
              {formatCheckoutPrice(total, currency)}
            </span>
          </div>
        </div>
        <div className="mb-6 flex items-center justify-center gap-2 text-xs text-muted">
          <span className="material-icons-outlined text-sm" aria-hidden>
            lock
          </span>
          <span>Payments are secure and encrypted</span>
        </div>
        <button
          type="button"
          disabled={!canProceed}
          onClick={onProceedToPayment}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isProceeding ? "Processing…" : "Proceed to Payment"}
          <span
            className="material-icons-outlined transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            arrow_forward
          </span>
        </button>
    </div>
  );
}
