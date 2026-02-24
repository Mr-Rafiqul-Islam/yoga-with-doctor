import Link from "next/link";

type OrderSummaryCardProps = {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  planName: string;
  onSubscribe: () => void;
};

export function OrderSummaryCard({
  subtotal,
  tax = 0,
  discount,
  total,
  planName,
  onSubscribe,
}: OrderSummaryCardProps) {
  return (
    <div className="sticky top-8 mt-8 md:col-span-5 lg:col-span-4 md:mt-0">
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface-dark">
        <h3 className="mb-6 font-display text-xl font-bold">Order Summary</h3>
        <div className="mb-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-primary">
              <span>Discount ({planName})</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted">Tax {tax}%</span>
            <span className="font-medium">${(subtotal * tax / 100).toFixed(2)}</span>
          </div>
        </div>
        <hr className="mb-6 border-border" />
        <div className="mb-8 flex items-end justify-between">
          <span className="text-lg font-bold">Total to pay</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
        <button
          type="button"
          onClick={onSubscribe}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/30 transition transform active:scale-[0.98] hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span className="material-icons-outlined text-xl" aria-hidden>
            lock
          </span>
          Subscribe Now
        </button>
        <p className="mt-4 text-center text-xs leading-relaxed text-muted">
          By subscribing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>
          . Subscription auto-renews annually. Cancel anytime.
        </p>
      </div>
    </div>
  );
}
