import Link from "next/link";

/**
 * Error / "Something shifted" state. Matches the YWD error page design.
 * Use in error.tsx or any error boundary UI.
 */
export function ErrorView({
  onReset,
  showTryAgain = true,
}: {
  onReset?: () => void;
  showTryAgain?: boolean;
}) {
  return (
    <main
      className="relative z-10 mx-auto flex max-w-md flex-1 flex-col items-center justify-center px-8 text-center"
      role="alert"
      aria-label="Something went wrong"
    >
      <div className="relative mb-8 h-64 w-64">
        <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
        <div className="relative flex h-full w-full items-center justify-center">
          <PlantSvg className="h-[200px] w-[200px] animate-float text-foreground/90 dark:text-gray-200" />
          <span
            className="absolute left-1/3 top-1/4 text-primary leaf-fall-1"
            aria-hidden
          >
            <span className="material-icons-round text-sm">eco</span>
          </span>
          <span
            className="absolute right-1/3 top-1/3 text-primary leaf-fall-2 [animation-delay:2s]"
            aria-hidden
          >
            <span className="material-icons-round text-sm">eco</span>
          </span>
          <span
            className="absolute left-1/2 top-10 -translate-x-1/2 text-primary leaf-fall-3 [animation-delay:4s]"
            aria-hidden
          >
            <span className="material-icons-round text-xs">eco</span>
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground dark:text-white">
          Something shifted
        </h1>
        <p className="mx-auto max-w-xs text-lg leading-relaxed text-muted">
          We encountered an unexpected path. Let&apos;s get you back to center.
        </p>
      </div>
      <div className="mt-10 w-full">
        <Link
          href="/"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:bg-primary-dark active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span>Return to Home</span>
          <span className="material-icons-round text-sm">east</span>
        </Link>
        {showTryAgain && onReset && (
          <button
            type="button"
            onClick={onReset}
            className="mt-4 w-full text-sm font-medium text-muted transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-radius-sm"
          >
            Try again
          </button>
        )}
        <a
          href="/contact"
          className="mt-2 inline-block text-sm font-medium text-muted transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-radius-sm"
        >
          Report Issue
        </a>
      </div>
    </main>
  );
}

function PlantSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M100 180C100 180 110 160 110 130C110 100 100 100 100 60"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M100 120C100 120 80 100 70 80"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        d="M100 90C100 90 60 70 50 50"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M100 110C100 110 130 90 140 70"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        d="M100 80C100 80 130 60 150 40"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle className="fill-primary" cx="70" cy="80" r="4" />
      <circle className="fill-primary" cx="50" cy="50" r="3" />
      <circle className="fill-primary" cx="140" cy="70" r="5" />
      <circle className="fill-primary" cx="150" cy="40" r="3" />
      <circle className="fill-primary" cx="100" cy="60" r="4" />
    </svg>
  );
}
