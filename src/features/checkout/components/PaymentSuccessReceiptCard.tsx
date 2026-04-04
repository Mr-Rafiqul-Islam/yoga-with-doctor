type PaymentSuccessReceiptCardProps = {
  transactionLabel: string;
  productTitle: string;
  productSubtitle: string;
  purchaseDate: string;
  totalFormatted: string;
};

export function PaymentSuccessReceiptCard({
  transactionLabel,
  productTitle,
  productSubtitle,
  purchaseDate,
  totalFormatted,
}: PaymentSuccessReceiptCardProps) {
  return (
    <div className="mb-10 w-full rounded-xl border border-gray-100 bg-surface p-8 shadow-soft transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-surface-dark">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-700">
          <span className="text-sm font-medium text-muted">Transaction ID</span>
          <span className="rounded bg-gray-50 px-3 py-1 font-mono text-sm tracking-wide text-foreground dark:bg-gray-800 dark:text-white">
            {transactionLabel}
          </span>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <span className="pt-1 text-sm font-medium text-muted">Product</span>
          <div className="text-right">
            <h3 className="font-display text-lg font-semibold text-foreground dark:text-white">
              {productTitle}
            </h3>
            <p className="text-sm text-muted">{productSubtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted">Date</span>
          <span className="font-medium text-foreground">{purchaseDate}</span>
        </div>
        <div className="mt-2 flex items-end justify-between border-t border-dashed border-gray-200 pt-4 dark:border-gray-700">
          <span className="pb-1 text-base font-medium text-muted">Total Paid</span>
          <span className="font-display text-3xl font-bold text-primary">{totalFormatted}</span>
        </div>
      </div>
    </div>
  );
}
