import type { ClassItem } from "@/services/classApi";
import type { VideoCardProps } from "../components/VideoCard";

function formatDurationFromMinutes(minutes: number | undefined): string {
  if (!minutes || Number.isNaN(minutes)) return "0:00";
  const m = Math.floor(minutes);
  return `${m}:00`;
}

function mapCategoryLabel(primary: string | undefined): string {
  if (!primary) return "";
  if (primary === "yoga-therapy") return "Yoga Therapy";
  return primary;
}

export function classItemToVideoCard(classItem: ClassItem): VideoCardProps {
  return {
    slug: classItem.slug,
    thumbnailUrl: classItem.video?.thumbnail ?? null,
    duration: formatDurationFromMinutes(classItem.video?.duration),
    category: mapCategoryLabel(classItem.category?.primary),
    title: classItem.title,
    description: classItem.focus?.audience
      ? `Focus: ${classItem.focus.audience}`
      : undefined,
    authorName: classItem.props?.instructor ?? undefined,
    authorAvatarUrl: null,
    isFree: !classItem.isPremium,
    muxPlaybackId: classItem.video?.muxPlaybackId,
  };
}

