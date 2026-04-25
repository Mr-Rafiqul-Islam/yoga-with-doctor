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
      className="group flex h-64 flex-row overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-sm transition-all duration-300 hover:shadow-elevation-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
      aria-label={`${title}. ${actionLabel}`}
    >
      <article className="flex min-h-0 w-full min-w-0 flex-row">
        <div className="relative w-1/3 shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="33vw"
          />
          <span
            className={`pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${
              isPremium
                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
            }`}
          >
            {isPremium && (
              <span className="material-icons-outlined text-[10px]" aria-hidden>
                lock
              </span>
            )}
            {badge}
          </span>
        </div>
        <div className="flex w-2/3 min-w-0 flex-col justify-between p-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-caption font-semibold uppercase tracking-wide text-primary">
                {category}
              </span>
              <span className="text-caption text-muted">{timeAgo}</span>
            </div>
            <h3 className="mb-3 line-clamp-2 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary dark:text-white">
              {title}
            </h3>
            <p className="mb-4 line-clamp-2 text-body-md text-muted">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4 dark:border-gray-700">
            <span className="text-caption font-medium text-foreground dark:text-gray-300">
              By {author.name}
            </span>
            <span className="text-body-md font-semibold text-primary group-hover:underline">
              {actionLabel}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
