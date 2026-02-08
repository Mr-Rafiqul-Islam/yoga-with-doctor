/**
 * Articles page header: WELLNESS & WISDOM, title, Filter + Sort buttons.
 */
type ArticlesPageHeaderProps = {
  onFilterClick?: () => void;
  onSortClick?: () => void;
};

export function ArticlesPageHeader({
  onFilterClick,
  onSortClick,
}: ArticlesPageHeaderProps) {
  return (
    <header
      className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      aria-label="Articles page header"
    >
      <div>
        <p className="mb-2 text-caption font-medium uppercase tracking-wider text-primary">
          Wellness & Wisdom
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          Health & Yoga Articles
        </h1>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onFilterClick}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-800"
          aria-label="Filter articles"
          aria-expanded={onFilterClick ? undefined : undefined}
        >
          <span className="material-icons-outlined text-base" aria-hidden>
            filter_list
          </span>
          Filter
        </button>
        <button
          type="button"
          onClick={onSortClick}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-800"
          aria-label="Sort articles"
        >
          <span className="material-icons-outlined text-base" aria-hidden>
            sort
          </span>
          Sort
        </button>
      </div>
    </header>
  );
}
