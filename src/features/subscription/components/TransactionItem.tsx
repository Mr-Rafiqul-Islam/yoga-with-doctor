export interface TransactionItemProps {
  title: string;
  type: string;
  amount: string;
  isCredit?: boolean;
  date: string;
  icon: string;
  iconBgClassName?: string;
  iconClassName?: string;
  statusDotClassName?: string;
  className?: string;
  invoiceDownload?: {
    onClick: () => void;
    disabled?: boolean;
    disabledReason?: string;
  };
}

export function TransactionItem({
  title,
  type,
  amount,
  isCredit = false,
  date,
  icon,
  iconBgClassName = "bg-gray-100 dark:bg-gray-800",
  iconClassName = "text-gray-500 dark:text-gray-400",
  statusDotClassName = "bg-primary",
  className = "",
  invoiceDownload,
}: TransactionItemProps) {
  return (
    <article className={`flex items-start gap-4 ${className}`}>
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${iconBgClassName} ${iconClassName}`}
      >
        <span className="material-icons-round">{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-start justify-between">
          <h4 className="truncate pr-2 text-sm font-bold text-foreground">{title}</h4>
          <span
            className={`whitespace-nowrap text-sm font-bold ${
              isCredit ? "text-primary" : "text-foreground"
            }`}
          >
            {amount}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted">{type}</p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted">{date}</span>
            <div className={`h-2 w-2 rounded-full ${statusDotClassName}`} aria-hidden />
          </div>
        </div>
        {invoiceDownload ? (
          <button
            type="button"
            disabled={invoiceDownload.disabled}
            title={invoiceDownload.disabled ? invoiceDownload.disabledReason : undefined}
            onClick={invoiceDownload.onClick}
            className="mt-2 text-xs font-medium text-primary hover:underline disabled:cursor-not-allowed disabled:opacity-50 disabled:no-underline"
          >
            Download invoice
          </button>
        ) : null}
      </div>
    </article>
  );
}
