"use client";

import dynamic from "next/dynamic";

function MuxBackgroundVideoLoading({ className }: { className?: string }) {
  return (
    <div
      className={className ?? "h-full w-full min-h-[12rem] animate-pulse bg-muted/50"}
      aria-hidden
    />
  );
}

/**
 * Mux background video loaded only on the client (custom element / MSE) to match
 * {@link MuxPlayerLazy} and avoid SSR issues.
 */
export const MuxBackgroundVideoLazy = dynamic(
  () =>
    import("@mux/mux-background-video/react").then((m) => m.MuxBackgroundVideo),
  {
    ssr: false,
    loading: () => (
      <MuxBackgroundVideoLoading className="h-full w-full min-h-[12rem] animate-pulse bg-muted/50" />
    ),
  },
);
