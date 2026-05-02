export function YfbpLimitedOfferBar() {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex animate-pulse items-center justify-center gap-4 bg-orange-500 px-4 py-2 text-white shadow-lg"
    >
      <span className="material-symbols-outlined yfbp-icon-fill text-[22px]" aria-hidden>
        timer
      </span>
      <p className="yfbp-text-label-bold text-center tracking-tight">
        Limited Offer: Enrollment closes in 14:52 — Only 8 spots remaining!
      </p>
    </div>
  );
}
