"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export type SalesUrgencyProps = {
  /** Offer / deadline end time (ISO string, timestamp, or Date). */
  endsAt: string | number | Date;
};

function parseEndMs(endsAt: string | number | Date): number {
  if (typeof endsAt === "number") {
    return endsAt;
  }
  const t = new Date(endsAt).getTime();
  return Number.isFinite(t) ? t : NaN;
}

function formatBanglaInt(n: number, minDigits = 2): string {
  return Math.max(0, Math.floor(n)).toLocaleString("bn-BD", {
    minimumIntegerDigits: minDigits,
    maximumFractionDigits: 0,
    useGrouping: false,
  });
}

function getRemaining(endMs: number) {
  const diff = Math.max(0, endMs - Date.now());
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
}

const EMPTY = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function SalesUrgency({ endsAt }: SalesUrgencyProps) {
  const endMs = parseEndMs(endsAt);
  // Avoid getRemaining in initial state: Date.now() differs between SSR and hydrate.
  const [remaining, setRemaining] = useState(EMPTY);

  useEffect(() => {
    if (!Number.isFinite(endMs)) {
      setRemaining(EMPTY);
      return;
    }

    const tick = () => setRemaining(getRemaining(endMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endMs]);

  const { days, hours, minutes, seconds } = remaining;

  const segments = [
    { value: days, label: "Days", digits: 2 },
    { value: hours, label: "Hours", digits: 2 },
    { value: minutes, label: "Minutes", digits: 2 },
    { value: seconds, label: "Seconds", digits: 2 },
  ] as const;

  return (
    <ScrollReveal className="bg-secondary py-12 text-on-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">অফারটি শেষ হতে সময় বাকি...</h3>
          <p className="opacity-80">দ্রুত বুকিং দিন, পরবর্তী ব্যাচ শুরু হওয়ার আগে!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-center sm:gap-4">
          {segments.map(({ value, label, digits }) => (
            <div
              key={label}
              className="min-w-[88px] rounded-xl bg-white/20 px-4 py-4 backdrop-blur-sm sm:min-w-[100px] sm:px-6"
            >
              <div className="text-3xl font-bold tabular-nums">
                {formatBanglaInt(value, digits)}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
