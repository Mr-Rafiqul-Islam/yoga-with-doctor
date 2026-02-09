/**
 * Placeholder: user profile card for the community sidebar.
 * Shows avatar, name, membership, short bio, and stats (e.g. courses, sessions).
 */
export function UserProfileCard() {
  return (
    <article
      className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm"
      aria-label="User profile"
    >
      <div className="h-24 bg-gradient-to-r from-emerald-100 to-teal-50 dark:from-emerald-900/40 dark:to-teal-900/40" />
      <div className="relative px-5 pb-6">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-surface shadow-sm dark:border-[var(--color-surface)]">
            {/* Avatar placeholder */}
            <div className="h-full w-full bg-muted" />
          </div>
        </div>
        <div className="mt-14 text-center">
          <h3 className="text-lg font-bold text-foreground" />
          <p className="mt-1 text-body-md font-medium text-primary" />
          <p className="mt-2 line-clamp-2 text-caption text-muted" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-center">
          <div>
            <span className="block text-h1 font-bold text-foreground" />
            <span className="text-caption uppercase tracking-wide text-muted" />
          </div>
          <div>
            <span className="block text-h1 font-bold text-foreground" />
            <span className="text-caption uppercase tracking-wide text-muted" />
          </div>
        </div>
      </div>
    </article>
  );
}
