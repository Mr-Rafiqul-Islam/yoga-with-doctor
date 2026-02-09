/**
 * Placeholder: live sessions widget (upcoming sessions + View Calendar).
 */
export function LiveSessionsWidget() {
  return (
    <aside
      className="rounded-lg border border-border bg-surface p-5 shadow-sm"
      aria-label="Live sessions"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-body-lg font-bold text-foreground">
          Live Sessions
        </h3>
      </div>
      <ul className="space-y-4">
        {[1, 2].map((i) => (
          <li key={i}>
            <button
              type="button"
              className="flex w-full gap-3 text-left transition-colors hover:text-primary"
            >
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-muted/20" />
              <div className="min-w-0 flex-1">
                <h4 className="text-body-md font-semibold text-foreground line-clamp-2" />
                <p className="mt-1 text-caption text-muted" />
              </div>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-5 w-full rounded-md border border-primary/20 bg-primary/5 py-2 text-body-md font-medium text-primary transition-colors hover:bg-primary/10"
      >
        View Calendar
      </button>
    </aside>
  );
}
