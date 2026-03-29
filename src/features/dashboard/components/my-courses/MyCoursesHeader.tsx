import Link from "next/link";

export function MyCoursesHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          My courses
        </h1>
        <p className="max-w-xl text-body-md text-muted">
          Every course you&apos;re enrolled in lives here. Open a course to pick
          up where you left off.
        </p>
      </div>
      <Link
        href="/courses"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-body-md font-semibold text-foreground shadow-elevation-sm transition-colors hover:border-primary/40 hover:text-primary dark:border-gray-700 dark:hover:border-primary/50"
      >
        <span className="material-icons-outlined text-[20px]" aria-hidden>
          add
        </span>
        Browse catalog
      </Link>
    </header>
  );
}
