"use client";

import { useEffect, useState } from "react";

/** Fixed deadline for synced countdown UI (pricing + offer bar). */
export const OFFER_ENDS_AT_ISO = "2027-06-01T23:59:59.000Z";

export type YfwlCountdownVariant = "panels" | "inline";

function getParts(nowMs: number) {
  const end = Date.parse(OFFER_ENDS_AT_ISO);
  const ms = Math.max(0, end - nowMs);
  const totalSec = Math.floor(ms / 1000);
  const hours = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return { hours, mins, secs };
}

type YfwlCountdownProps =
  | { variant: "panels"; className?: string }
  | { variant: "inline"; className?: string };

export function YfwlCountdown(props: YfwlCountdownProps) {
  const [parts, setParts] = useState(() => getParts(Date.now()));

  useEffect(() => {
    const tick = () => setParts(getParts(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (props.variant === "inline") {
    const { hours, mins, secs } = parts;
    return (
      <span className={`inline-flex items-baseline gap-1 tabular-nums ${props.className ?? ""}`}>
        <span aria-hidden>{String(hours).padStart(2, "0")}</span>
        <span>h</span>
        <span aria-hidden>{String(mins).padStart(2, "0")}</span>
        <span>m</span>
        <span aria-hidden>{String(secs).padStart(2, "0")}</span>
        <span>s</span>
      </span>
    );
  }

  const labels = ["Hours", "Mins", "Secs"] as const;
  const values = [parts.hours, parts.mins, parts.secs];

  return (
    <div
      className={`flex justify-center gap-4 pb-8 md:gap-8 ${props.className ?? ""}`}
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      {labels.map((label, i) => (
        <div key={label} className="space-y-1">
          <div className="min-w-[70px] rounded-xl bg-white/20 px-4 py-3 text-center text-3xl font-bold text-[color:var(--yfwl-on-background)] backdrop-blur-sm">
            {values[i]}
          </div>
          <div className="text-xs font-bold uppercase opacity-70">{label}</div>
        </div>
      ))}
    </div>
  );
}
