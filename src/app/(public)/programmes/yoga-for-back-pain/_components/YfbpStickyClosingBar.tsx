import Link from "next/link";

export function YfbpStickyClosingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center border-t-2 border-orange-700 bg-orange-500 text-white shadow-[0_-10px_30px_rgba(255,152,0,0.3)]">
      <Link
        href="#pricing"
        className="flex w-full items-center justify-center gap-2 px-4 py-5 animate-pulse text-lg font-black uppercase tracking-widest hover:bg-orange-400"
        style={{ fontFamily: "var(--yfbp-font-display), sans-serif" }}
      >
        <span className="material-symbols-outlined mr-0.5 shrink-0" aria-hidden>
          bolt
        </span>
        Secure Your Spot - Ending Soon
      </Link>
    </div>
  );
}
