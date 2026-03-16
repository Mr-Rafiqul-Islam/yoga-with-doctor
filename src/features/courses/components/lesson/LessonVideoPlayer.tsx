import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import { useEffect, useState } from "react";
import { useLazyGetVideoPlaybackTokenQuery } from "@/slices/videos";

export interface LessonVideoPlayerProps {
  thumbnailUrl: string;
  /** Optional Mux playback ID for this lesson's video. */
  muxPlaybackId?: string;
  /** Display duration e.g. "15:00" (mm:ss) */
  duration?: string;
  /** Optional backend video id used for playback token endpoint. */
  videoId?: string;
  /** Optional video processing status (e.g. "READY"). */
  videoStatus?: string;
}

export function LessonVideoPlayer({
  thumbnailUrl,
  muxPlaybackId,
  videoId,
  videoStatus,
}: LessonVideoPlayerProps) {
  const [playbackId, setPlaybackId] = useState<string | undefined>(undefined);
  const [playbackToken, setPlaybackToken] = useState<string | null>(null);
  const [getPlaybackToken] = useLazyGetVideoPlaybackTokenQuery();

  useEffect(() => {
    // Fetch playback token for this lesson's video when it's ready
    if (videoId && muxPlaybackId && videoStatus === "READY") {
      getPlaybackToken(videoId)
        .unwrap()
        .then((result: any) => {
          if (result?.success && result.data) {
            setPlaybackId(result.data.playbackId);
            setPlaybackToken(result.data.playbackToken || null);
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson playback token:", error);
          // Fallback to using muxPlaybackId directly
          setPlaybackId(muxPlaybackId);
          setPlaybackToken(null);
        });
    } else if (muxPlaybackId) {
      // Fallback: use muxPlaybackId directly if video is not ready or token fetch fails
      setPlaybackId(muxPlaybackId);
      setPlaybackToken(null);
    } else {
      setPlaybackId(undefined);
      setPlaybackToken(null);
    }
  }, [videoId, muxPlaybackId, videoStatus, getPlaybackToken]);

  return (
    <section
      aria-label="Lesson video"
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-elevation-md"
    >
      {playbackId ? (
        <MuxPlayer
          className="h-full w-full"
          playbackId={playbackId}
          poster={thumbnailUrl}
          {...(playbackToken ? { tokens: { playback: playbackToken } } : {})}
          streamType="on-demand"
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
      ) : (
        <Image
          src={thumbnailUrl}
          alt=""
          fill
          className="object-cover opacity-80 transition-opacity group-hover:opacity-60"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      )}

      
    </section>
  );
}
