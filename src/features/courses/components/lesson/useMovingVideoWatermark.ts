"use client";

import { useCallback, useEffect, useLayoutEffect, useState, type RefObject } from "react";
import type MuxPlayerElement from "@mux/mux-player";
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
type MuxWithMediaController = MuxPlayerElement & {
  mediaController?: { fullscreenElement?: HTMLElement | MuxPlayerElement } | null;
};

const MUX_FS_WIRE_MAX_FRAMES = 180;

export function useLayoutEffectWithMuxFullscreen(
  muxRef: RefObject<MuxPlayerElement | null>,
  rootRef: RefObject<HTMLElement | null>,
  fullscreenRootId: string,
  active: boolean
) {
  useLayoutEffect(() => {
    if (!active) return;
    const mux = muxRef.current;
    const root = rootRef.current;
    if (!mux || !root) return;

    let cancelled = false;
    let frame = 0;
    let attempts = 0;

    const wire = () => {
      if (cancelled) return;
      const mc = (mux as MuxWithMediaController).mediaController;
      if (mc) {
        mux.setAttribute("fullscreen-element", fullscreenRootId);
        mc.fullscreenElement = root;
        return;
      }
      attempts += 1;
      if (attempts > MUX_FS_WIRE_MAX_FRAMES) return;
      frame = requestAnimationFrame(wire);
    };

    mux.setAttribute("fullscreen-element", fullscreenRootId);
    wire();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      const mc = (mux as MuxWithMediaController).mediaController;
      if (mc?.fullscreenElement === root) {
        mc.fullscreenElement = mux;
      }
    };
  }, [active, fullscreenRootId]);
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
