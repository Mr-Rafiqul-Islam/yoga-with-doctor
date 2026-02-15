import Image from "next/image";
import Link from "next/link";

export interface VideoCardProps {
  /** Thumbnail image URL (optional; shows placeholder if missing) */
  thumbnailUrl?: string | null;
  /** Video duration string, e.g. "10:00" */
  duration?: string;
  /** Category label, e.g. "YOGA THERAPY" */
  category?: string;
  /** Card title */
  title?: string;
  /** Short description */
  description?: string;
  /** Author/instructor name */
  authorName?: string;
  /** Author avatar image URL (optional) */
  authorAvatarUrl?: string | null;
  /** Whether to show the FREE tag */
  isFree?: boolean;
  /** Optional link for the card (wraps thumbnail + content in anchor if set) */
  href?: string;
  /** URL slug for details page (e.g. "morning-sunshine-flow"). Used to build href when href not set. */
  slug?: string;
}

/**
 * Single video card for the Free Wellness Library grid.
 * Semantic: <article>. Thumbnail with play overlay and duration, category, FREE tag, title, description, author.
 * Tailwind only, responsive, accessible.
 */
export function VideoCard({
  thumbnailUrl,
  duration = "0:00",
  category,
  title,
  description,
  authorName,
  authorAvatarUrl,
  isFree = true,
  href,
}: VideoCardProps) {
  const content = (
    <>
      {/* Thumbnail with play overlay and duration */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted/60">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
        {/* Play button overlay */}
        <div
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform hover:scale-105 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
          aria-hidden
        >
          <span className="material-icons-outlined text-3xl text-primary">
            play_arrow
          </span>
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 rounded-md bg-black/75 px-2 py-1 text-caption font-medium text-white">
          {duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Category + FREE tag row */}
        <div className="flex flex-wrap items-center gap-2">
          {category ? (
            <span className="text-caption font-semibold uppercase tracking-wide text-primary">
              {category}
            </span>
          ) : (
            <span className="h-3 w-20 rounded bg-muted/50" aria-hidden />
          )}
          {isFree ? (
            <span className="rounded bg-neutral-800/40 px-2 py-0.5 text-caption font-medium text-white dark:bg-gray-700">
              FREE
            </span>
          ) : null}
        </div>

        {/* Title */}
        {title ? (
          <h3 className="font-semibold leading-snug text-foreground line-clamp-2">
            {title}
          </h3>
        ) : (
          <div className="h-5 w-full max-w-[85%] rounded bg-muted/50" aria-hidden />
        )}

        {/* Description */}
        {description ? (
          <p className="text-body-md text-muted line-clamp-2">{description}</p>
        ) : (
          <div className="space-y-1">
            <div className="h-3 w-full rounded bg-muted/40" aria-hidden />
            <div className="h-3 w-[85%] rounded bg-muted/40" aria-hidden />
          </div>
        )}

        {/* Author */}
        <div className="mt-auto flex items-center gap-2">
          {authorAvatarUrl ? (
            <Image
              src={authorAvatarUrl}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div
              className="h-8 w-8 shrink-0 rounded-full bg-muted/50"
              aria-hidden
            />
          )}
          {authorName ? (
            <span className="text-body-md text-muted truncate">{authorName}</span>
          ) : (
            <div className="h-4 w-24 rounded bg-muted/40" aria-hidden />
          )}
        </div>
      </div>
    </>
  );

  const wrapperClassName =
    "flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-soft transition-shadow hover:shadow-elevation-sm dark:border-gray-700";

  if (href) {
    const isInternal = href.startsWith("/");
    const linkClass =
      "flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl";
    return (
      <article className={wrapperClassName}>
        {isInternal ? (
          <Link href={href} className={linkClass}>
            {content}
          </Link>
        ) : (
          <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        )}
      </article>
    );
  }

  return <article className={wrapperClassName}>{content}</article>;
}

/**
 * Skeleton placeholder for VideoCard during initial load.
 * Matches card layout with pulse animation.
 */
export function VideoCardSkeleton() {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-soft dark:border-gray-700"
      aria-hidden
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted/60 animate-pulse" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex justify-between gap-2">
          <div className="h-3 w-24 rounded bg-muted/60 animate-pulse" />
          <div className="h-5 w-12 rounded bg-muted/50 animate-pulse" />
        </div>
        <div className="h-5 w-full max-w-[90%] rounded bg-muted/50 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-muted/40 animate-pulse" />
          <div className="h-3 w-[80%] rounded bg-muted/40 animate-pulse" />
        </div>
        <div className="mt-auto flex items-center gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-muted/50 animate-pulse" />
          <div className="h-4 w-28 rounded bg-muted/40 animate-pulse" />
        </div>
      </div>
    </article>
  );
}
