"use client";

import { FREE_VIDEOS } from "../data/freeVideosData";
import { VideoCard, type VideoCardProps } from "./VideoCard";

export interface VideoGridSectionProps {
  /** List of videos to display. If empty/undefined, shows default Figma content (6 free videos). */
  videos?: VideoCardProps[];
  /** Called when "Load More Content" is clicked */
  onLoadMore?: () => void;
  /** Whether there are more items to load (hides button when false) */
  hasMore?: boolean;
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
  onLoadMore,
  hasMore = true,
  isLoadingMore = false,
}: VideoGridSectionProps) {
  const items = videos && videos.length > 0 ? videos : Array.from({ length: 6 });
  const isPlaceholder = !videos || videos.length === 0;
  const showLoadMore = hasMore && (onLoadMore != null) && !isPlaceholder;

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
      aria-label="Free wellness videos"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isPlaceholder
          ? Array.from({ length: 6 }, (_, i) => <VideoCard key={i} />)
          : (items as VideoCardProps[]).map((item, index) => (
              <VideoCard
                key={`${item.title ?? index}-${index}`}
                {...item}
              />
            ))}
      </div>

      {showLoadMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-body-md font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 dark:border-gray-700 dark:bg-[#12241d]"
            aria-label={isLoadingMore ? "Loading more content" : "Load more content"}
          >
            <span>{isLoadingMore ? "Loading…" : "Load More Content"}</span>
            <span className="material-icons-outlined text-xl" aria-hidden>
              expand_more
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
