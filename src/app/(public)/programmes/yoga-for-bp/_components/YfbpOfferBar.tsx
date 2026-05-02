"use client";

import { YfbpCountdown } from "./YfbpCountdown";

export function YfbpOfferBar() {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex flex-col items-center justify-center gap-0.5 px-4 py-2 text-center shadow-lg sm:flex-row sm:flex-wrap sm:gap-2"
      style={{ backgroundColor: "var(--yfbp-offer-bar)" }}
    >
      <p className="text-[13px] font-semibold tracking-tight text-[color:var(--yfbp-on-error)] sm:text-sm">
        <span className="uppercase">Offer ends in:</span> <YfbpCountdown />
      </p>
      <p className="text-[12px] text-[color:var(--yfbp-on-error)] opacity-95 sm:text-sm">
        Limited seats — join before enrollment closes.
      </p>
    </div>
  );
}
