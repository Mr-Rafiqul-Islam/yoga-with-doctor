import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";

type YftOfferBarProps = {
  endAt: string;
};

export function YftOfferBar({ endAt }: YftOfferBarProps) {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-center bg-[color:var(--color-tertiary-container)] px-4 py-2 text-center text-white shadow-lg"
    >
      <p className="yft-label-caps flex flex-wrap items-center justify-center gap-x-2 gap-y-1 tracking-widest text-white">
        <span aria-hidden className="material-symbols-outlined material-symbols-outlined--fill text-sm">
          timer
        </span>
        <span>Limited Time Offer: Use Code BALANCE for 20% Off |</span>
        <ProgrammeOfferCountdown className="font-semibold text-white" endAt={endAt} variant="inline" />
      </p>
    </div>
  );
}
