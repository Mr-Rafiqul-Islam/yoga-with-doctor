"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

export interface LessonVideoPlayerProps {
  thumbnailUrl: string;
  /** Display duration e.g. "15:00" (mm:ss) */
  duration?: string;
  /** Initial current time e.g. "04:20" (mm:ss). Default "00:00". */
  initialCurrentTime?: string;
}

function parseTime(s: string): number {
  const [m, sec] = s.split(":").map(Number);
  return (m ?? 0) * 60 + (sec ?? 0);
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function LessonVideoPlayer({
  thumbnailUrl,
  duration = "15:00",
  initialCurrentTime = "04:20",
}: LessonVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSeconds = parseTime(duration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(parseTime(initialCurrentTime));
  const [isMuted, setIsMuted] = useState(false);
  const progressPercent = totalSeconds > 0 ? (currentSeconds / totalSeconds) * 100 : 0;

  const togglePlay = useCallback(() => setIsPlaying((p) => !p), []);

  // Simulate time advancing when playing (for demo; replace with real video later)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSeconds((t) => (t >= totalSeconds ? totalSeconds : t + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, totalSeconds]);

  useEffect(() => {
    if (currentSeconds >= totalSeconds && totalSeconds > 0) setIsPlaying(false);
  }, [currentSeconds, totalSeconds]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  }, []);

  const toggleMute = useCallback(() => setIsMuted((m) => !m), []);

  return (
    <section
      ref={containerRef}
      aria-label="Lesson video"
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-elevation-md"
    >
      <Image
        src={thumbnailUrl}
        alt=""
        fill
        className="object-cover opacity-80 transition-opacity group-hover:opacity-60"
        sizes="(max-width: 1024px) 100vw, 66vw"
        priority
      />
      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg transition-all hover:scale-110 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <span className="material-icons-outlined ml-1 text-4xl" aria-hidden>
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
      </div>
      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-gray-600">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progressPercent}%` }}
            aria-hidden
          />
        </div>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1 hover:opacity-80"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span className="material-icons-outlined">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="p-1 hover:opacity-80"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              <span className="material-icons-outlined">
                {isMuted ? "volume_off" : "volume_up"}
              </span>
            </button>
            <span className="text-sm font-medium">
              {formatTime(currentSeconds)} / {duration}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-1 hover:opacity-80"
              aria-label="Settings"
            >
              <span className="material-icons-outlined">settings</span>
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1 hover:opacity-80"
              aria-label="Fullscreen"
            >
              <span className="material-icons-outlined">fullscreen</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
