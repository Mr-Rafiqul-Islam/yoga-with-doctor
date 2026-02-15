"use client";

import { FREE_VIDEOS } from "../data/freeVideosData";
import { VideoCard, VideoCardSkeleton, type VideoCardProps } from "./VideoCard";

const SKELETON_COUNT = 6;

export interface VideoGridSectionProps {
  /** List of videos to display. If empty/undefined, shows default Figma content (6 free videos). */
  videos?: VideoCardProps[];
  /** When true, show skeleton cards instead of content (e.g. initial load) */
  isLoading?: boolean;
  /** Called when "Load More Content" is clicked */
  onLoadMore?: () => void;
  /** Whether there are more items to load (hides Load More when false) */
  hasMore?: boolean;
  /** When true, show "Show Less" instead of "Load More" (user has expanded the list) */
  showShowLess?: boolean;
  /** Called when "Show Less" is clicked */
  onShowLess?: () => void;
  /** Whether a load-more request is in progress */
  isLoadingMore?: boolean;
}

/**
 * Video content grid section for the Free Wellness Library.
 * Semantic: <section>. Grid of video cards + Load More button.
 * Uses default free videos from Figma when no videos prop is passed.
 */
export function VideoGridSection({
  videos = FREE_VIDEOS,
  isLoading = false,
  onLoadMore,
  hasMore = true,
  showShowLess = false,
  onShowLess,
  isLoadingMore = false,
}: VideoGridSectionProps) {
  const items = videos && videos.length > 0 ? videos : Array.from({ length: 6 });
  const isPlaceholder = !videos || videos.length === 0;
  const showLoadMore =
    (onLoadMore != null) &&
    !isPlaceholder &&
    (hasMore || isLoading) &&
    !showShowLess;
  const showLessVisible = showShowLess && (onShowLess != null) && !isLoading;

  const buttonClass =
    "flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-body-md font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 dark:border-gray-700 dark:bg-[#12241d]";

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
      aria-label="Free wellness videos"
      aria-busy={isLoading}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <VideoCardSkeleton key={i} />
            ))
          : isPlaceholder
            ? Array.from({ length: 6 }, (_, i) => <VideoCard key={i} />)
            : (items as VideoCardProps[]).map((item, index) => (
                <VideoCard
                  key={`${item.title ?? index}-${index}`}
                  {...item}
                  href={item.slug ? `/videos/free/${item.slug}` : item.href}
                />
              ))}
      </div>

      {(showLoadMore || showLessVisible) && (
        <div className="mt-10 flex justify-center">
          {showLessVisible ? (
            <button
              type="button"
              onClick={onShowLess}
              className={buttonClass}
              aria-label="Show less content"
            >
              <span>Show Less</span>
              <span className="material-icons-outlined text-xl" aria-hidden>
                expand_less
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onLoadMore}
              disabled={isLoadingMore || isLoading}
              className={buttonClass}
              aria-label={
                isLoading
                  ? "Loading content"
                  : isLoadingMore
                    ? "Loading more content"
                    : "Load more content"
              }
            >
              <span>
                {isLoading ? "Loading…" : isLoadingMore ? "Loading…" : "Load More Content"}
              </span>
              <span className="material-icons-outlined text-xl" aria-hidden>
                expand_more
              </span>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
