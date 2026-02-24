export function SavedArticlesLoadMoreSection() {
  return (
    <footer className="flex justify-center pt-4">
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-body-md font-medium text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
      >
        Load More Articles
        <span className="material-icons-outlined text-xl" aria-hidden>
          expand_more
        </span>
      </button>
    </footer>
  );
}

