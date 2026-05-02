"use client";

import { useEffect, useState } from "react";

/** Dedicated deadline for diabetes programme offer display. */
export const OFFER_ENDS_AT_ISO = "2026-06-01T23:59:59.000Z";

function getParts(nowMs: number) {
  const end = Date.parse(OFFER_ENDS_AT_ISO);
  const ms = Math.max(0, end - nowMs);
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return { days, hours, mins, secs };
}

export function YfdCountdown({ className }: { className?: string }) {
  const [parts, setParts] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => setParts(getParts(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const { days, hours, mins, secs } = parts;
  return (
    <span className={`inline-flex items-baseline gap-0.5 tabular-nums ${className ?? ""}`}>
      {days > 0 && (
        <>
          <span aria-hidden>{String(days).padStart(2, "0")}</span>
          <span>d</span>
        </>
      )}
      <span aria-hidden>{String(hours).padStart(2, "0")}</span>
      <span>:</span>
      <span aria-hidden>{String(mins).padStart(2, "0")}</span>
      <span>:</span>
      <span aria-hidden>{String(secs).padStart(2, "0")}</span>
    </span>
  );
}
