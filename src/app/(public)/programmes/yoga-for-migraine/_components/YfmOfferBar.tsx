"use client";

import { YfmCountdown } from "./YfmCountdown";

export function YfmOfferBar() {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex flex-wrap items-center justify-center gap-2 px-4 py-2 text-center shadow-lg"
      style={{ backgroundColor: "var(--yfm-primary)" }}
    >
      <p className="text-[13px] font-semibold tracking-tight text-white sm:text-sm">
        Offer ends in <YfmCountdown /> — enroll before the countdown hits zero!
      </p>
    </div>
  );
}
