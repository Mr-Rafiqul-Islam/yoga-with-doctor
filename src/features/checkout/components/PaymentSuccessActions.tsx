import Link from "next/link";

type PaymentSuccessActionsProps = {
  courseId: string;
  courseSlug?: string;
};

export function PaymentSuccessActions({
  courseId,
  courseSlug = "hormonal-balance-yoga",
}: PaymentSuccessActionsProps) {
  const coursePath = courseId ? `/courses/${courseId}` : `/courses/${courseSlug}`;

  return (
    <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
      <Link
        href={coursePath}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/30 active:scale-95 sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Start Learning Now
        <span
          className="material-icons-outlined transition-transform group-hover:translate-x-1"
          aria-hidden
        >
          play_circle
        </span>
      </Link>
      <Link
        href="/dashboard"
        className="mt-2 flex items-center gap-1 text-sm text-muted transition-colors hover:text-primary dark:hover:text-primary"
      >
        <span className="material-icons-outlined text-sm" aria-hidden>
          arrow_back
        </span>
        Back to Dashboard
      </Link>
    </div>
  );
}
