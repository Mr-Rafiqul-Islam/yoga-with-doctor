"use client";

import { useEffect, useState } from "react";

export const OFFER_ENDS_AT_ISO = "2027-06-01T23:59:59.000Z";

function getParts(nowMs: number) {
  const end = Date.parse(OFFER_ENDS_AT_ISO);
  const ms = Math.max(0, end - nowMs);
  const totalSec = Math.floor(ms / 1000);
  const hours = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return { hours, mins, secs };
}

export function YfmCountdown({ className }: { className?: string }) {
  /** Fixed initial avoids SSR vs client clock skew (hydration mismatch). Timer starts in useEffect. */
  const [parts, setParts] = useState({ hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => setParts(getParts(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const { hours, mins, secs } = parts;
  return (
    <span className={`inline-flex items-baseline gap-1 tabular-nums ${className ?? ""}`}>
      <span aria-hidden>{String(hours).padStart(2, "0")}</span>
      <span>h</span>
      <span aria-hidden>{String(mins).padStart(2, "0")}</span>
      <span>m</span>
      <span aria-hidden>{String(secs).padStart(2, "0")}</span>
      <span>s</span>
    </span>
  );
}
