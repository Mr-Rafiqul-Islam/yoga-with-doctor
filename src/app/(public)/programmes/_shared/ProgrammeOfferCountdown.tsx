"use client";

import { useEffect, useState } from "react";

export type ProgrammeOfferCountdownVariant = "inline" | "blocks";

type TimeParts = { days: number; hours: number; mins: number; secs: number };

function parseEndMs(endAt: string): number {
  const ms = Date.parse(endAt);
  return Number.isFinite(ms) ? ms : 0;
}

function getParts(nowMs: number, endMs: number): TimeParts {
  const ms = Math.max(0, endMs - nowMs);
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return { days, hours, mins, secs };
}

export type ProgrammeOfferCountdownProps = {
  endAt: string;
  className?: string;
  variant?: ProgrammeOfferCountdownVariant;
  /** Hours/minutes/seconds column label class (blocks variant) */
  labelClassName?: string;
  /** Number block class (blocks variant) */
  numberClassName?: string;
};

export function ProgrammeOfferCountdown({
  endAt,
  className,
  variant = "inline",
  labelClassName,
  numberClassName,
}: ProgrammeOfferCountdownProps) {
  /** `null` until mount so SSR + first client paint match (no `Date.now()` in initial state). */
  const [parts, setParts] = useState<TimeParts | null>(null);

  useEffect(() => {
    const endMs = parseEndMs(endAt);
    const tick = () => setParts(getParts(Date.now(), endMs));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [endAt]);

  const { days, hours, mins, secs } = parts ?? { days: 0, hours: 0, mins: 0, secs: 0 };

  if (variant === "blocks") {
    const numCls = numberClassName ?? "text-4xl font-bold tabular-nums";
    const labelCls = labelClassName ?? "text-xs uppercase opacity-70";
    const colon = (
      <div className="pt-1 text-4xl font-bold text-white" aria-hidden>
        :
      </div>
    );

    return (
      <div
        className={`flex items-start justify-center gap-2 sm:gap-8 ${className ?? ""}`}
        role="timer"
        aria-live="polite"
      >
        {days > 0 ? (
          <>
            <div className="text-white">
              <p className={numCls}>{String(days).padStart(2, "0")}</p>
              <p className={labelCls}>Days</p>
            </div>
            {colon}
          </>
        ) : null}
        <div className="text-white">
          <p className={numCls}>{String(hours).padStart(2, "0")}</p>
          <p className={labelCls}>Hours</p>
        </div>
        {colon}
        <div className="text-white">
          <p className={numCls}>{String(mins).padStart(2, "0")}</p>
          <p className={labelCls}>Minutes</p>
        </div>
        {colon}
        <div className="text-white">
          <p className={numCls}>{String(secs).padStart(2, "0")}</p>
          <p className={labelCls}>Seconds</p>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-baseline gap-1 tabular-nums ${className ?? ""}`}
      role="timer"
      aria-live="polite"
    >
      <span aria-hidden>{String(days).padStart(2, "0")}</span>
      <span className="text-[0.85em] font-semibold">d</span>
      <span aria-hidden>{String(hours).padStart(2, "0")}</span>
      <span className="text-[0.85em] font-semibold">h</span>
      <span aria-hidden>{String(mins).padStart(2, "0")}</span>
      <span className="text-[0.85em] font-semibold">m</span>
      <span aria-hidden>{String(secs).padStart(2, "0")}</span>
      <span className="text-[0.85em] font-semibold">s</span>
    </span>
  );
}
