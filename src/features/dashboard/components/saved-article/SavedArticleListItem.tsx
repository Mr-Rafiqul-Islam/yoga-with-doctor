import Link from "next/link";

import type { SavedArticle } from "@/features/dashboard/data/savedArticlesData";

type SavedArticleListItemProps = {
  article: SavedArticle;
};

export function SavedArticleListItem({ article }: SavedArticleListItemProps) {
  const isFinished = article.status === "finished";

  return (
    <li>
      <Link
        href={article.href}
        className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
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
    </li>
  );
}

