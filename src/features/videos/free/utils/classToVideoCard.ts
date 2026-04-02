import type { ClassItem } from "@/slices/classes";
import type { FreeVideoDetails } from "../data/freeVideoDetailsData";
import type { VideoCardProps } from "../components/VideoCard";

function formatDurationFromMinutes(minutes: number | undefined): string {
  if (!minutes || Number.isNaN(minutes)) return "0:00";
  const m = Math.floor(minutes);
  return `${m}:00`;
}



export function classItemToVideoCard(
  classItem: ClassItem | FreeVideoDetails,
): VideoCardProps {
  return {
    slug: classItem.slug,
    thumbnailUrl: classItem.video?.thumbnail ?? null,
    duration: formatDurationFromMinutes(classItem.video?.duration),
    category: classItem.category[0] ,
    title: classItem.title,
    description: classItem.shortDescription,
    authorName: classItem.author.name as string | undefined ,
    authorAvatarUrl: classItem.author.avatarSrc as string | null,
    
    isFree: classItem.access === "PUBLIC",
    muxPlaybackId: classItem.video?.muxPlaybackId,
    muxAssetId: classItem.video?.muxAssetId,
    level: classItem.video?.level,
    id: classItem.video?.id,
    status: classItem.video?.status,
  };
}

