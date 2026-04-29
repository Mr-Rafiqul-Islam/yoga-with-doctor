"use client";

import { useEffect, useState } from "react";

export type Plid30DaysHealingUrgencyProps = {
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

const segments = [
  { key: "days", label: "Days", digits: 2 as const },
  { key: "hours", label: "Hrs", digits: 2 as const },
  { key: "minutes", label: "Min", digits: 2 as const },
  { key: "seconds", label: "Sec", digits: 2 as const },
] as const;

export function Plid30DaysHealingUrgency({ endsAt }: Plid30DaysHealingUrgencyProps) {
  const endMs = parseEndMs(endsAt);
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
  const values = { days, hours, minutes, seconds };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Offer time remaining"
      className="fixed inset-x-0 top-0 z-[100] border-b border-white/15 bg-secondary pt-[env(safe-area-inset-top,0px)] text-on-primary shadow-md"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-3 py-1.5 sm:justify-between sm:gap-x-4 sm:px-4 md:px-6 md:py-2">
        <div className="max-w-[min(100%,28rem)] text-center sm:text-left">
          <p className="text-[12px] font-bold leading-snug sm:text-xs md:text-sm mb-1">
            অফারটি শেষ হতে সময় বাকি — দ্রুত জয়েন করুন
          </p>
          <p className="text-[11px] leading-snug sm:text-xs md:text-sm">
          বিশেষ ডিসকাউন্ট কিছুক্ষণের মধ্যেই শেষ হয়ে যাবে !
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
          {segments.map(({ key, label, digits }) => {
            const value = values[key];
            return (
              <div
                key={key}
                className="flex min-w-[2.125rem] flex-col items-center justify-center rounded-md border border-white/20 bg-white/12 px-1 py-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] sm:min-w-[2.375rem] sm:rounded-lg sm:px-1.5 sm:py-1"
              >
                <span className="text-[11px] font-bold leading-none tabular-nums sm:text-xs md:text-sm">
                  {formatBanglaInt(value, digits)}
                </span>
                <span className="mt-0.5 text-[5px] font-semibold uppercase leading-none tracking-wide opacity-75 sm:text-[6px] md:text-[7px]">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
