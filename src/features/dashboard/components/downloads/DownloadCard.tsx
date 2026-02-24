import Link from "next/link";
import type { CSSProperties } from "react";

import type { DownloadItem } from "@/features/dashboard/data/downloadsData";

type DownloadCardProps = {
  item: DownloadItem;
};

export function DownloadCard({ item }: DownloadCardProps) {
  const isDownloading = item.status === "DOWNLOADING";

  return (
    <article className="group relative rounded-xl border border-border bg-surface p-5 shadow-elevation-sm transition-shadow hover:shadow-elevation-md">
      {isDownloading && (
        <button
          type="button"
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
          aria-label="Cancel download"
        >
          <span className="material-icons-outlined text-sm" aria-hidden>
            close
          </span>
        </button>
      )}
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <span
            className={`material-icons-outlined text-2xl ${item.iconColor}`}
            aria-hidden
          >
            {item.icon}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
            {item.title}
          </h3>
          <p className="text-caption text-muted">
            {item.size} • {item.downloadedAt}
          </p>
        </div>
      </div>
      {isDownloading && item.progress !== undefined && (
        <div className="mb-4">
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${item.progress}%` } as CSSProperties}
            />
          </div>
          <p className="text-caption text-muted">Downloading...</p>
        </div>
      )}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-caption font-medium text-muted dark:bg-gray-800">
          {item.type}
        </span>
        {item.status === "COMPLETED" && (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-caption font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            COMPLETED
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        {item.actionLabel && (
          <Link
            href={item.actionLink}
            className="text-body-md font-medium text-primary hover:underline"
          >
            {item.actionLabel}
          </Link>
        )}
        <button
          type="button"
          className={`ml-auto flex items-center gap-1.5 rounded-lg px-4 py-2 text-body-md font-semibold text-white transition-colors ${
            item.type === "PDF"
              ? "bg-purple-600 hover:bg-purple-700"
              : item.type === "VIDEO"
              ? "bg-pink-600 hover:bg-pink-700"
              : item.type === "AUDIO"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-yellow-600 hover:bg-yellow-700"
          }`}
        >
          <span className="material-icons-outlined text-lg" aria-hidden>
            {item.actionButtonIcon}
          </span>
          {item.actionButtonLabel}
        </button>
      </div>
    </article>
  );
}

