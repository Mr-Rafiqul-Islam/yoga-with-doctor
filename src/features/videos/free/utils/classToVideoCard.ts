import type { ClassItem } from "@/services/classApi";
import type { VideoCardProps } from "../components/VideoCard";

function formatDurationFromMinutes(minutes: number | undefined): string {
  if (!minutes || Number.isNaN(minutes)) return "0:00";
  const m = Math.floor(minutes);
  return `${m}:00`;
}



export function classItemToVideoCard(classItem: ClassItem): VideoCardProps {
  return {
    slug: classItem.slug,
    thumbnailUrl: classItem.video?.thumbnail ?? null,
    duration: formatDurationFromMinutes(classItem.video?.duration),
    category: classItem.category[0] ,
    title: classItem.title,
    description: classItem.shortDescription,
    authorName: classItem.props[0] ?? undefined,
    authorAvatarUrl: null,
    isFree: classItem.access === "PUBLIC",
    muxPlaybackId: classItem.video?.muxPlaybackId,
  };
}

