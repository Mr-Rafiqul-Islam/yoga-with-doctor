import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";

type YfhgOfferBarProps = {
  endAt: string;
};

export function YfhgOfferBar({ endAt }: YfhgOfferBarProps) {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] bg-gradient-to-r from-[color:var(--color-tertiary-container)] to-[color:var(--color-tertiary)] px-4 py-2 text-center text-white shadow-lg"
    >
      <p className="yfhg-font-label yfhg-label-bold flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white">
        <span aria-hidden className="material-symbols-outlined text-lg">
          timer
        </span>
        <span>⏳ Limited Offer: Enrollment closes in</span>
        <ProgrammeOfferCountdown className="font-semibold text-white" endAt={endAt} variant="inline" />
        <span aria-hidden>—</span>
        <span>Only 8 spots remaining!</span>
      </p>
    </div>
  );
}
