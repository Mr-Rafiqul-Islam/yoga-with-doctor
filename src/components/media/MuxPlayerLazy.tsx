"use client";

import dynamic from "next/dynamic";
import type { ElementRef } from "react";
import type MuxPlayerDefault from "@mux/mux-player-react";

/** Ref type for the Mux player instance (same as a static `import MuxPlayer from "@mux/mux-player-react"`). */
export type MuxPlayerLazyRef = ElementRef<typeof MuxPlayerDefault>;

function MuxPlayerLoading({ className }: { className?: string }) {
  return (
    <div
      className={className ?? "h-full w-full min-h-[12rem] animate-pulse bg-muted/50"}
      aria-hidden
    />
  );
}

/**
 * Mux player loaded only on the client to keep initial JS smaller and speed up dev compiles
 * for routes that embed video.
 */
export const MuxPlayerLazy = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <MuxPlayerLoading className="h-full w-full min-h-[12rem] animate-pulse bg-muted/50" />,
});
