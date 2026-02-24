type PaymentFailedTransactionBoxProps = {
  transactionId: string;
};

export function PaymentFailedTransactionBox({
  transactionId,
}: PaymentFailedTransactionBoxProps) {
  if (!transactionId) return null;

  return (
    <div className="mt-8 rounded-lg border border-gray-200 bg-surface px-4 py-3 dark:border-gray-700 dark:bg-surface-dark">
      <p className="text-xs font-medium text-muted">Transaction ID</p>
      <p className="mt-1 font-mono text-sm text-foreground">{transactionId}</p>
    </div>
  );
}

