"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type MuxPlayerElement from "@mux/mux-player";
import {
  LESSON_VIDEO_MIN_FLUSH_SEC,
  LESSON_VIDEO_SEEK_JUMP_TOLERANCE_SEC,
  LESSON_VIDEO_WATCH_FLUSH_INTERVAL_SEC,
} from "./videoPlayerConstants";

export interface UseLessonWatchProgressArgs {
  lessonId: string | undefined;
  playbackId: string | undefined;
  progressEnabled: boolean;
  onFirstPlay?: () => void;
  onLessonProgressStart?: (lessonId: string) => void;
  onLessonWatchDelta?: (lessonId: string, watchedSecDelta: number) => void;
}

export interface UseLessonWatchProgressResult {
  /** Mux `onTimeUpdate` handler. */
  handleTimeUpdate: (e: Event) => void;
  /** Call on pause / end (and unmount) to flush pending watch seconds. */
  flushPending: () => void;
  /** Mux `onPlay`: first-play callback, then optional START progress event once per lesson. */
  handlePlay: () => void;
}

/**
 * Batches `currentTime` deltas and reports to `onLessonWatchDelta`; sends START once per lesson via `handlePlay`.
 */
export function useLessonWatchProgress({
  lessonId,
  playbackId,
  progressEnabled,
  onFirstPlay,
  onLessonProgressStart,
  onLessonWatchDelta,
}: UseLessonWatchProgressArgs): UseLessonWatchProgressResult {
  const [hasStarted, setHasStarted] = useState(false);

  const lastPlaybackPosRef = useRef(0);
  const pendingDeltaRef = useRef(0);
  const startSentForLessonRef = useRef<string | null>(null);

  useEffect(() => {
    setHasStarted(false);
  }, [lessonId]);

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
      pendingDeltaRef.current < LESSON_VIDEO_MIN_FLUSH_SEC
    ) {
      pendingDeltaRef.current = 0;
      return;
    }
    const send = pendingDeltaRef.current;
    pendingDeltaRef.current = 0;
    onLessonWatchDelta(lessonId, send);
  }, [lessonId, progressEnabled, onLessonWatchDelta]);

  useEffect(() => () => flushPending(), [flushPending]);

  const handleTimeUpdate = useCallback(
    (e: Event) => {
      if (!progressEnabled || !lessonId || !onLessonWatchDelta) return;
      const media = e.target as MuxPlayerElement;
      const t = media.currentTime;
      const prev = lastPlaybackPosRef.current;
      if (t < prev - LESSON_VIDEO_SEEK_JUMP_TOLERANCE_SEC) {
        lastPlaybackPosRef.current = t;
        return;
      }
      const d = t - prev;
      lastPlaybackPosRef.current = t;
      if (d <= 0) return;
      pendingDeltaRef.current += d;
      if (pendingDeltaRef.current >= LESSON_VIDEO_WATCH_FLUSH_INTERVAL_SEC) {
        const send = pendingDeltaRef.current;
        pendingDeltaRef.current = 0;
        onLessonWatchDelta(lessonId, send);
      }
    },
    [lessonId, progressEnabled, onLessonWatchDelta]
  );

  const handlePlay = useCallback(() => {
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
  }, [
    hasStarted,
    lessonId,
    progressEnabled,
    onFirstPlay,
    onLessonProgressStart,
  ]);

  return { handleTimeUpdate, flushPending, handlePlay };
}
