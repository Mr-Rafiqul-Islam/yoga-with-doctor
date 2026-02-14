import type { VideoCardProps } from "../components/VideoCard";

/** Parse duration string "MM:SS" or "M:SS" to total minutes (e.g. "15:00" -> 15, "05:30" -> 5.5). */
export function durationToMinutes(duration: string | undefined): number {
  if (!duration || typeof duration !== "string") return 0;
  const parts = duration.trim().split(":");
  const mins = parseInt(parts[0], 10) || 0;
  const secs = parseInt(parts[1], 10) || 0;
  return mins + secs / 60;
}

/** Duration filter: short 0–10 min, medium 11–30 min, long 31+ min. */
export function matchesDurationRange(
  durationMinutes: number,
  range: "" | "short" | "medium" | "long"
): boolean {
  if (!range) return true;
  if (range === "short") return durationMinutes <= 10;
  if (range === "medium") return durationMinutes > 10 && durationMinutes <= 30;
  if (range === "long") return durationMinutes > 30;
  return true;
}

export interface FilterParams {
  searchQuery: string;
  categoryFilter: string;
  durationFilter: string;
}

export function filterVideos(
  videos: VideoCardProps[],
  { searchQuery, categoryFilter, durationFilter }: FilterParams
): VideoCardProps[] {
  const search = searchQuery.trim().toLowerCase();
  const category = categoryFilter.trim();
  const duration = durationFilter.trim() as "" | "short" | "medium" | "long";

  return videos.filter((video) => {
    if (search) {
      const title = (video.title ?? "").toLowerCase();
      const desc = (video.description ?? "").toLowerCase();
      const cat = (video.category ?? "").toLowerCase();
      const author = (video.authorName ?? "").toLowerCase();
      const match =
        title.includes(search) ||
        desc.includes(search) ||
        cat.includes(search) ||
        author.includes(search);
      if (!match) return false;
    }
    if (category && (video.category ?? "") !== category) return false;
    const mins = durationToMinutes(video.duration);
    if (!matchesDurationRange(mins, duration)) return false;
    return true;
  });
}
