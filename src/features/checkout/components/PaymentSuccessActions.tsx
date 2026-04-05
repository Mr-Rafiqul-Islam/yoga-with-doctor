import Link from "next/link";

type PaymentSuccessActionsProps = {
  /** Course detail route uses `[slug]`; prefer this over a raw id. */
  courseSlug?: string;
  onDownloadInvoice?: () => void;
  invoiceDisabled?: boolean;
  invoiceDisabledReason?: string;
};

export function PaymentSuccessActions({
  courseSlug,
  onDownloadInvoice,
  invoiceDisabled,
  invoiceDisabledReason,
}: PaymentSuccessActionsProps) {
  const slug = courseSlug?.trim() ?? "";
  const primaryHref = slug ? `/courses/${slug}/lesson` : "/dashboard";
  const primaryLabel = slug ? "Start Learning Now" : "Go to Dashboard";

  return (
    <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
      <Link
        href={primaryHref}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/30 active:scale-95 sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {primaryLabel}
        <span
          className="material-icons-outlined transition-transform group-hover:translate-x-1"
          aria-hidden
        >
          {slug ? "play_circle" : "dashboard"}
        </span>
      </Link>
      {onDownloadInvoice ? (
        <button
          type="button"
          disabled={invoiceDisabled}
          title={invoiceDisabled ? invoiceDisabledReason : undefined}
          onClick={onDownloadInvoice}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-transparent px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-80"
        >
          <span className="material-icons-outlined text-lg" aria-hidden>
            download
          </span>
          Download invoice
        </button>
      ) : null}
    </div>
  );
}
