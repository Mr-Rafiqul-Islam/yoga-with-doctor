"use client";
import Link from "next/link";
import { useRef, useState } from "react";

import {
  MuxPlayerLazy,
  type MuxPlayerLazyRef,
} from "@/components/media/MuxPlayerLazy";

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
  level,
  title,
  authorName = "Dr. Md Shah Alam",
  slug,
  muxPlaybackId,
}: VideoCardProps) {
  const playerRef = useRef<MuxPlayerLazyRef>(null);
  const [videoDuration, setVideoDuration] = useState<string | number | null>(null);
  const handleLoadedMetadata = () => {
    const d = playerRef.current?.duration;
    if (d) setVideoDuration(formatDuration(d));
  };
  const content = (
    <>
      <div className="relative h-48">
        <MuxPlayerLazy
          ref={playerRef}
          className="h-full w-full"
          playbackId={muxPlaybackId}
          poster={thumbnailUrl ?? undefined}
          streamType="on-demand"
          onLoadedMetadata={handleLoadedMetadata}
          autoPlay={false}
          playsInline
          style={{
            aspectRatio: "auto",
            height: "100%",
            width: "100%",
            "--controls-backdrop-color": "transparent",
            "--media-object-fit": "cover",
            "--media-object-position": "center",
          }}
        />
        { videoDuration && <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-caption text-white">
          {videoDuration}
        </span>}
      </div>
      <div className="p-4">
        <Link
          href={slug ? `/videos/free/${slug}` : "#"}
          className="flex flex-col focus:outline-none rounded-radius-md"
        >
          <h3 className="mb-1 line-clamp-1 font-sans text-h2 font-semibold text-foreground">
            {title}
          </h3>
        </Link>
        <div className="flex items-center justify-between text-body-md text-muted">
          <span className="capitalize">{level}</span>
          <span>{authorName}</span>
        </div>
      </div>
    </>
  );

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-radius-md bg-surface shadow-elevation-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-md">
      {content}
    </article>
  );
}
