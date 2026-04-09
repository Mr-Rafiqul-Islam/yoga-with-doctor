"use client";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import type MuxPlayerElement from "@mux/mux-player";
import { useId, useMemo, useRef } from "react";
import { watermarkContactFromUser } from "@/features/courses/lib/lessonVideoPlayerUtils";
import { useAppSelector } from "@/stores/hooks";
import { LessonVideoWatermark } from "./LessonVideoWatermark";
import { useLessonMuxPlayback } from "./useLessonMuxPlayback";
import { useLessonWatchProgress } from "./useLessonWatchProgress";
import { useLayoutEffectWithMuxFullscreen, useMovingVideoWatermark } from "./useMovingVideoWatermark";

const MUX_PLAYER_STYLE = {
  aspectRatio: "auto",
  height: "100%",
  width: "100%",
  "--controls-backdrop-color": "transparent",
  "--media-object-fit": "cover",
  "--media-object-position": "center",
} as const;



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
  /**
   * Called the first time the user starts playback for this lesson.
   * Useful for triggering side effects like auto-enrollment.
   */
  onFirstPlay?: () => void;
  /** When set with progressEnabled, POST START once per lesson when play begins. */
  lessonId?: string;
  /** Report watch progress to course API (START / WATCH). */
  progressEnabled?: boolean;
  onLessonProgressStart?: (lessonId: string) => void;
  onLessonWatchDelta?: (lessonId: string, watchedSecDelta: number) => void;
}

export function LessonVideoPlayer({
  thumbnailUrl,
  muxPlaybackId,
  videoId,
  videoStatus,
  onFirstPlay,
  lessonId,
  progressEnabled = false,
  onLessonProgressStart,
  onLessonWatchDelta,
}: LessonVideoPlayerProps) {
  const fullscreenRootId = `lesson-video-fs-${useId().replace(/:/g, "")}`;
  const sectionRef = useRef<HTMLElement | null>(null);
  const muxPlayerRef = useRef<MuxPlayerElement | null>(null);

  const user = useAppSelector((s) => s.auth.user);
  const watermarkText = useMemo(() => watermarkContactFromUser(user), [user]);
  const showWatermark = Boolean(watermarkText);

  const { playbackId, playbackToken } = useLessonMuxPlayback(
    videoId,
    muxPlaybackId,
    videoStatus
  );

  const watermarkPosition = useMovingVideoWatermark(showWatermark, sectionRef, watermarkText);

  const { handleTimeUpdate, flushPending, handlePlay } = useLessonWatchProgress({
    lessonId,
    playbackId,
    progressEnabled,
    onFirstPlay,
    onLessonProgressStart,
    onLessonWatchDelta,
  });

  /* Fullscreen must target the outer section so the watermark (sibling overlay) stays in the fullscreen subtree.
   * Mux only applies `fullscreen-element` from the attribute when `mediaController` already exists; if the
   * attribute is set earlier, it is skipped and never retried. We re-sync once the controller is ready. */
  useLayoutEffectWithMuxFullscreen(muxPlayerRef, sectionRef, fullscreenRootId, Boolean(playbackId));

  return (
    <section
      ref={sectionRef}
      id={fullscreenRootId}
      aria-label="Lesson video"
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-elevation-md"
      onContextMenu={(e) => e.preventDefault()}
    >
      {playbackId ? (
        /* fullscreenElement: section id; mediaController sync in useLayoutEffect for reliability */
        <MuxPlayer
          ref={muxPlayerRef}
          className="h-full w-full"
          playbackId={playbackId}
          poster={thumbnailUrl}
          {...(playbackToken ? { tokens: { playback: playbackToken } } : {})}
          fullscreenElement={fullscreenRootId}
          streamType="on-demand"
          autoPlay={false}
          disablePictureInPicture={true}
          playsInline={true}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handlePlay}
          onPause={flushPending}
          onEnded={flushPending}
          style={MUX_PLAYER_STYLE}
        />
      ) : (
        <Image
          src={thumbnailUrl ?? null}
          alt=""
          fill
          className="object-cover opacity-80 transition-opacity group-hover:opacity-60"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      )}
      <LessonVideoWatermark text={watermarkText} position={watermarkPosition} />
    </section>
  );
}
