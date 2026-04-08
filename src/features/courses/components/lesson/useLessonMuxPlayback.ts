"use client";

import { useEffect, useState } from "react";
import { useLazyGetVideoPlaybackTokenQuery } from "@/slices/videos";

type PlaybackTokenResult = {
  success?: boolean;
  data?: { playbackId: string; playbackToken?: string | null };
};

/**
 * Resolves signed playback id/token when the backend video is READY; otherwise falls back to public playbackId.
 */
export function useLessonMuxPlayback(
  videoId: string | undefined,
  muxPlaybackId: string | undefined,
  videoStatus: string | undefined
) {
  const [playbackId, setPlaybackId] = useState<string | undefined>(undefined);
  const [playbackToken, setPlaybackToken] = useState<string | null>(null);
  const [fetchToken] = useLazyGetVideoPlaybackTokenQuery();

  useEffect(() => {
    if (videoId && muxPlaybackId && videoStatus === "READY") {
      fetchToken(videoId)
        .unwrap()
        .then((result: PlaybackTokenResult) => {
          if (result?.success && result.data) {
            setPlaybackId(result.data.playbackId);
            setPlaybackToken(result.data.playbackToken ?? null);
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
  }, [videoId, muxPlaybackId, videoStatus, fetchToken]);

  return { playbackId, playbackToken };
}
