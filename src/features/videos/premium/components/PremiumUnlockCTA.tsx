import Link from "next/link";

export function PremiumUnlockCTA() {
  return (
    <div className="sticky bottom-6 z-40 w-full px-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-elevation-md dark:border-gray-700 dark:bg-[#1E1E1E] dark:shadow-2xl sm:p-6">
        <div
          className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary opacity-20 blur-3xl dark:opacity-10"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full border border-border bg-secondary p-3 dark:border-gray-700 dark:bg-gray-800 sm:block">
              <span className="material-icons-outlined text-accent">star</span>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-foreground dark:text-white">
                Unlock Premium Access
              </h4>
              <p className="text-sm text-muted dark:text-gray-400">
                Get access to all 50+ masterclasses and doctor-led sessions
              </p>
            </div>
          </div>
          <Link
            href="/courses?premium=1"
            className="z-10 w-full rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-primary-dark sm:w-auto"
          >
            Go Pro
          </Link>
        </div>
      </div>
    </div>
  );
}
