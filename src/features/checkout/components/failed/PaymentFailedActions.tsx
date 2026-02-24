import Link from "next/link";

type PaymentFailedActionsProps = {
  onTryAgain: () => void;
};

export function PaymentFailedActions({ onTryAgain }: PaymentFailedActionsProps) {
  return (
    <div className="w-full space-y-6">
      <button
        type="button"
        onClick={onTryAgain}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-error px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
      >
        Try Again
        <span className="material-icons-outlined text-xl transition-transform duration-500 group-hover:rotate-180">
          refresh
        </span>
      </button>
      <Link
        href="/contact"
        className="inline-block font-medium text-muted transition-colors duration-200 hover:text-error dark:hover:text-error"
      >
        Contact Support
      </Link>
    </div>
  );
}

