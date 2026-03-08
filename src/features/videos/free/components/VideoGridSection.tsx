"use client";

import { FREE_VIDEOS } from "../data/freeVideosData";
import { VideoCard, VideoCardSkeleton, type VideoCardProps } from "./VideoCard";

const SKELETON_COUNT = 6;

export interface VideoGridSectionProps {
  /** List of videos to display. If empty/undefined, shows default Figma content (6 free videos). */
  videos?: VideoCardProps[];
  /** When true, show skeleton cards instead of content (e.g. initial load) */
  isLoading?: boolean;
}

/**
 * Video content grid section for the Free Wellness Library.
 * Uses default free videos from Figma when no videos prop is passed.
 */
export function VideoGridSection({
  videos = FREE_VIDEOS,
  isLoading = false,
}: VideoGridSectionProps) {
  const items = videos && videos.length > 0 ? videos : Array.from({ length: 6 });
  const isPlaceholder = !videos || videos.length === 0;
  

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
    </section>
  );
}
