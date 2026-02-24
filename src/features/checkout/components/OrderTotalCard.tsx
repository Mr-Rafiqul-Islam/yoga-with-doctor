import Link from "next/link";

type OrderTotalCardProps = {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
};

export function OrderTotalCard({
  subtotal,
  tax,
  discount,
  total,
}: OrderTotalCardProps) {
  return (
    <div className="rounded-lg bg-surface p-8 shadow-soft transition-colors dark:bg-surface-dark">
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between text-muted">
            <span>Subtotal</span>
            <span className="font-medium text-foreground">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-muted">
            <span>Tax (8%)</span>
            <span className="font-medium text-foreground">
              ${tax.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-primary">
            <span>Discount</span>
            <span className="font-medium">- ${discount.toFixed(2)}</span>
          </div>
        </div>
        <div className="mb-8 border-t border-gray-100 pt-6 dark:border-gray-700">
          <div className="flex items-end justify-between">
            <span className="font-display text-xl font-bold text-foreground">
              Total
            </span>
            <span className="font-display text-4xl font-bold text-foreground">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mb-6 flex items-center justify-center gap-2 text-xs text-muted">
          <span className="material-icons-outlined text-sm" aria-hidden>
            lock
          </span>
          <span>Payments are secure and encrypted</span>
        </div>
        <Link
          href="/checkout/payment"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Proceed to Payment
          <span
            className="material-icons-outlined transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            arrow_forward
          </span>
        </Link>
    </div>
  );
}
