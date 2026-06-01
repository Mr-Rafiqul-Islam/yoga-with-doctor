import Image from "next/image";
import Link from "next/link";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

type ArticleCardProps = {
  article: ArticleDetails;
};

/**
 * Grid article card: image (with FREE/PREMIUM badge), category, time, title, description, author, action link.
 */
export function ArticleCard({ article }: ArticleCardProps) {
  const {
    image,
    imageAlt,
    badge,
    category,
    timeAgo,
    title,
    description,
    author,
    actionLabel,
    href,
  } = article;

  const isPremium = badge === "PREMIUM";

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-elevation-sm transition-all duration-300 hover:shadow-elevation-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
      aria-label={`${title}. ${actionLabel}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted/40">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span
          className={`pointer-events-none absolute left-2 top-2 z-10 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${
            isPremium
              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
              : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
          }`}
        >
          {isPremium && (
            <span className="material-icons-outlined text-[9px]" aria-hidden>
              lock
            </span>
          )}
          {badge}
        </span>
      </div>
      <div className="flex w-full min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <span className="truncate text-[11px] font-semibold uppercase tracking-wide text-primary">
              {category}
            </span>
            <span className="shrink-0 text-[11px] text-muted">{timeAgo}</span>
          </div>
          <h3 className="mb-2 line-clamp-2 font-anek-bangla text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary dark:text-white">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3 dark:border-gray-700">
          <span className="truncate text-xs font-medium text-foreground dark:text-gray-300">
            By {author.name}
          </span>
          <span className="shrink-0 text-xs font-semibold text-primary group-hover:underline">
            {actionLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Skeleton placeholder for ArticleCard during initial load.
 */
export function ArticleCardSkeleton() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-elevation-sm"
      aria-hidden
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-300">
        <div className="absolute left-2 top-2 h-4 w-10 animate-pulse rounded-full bg-gray-300" />
      </div>
      <div className="flex w-full min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <div className="h-2.5 w-16 animate-pulse rounded bg-gray-300" />
            <div className="h-2.5 w-12 animate-pulse rounded bg-gray-300" />
          </div>
          <div className="mb-2 space-y-1.5">
            <div className="h-4 w-full max-w-[95%] animate-pulse rounded bg-gray-300" />
            <div className="h-4 w-[75%] animate-pulse rounded bg-gray-300" />
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-full animate-pulse rounded bg-gray-300" />
            <div className="h-3 w-[85%] animate-pulse rounded bg-gray-300" />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3 dark:border-gray-700">
          <div className="h-2.5 w-24 animate-pulse rounded bg-gray-300" />
          <div className="h-2.5 w-16 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
