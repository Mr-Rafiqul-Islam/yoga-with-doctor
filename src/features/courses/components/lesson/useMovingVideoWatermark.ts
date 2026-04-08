"use client";

import { useCallback, useEffect, useState } from "react";
import {
  LESSON_VIDEO_WATERMARK_MIN_PCT,
  LESSON_VIDEO_WATERMARK_MOVE_MS,
  LESSON_VIDEO_WATERMARK_SPAN_PCT,
} from "./videoPlayerConstants";

export interface WatermarkPositionPct {
  top: string;
  left: string;
}

function randomWatermarkPosition(): WatermarkPositionPct {
  const t =
    Math.floor(Math.random() * LESSON_VIDEO_WATERMARK_SPAN_PCT) +
    LESSON_VIDEO_WATERMARK_MIN_PCT;
  const l =
    Math.floor(Math.random() * LESSON_VIDEO_WATERMARK_SPAN_PCT) +
    LESSON_VIDEO_WATERMARK_MIN_PCT;
  return { top: `${t}%`, left: `${l}%` };
}

/** Periodically moves a pseudo-random overlay position (anti-screenshot). */
export function useMovingVideoWatermark(active: boolean): WatermarkPositionPct {
  const [position, setPosition] = useState<WatermarkPositionPct>(() =>
    randomWatermarkPosition()
  );

  const tick = useCallback(() => setPosition(randomWatermarkPosition()), []);

  useEffect(() => {
    if (!active) return;
    tick();
    const id = window.setInterval(tick, LESSON_VIDEO_WATERMARK_MOVE_MS);
    return () => window.clearInterval(id);
  }, [active, tick]);

  return position;
}
