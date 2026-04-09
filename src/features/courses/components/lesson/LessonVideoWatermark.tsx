"use client";

import type { CSSProperties } from "react";
import type { WatermarkPositionPct } from "./useMovingVideoWatermark";

const WRAPPER_STYLE: CSSProperties = {
  position: "absolute",
  pointerEvents: "none",
  opacity: 0.4,
  color: "white",
  fontSize: "1.5rem",
  filter: "blur(0.5px)",
  textShadow: "1px 1px 2px black",
  whiteSpace: "nowrap",
  /* Above Mux / Media Chrome layers in fullscreen when the root is an ancestor of mux-player */
  zIndex: 40,
  transition: "top 0.5s ease, left 0.5s ease",
  fontWeight: "bold",
  fontFamily: "sans-serif",
};

export interface LessonVideoWatermarkProps {
  text: string;
  position: WatermarkPositionPct;
}

export function LessonVideoWatermark({ text, position }: LessonVideoWatermarkProps) {
  if (!text) return null;

  return (
    <div
      className="watermark-overlay"
      style={{
        ...WRAPPER_STYLE,
        top: position.top,
        left: position.left,
      }}
    >
      {text}
    </div>
  );
}
