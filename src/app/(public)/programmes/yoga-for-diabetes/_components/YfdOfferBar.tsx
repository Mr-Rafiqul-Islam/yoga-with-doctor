"use client";

import { YfdCountdown } from "./YfdCountdown";

export function YfdOfferBar() {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex flex-col items-center justify-center gap-0.5 px-4 py-2 text-center shadow-lg sm:flex-row sm:flex-wrap sm:gap-2"
      style={{ backgroundColor: "var(--yfd-offer-bar)" }}
    >
      <p className="text-[13px] font-semibold tracking-tight text-[color:var(--yfd-on-error)] sm:text-sm">
        <span className="uppercase">Offer expires in:</span> <YfdCountdown />
      </p>
      <p className="text-[12px] text-[color:var(--yfd-on-error)] opacity-95 sm:text-sm">
        Join 5,000+ members before enrollment closes.
      </p>
    </div>
  );
}
