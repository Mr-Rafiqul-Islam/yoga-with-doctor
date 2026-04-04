import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type MuxPlayerElement from "@mux/mux-player";
import { useLazyGetVideoPlaybackTokenQuery } from "@/slices/videos";

const WATCH_FLUSH_INTERVAL_SEC = 12;
const MIN_FLUSH_SEC = 0.5;

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
  const [playbackId, setPlaybackId] = useState<string | undefined>(undefined);
  const [playbackToken, setPlaybackToken] = useState<string | null>(null);
  const [getPlaybackToken] = useLazyGetVideoPlaybackTokenQuery();
  const [hasStarted, setHasStarted] = useState(false);

  const lastPlaybackPosRef = useRef(0);
  const pendingDeltaRef = useRef(0);
  const startSentForLessonRef = useRef<string | null>(null);

  useEffect(() => {
    lastPlaybackPosRef.current = 0;
    pendingDeltaRef.current = 0;
    startSentForLessonRef.current = null;
  }, [lessonId, playbackId]);

  const flushPending = useCallback(() => {
    if (
      !progressEnabled ||
      !lessonId ||
      !onLessonWatchDelta ||
      pendingDeltaRef.current < MIN_FLUSH_SEC
    ) {
      pendingDeltaRef.current = 0;
      return;
    }
    const send = pendingDeltaRef.current;
    pendingDeltaRef.current = 0;
    onLessonWatchDelta(lessonId, send);
  }, [lessonId, progressEnabled, onLessonWatchDelta]);

  useEffect(() => () => flushPending(), [flushPending]);

  useEffect(() => {
    // Fetch playback token for this lesson's video when it's ready
    if (videoId && muxPlaybackId && videoStatus === "READY") {
      getPlaybackToken(videoId)
        .unwrap()
        .then((result: { success?: boolean; data?: { playbackId: string; playbackToken?: string | null } }) => {
          if (result?.success && result.data) {
            setPlaybackId(result.data.playbackId);
            setPlaybackToken(result.data.playbackToken || null);
          }
        })
        .catch(() => {
          setPlaybackId(muxPlaybackId);
          setPlaybackToken(null);
        });
    } else if (muxPlaybackId) {
      setPlaybackId(muxPlaybackId);
      setPlaybackToken(null);
    } else {
      setPlaybackId(undefined);
      setPlaybackToken(null);
    }
  }, [videoId, muxPlaybackId, videoStatus, getPlaybackToken]);

  const handleTimeUpdate = useCallback(
    (e: Event) => {
      if (!progressEnabled || !lessonId || !onLessonWatchDelta) return;
      const media = e.target as MuxPlayerElement;
      const t = media.currentTime;
      const prev = lastPlaybackPosRef.current;
      if (t < prev - 0.25) {
        lastPlaybackPosRef.current = t;
        return;
      }
      const d = t - prev;
      lastPlaybackPosRef.current = t;
      if (d <= 0) return;
      pendingDeltaRef.current += d;
      if (pendingDeltaRef.current >= WATCH_FLUSH_INTERVAL_SEC) {
        const send = pendingDeltaRef.current;
        pendingDeltaRef.current = 0;
        onLessonWatchDelta(lessonId, send);
      }
    },
    [lessonId, progressEnabled, onLessonWatchDelta]
  );

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
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => {
            if (!hasStarted) {
              setHasStarted(true);
              onFirstPlay?.();
            }
            if (
              progressEnabled &&
              lessonId &&
              onLessonProgressStart &&
              startSentForLessonRef.current !== lessonId
            ) {
              startSentForLessonRef.current = lessonId;
              onLessonProgressStart(lessonId);
            }
          }}
          onPause={flushPending}
          onEnded={flushPending}
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
          src={thumbnailUrl ?? null}
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
