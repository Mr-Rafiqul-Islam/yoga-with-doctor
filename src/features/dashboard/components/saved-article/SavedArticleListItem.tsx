import Link from "next/link";

import type { SavedArticle } from "@/features/dashboard/data/savedArticlesData";

type SavedArticleListItemProps = {
  article: SavedArticle;
  onRemove: () => void;
};

export function SavedArticleListItem({
  article,
  onRemove,
}: SavedArticleListItemProps) {
  const isFinished = article.status === "finished";

  return (
    <li className="flex min-h-[88px] items-stretch gap-2">
      <Link
        href={article.href}
        className="group flex min-w-0 flex-1 items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <span
            className={`material-icons-outlined text-xl ${
              isFinished ? "text-blue-600 dark:text-blue-400" : "text-blue-600 dark:text-blue-400"
            }`}
            aria-hidden
          >
            {isFinished ? "check_circle" : "bookmark"}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="mb-1 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
            {article.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-caption text-muted">
            {isFinished && (
              <>
                <span className="font-medium">Finished</span>
                <span aria-hidden>•</span>
              </>
            )}
            <span>By {article.author.name}</span>
            {article.readTime && (
              <>
                <span aria-hidden>•</span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>
        </div>
        <span
          className="material-icons-outlined shrink-0 text-muted text-xl transition-transform group-hover:translate-x-1"
          aria-hidden
        >
          chevron_right
        </span>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onRemove();
        }}
        className="flex shrink-0 items-center justify-center self-stretch rounded-xl border border-border bg-surface px-3 text-muted shadow-elevation-sm transition-colors hover:border-destructive/40 hover:bg-destructive/5 hover:text-destructive"
        aria-label={`Remove “${article.title}” from saved articles`}
        title="Remove from saved"
      >
        <span className="material-icons-outlined text-xl" aria-hidden>
          bookmark_remove
        </span>
      </button>
    </li>
  );
}

