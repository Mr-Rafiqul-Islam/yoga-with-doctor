"use client";

import { YfwlCountdown } from "./YfwlCountdown";

export function YfwlOfferBar() {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex flex-wrap items-center justify-center gap-2 px-4 py-2 text-center shadow-lg"
      style={{ backgroundColor: "var(--yfwl-brand-orange)" }}
    >
      <p className="text-[13px] font-semibold tracking-tight text-white sm:text-sm">
        FLASH SALE: Offer ends in <YfwlCountdown variant="inline" /> — Save 95% Today!
      </p>
    </div>
  );
}
