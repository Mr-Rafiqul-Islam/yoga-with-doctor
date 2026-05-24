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
  description,
  thumbnailUrl,
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
      <div className="relative aspect-video w-full overflow-hidden bg-muted/40">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="video thumbnail"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <div className="rounded-full leading-none border border-white/20 bg-black/40 p-2.5 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:bg-white/10">
            <span className="material-icons-outlined text-2xl text-white">
              play_arrow
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 font-anek-bangla text-h2 font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-body-md text-muted line-clamp-2 mb-2">{description}</p>
        <div className="flex items-center justify-between text-body-md text-muted">
          <span className="capitalize text-primary font-semibold">{level}</span>
          <span>{authorName}</span>
        </div>
      </div>
    </Link>
  );
}
