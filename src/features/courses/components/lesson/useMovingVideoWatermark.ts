"use client";

import type MuxPlayerElement from "@mux/mux-player";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  type RefObject,
} from "react";
import {
  LESSON_VIDEO_WATERMARK_MIN_PCT,
  LESSON_VIDEO_WATERMARK_MOVE_MS,
} from "./videoPlayerConstants";

/** `top` / `left` CSS lengths (px), relative to the player container. */
export interface WatermarkPositionPct {
  top: string;
  left: string;
}

type MuxWithMediaController = MuxPlayerElement & {
  mediaController?: { fullscreenElement?: HTMLElement | MuxPlayerElement } | null;
};

const MUX_FS_WIRE_MAX_FRAMES = 180;

/** Matches `LessonVideoWatermark` typography (`bold` + `1.5rem` + `sans-serif`). */
function measureWatermarkLabelPx(label: string): { width: number; height: number } {
  if (typeof document === "undefined") {
    return { width: 0, height: 0 };
  }
  const rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const fontPx = 1.5 * rootPx;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { width: 0, height: Math.ceil(fontPx) };
  }
  ctx.font = `bold ${fontPx}px sans-serif`;
  const metrics = ctx.measureText(label);
  const width = Math.ceil(metrics.width);
  const ascent = metrics.actualBoundingBoxAscent ?? fontPx * 0.72;
  const descent = metrics.actualBoundingBoxDescent ?? fontPx * 0.28;
  const height = Math.ceil(ascent + descent);
  return { width, height };
}

function randomWatermarkPositionPx(containerW: number, containerH: number, label: string): WatermarkPositionPct {
  const padX = containerW * (LESSON_VIDEO_WATERMARK_MIN_PCT / 100);
  const padY = containerH * (LESSON_VIDEO_WATERMARK_MIN_PCT / 100);
  const { width: tw, height: th } = measureWatermarkLabelPx(label);

  const minLeft = padX;
  const minTop = padY;
  const maxLeft = containerW - padX - tw;
  const maxTop = containerH - padY - th;

  const spanLeft = Math.max(0, maxLeft - minLeft);
  const spanTop = Math.max(0, maxTop - minTop);

  const left = minLeft + Math.random() * spanLeft;
  const top = minTop + Math.random() * spanTop;

  return { left: `${Math.round(left)}px`, top: `${Math.round(top)}px` };
}

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

/** Periodically moves the overlay; positions stay inside the player using measured label size (px). */
export function useMovingVideoWatermark(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
  label: string
): WatermarkPositionPct {
  const [position, setPosition] = useState<WatermarkPositionPct>({ top: "0px", left: "0px" });

  const reposition = useCallback(() => {
    const el = containerRef.current;
    if (!el || !active || !label) return;
    const w = el.clientWidth;
    const h = el.clientHeight;
    if (w < 2 || h < 2) return;
    setPosition(randomWatermarkPositionPx(w, h, label));
  }, [active, label, containerRef]);

  useLayoutEffect(() => {
    if (!active || !label) return;
    const el = containerRef.current;
    if (!el) return;

    reposition();
    const ro = new ResizeObserver(reposition);
    ro.observe(el);
    return () => ro.disconnect();
  }, [active, label, reposition]);

  useEffect(() => {
    if (!active || !label) return;
    const id = window.setInterval(reposition, LESSON_VIDEO_WATERMARK_MOVE_MS);
    return () => window.clearInterval(id);
  }, [active, label, reposition]);

  return position;
}
