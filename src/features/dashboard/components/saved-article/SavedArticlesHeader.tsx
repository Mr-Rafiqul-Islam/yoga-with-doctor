export function SavedArticlesHeader() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-display text-2xl font-bold text-foreground">
        Reading List
      </h1>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
          aria-label="Filter articles"
        >
          <span className="material-icons-outlined text-xl" aria-hidden>
            filter_list
          </span>
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
          aria-label="Toggle grid/list view"
        >
          <span className="material-icons-outlined text-xl" aria-hidden>
            view_module
          </span>
        </button>
      </div>
    </header>
  );
}

