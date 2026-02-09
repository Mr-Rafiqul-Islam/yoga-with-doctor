/**
 * Placeholder: trending discussions widget (hashtag topics + post counts).
 */
export function TrendingDiscussionsWidget() {
  return (
    <aside
      className="rounded-lg border border-border bg-surface p-5 shadow-sm"
      aria-label="Trending discussions"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-body-lg font-bold text-foreground">
          Trending Discussions
        </h3>
        <a
          href="#"
          className="text-caption font-medium text-primary hover:underline"
        >
          View All
        </a>
      </div>
      <ul className="space-y-4">
        {[1, 2, 3].map((i) => (
          <li key={i}>
            <button
              type="button"
              className="flex w-full items-start justify-between text-left transition-colors hover:text-primary"
            >
              <div>
                <p className="text-body-md font-medium text-foreground" />
                <p className="mt-0.5 text-caption text-muted" />
              </div>
              <span className="material-icons-outlined text-body-md text-muted" aria-hidden>
                trending_up
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
