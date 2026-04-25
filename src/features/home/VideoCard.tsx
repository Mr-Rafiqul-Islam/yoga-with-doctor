import Image from "next/image";
import Link from "next/link";

export type VideoCardProps = {
  thumbnailUrl?: string | null;
  duration?: string;
  category?: string;
  title?: string;
  description?: string;
  authorName?: string;
  authorAvatarUrl?: string | null;
  isFree?: boolean;
  href?: string;
  slug?: string;
  muxPlaybackId?: string;
  muxAssetId?: string;
  id?: string;
  level?: string;
  status?: string;
};
export function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function VideoCard({
  thumbnailUrl,
  duration,
  level,
  title,
  authorName = "Dr. Md Shah Alam",
  slug,
  muxPlaybackId,
}: VideoCardProps) {
  const imageSrc =
    thumbnailUrl ??
    (muxPlaybackId
      ? `https://image.mux.com/${muxPlaybackId}/thumbnail.webp?time=0`
      : null);

  return (
    <Link
      href={slug ? `/videos/free/${slug}` : "#"}
      className="group relative flex flex-col overflow-hidden rounded-radius-md bg-surface shadow-elevation-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted/40">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
        {duration ? (
          <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-caption text-white">
            {duration}
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 font-sans text-h2 font-semibold text-foreground">
          {title}
        </h3>
        <div className="flex items-center justify-between text-body-md text-muted">
          <span className="capitalize">{level}</span>
          <span>{authorName}</span>
        </div>
      </div>
    </Link>
  );
}
