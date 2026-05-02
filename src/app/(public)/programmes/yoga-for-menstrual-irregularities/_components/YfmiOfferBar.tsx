import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";

type YfmiOfferBarProps = {
  endAt: string;
};

export function YfmiOfferBar({ endAt }: YfmiOfferBarProps) {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] bg-gradient-to-r from-[color:var(--yfmi-secondary)] to-[color:var(--yfmi-primary)] py-3 px-4 text-center text-[color:var(--yfmi-on-primary)] shadow-md"
    >
      <p className="yfmi-label-md flex flex-wrap items-center justify-center gap-2 text-white">
        <span aria-hidden className="material-symbols-outlined text-base text-white">
          alarm
        </span>
        <span>Limited Offer: Enrollment closes in</span>
        <ProgrammeOfferCountdown className="font-semibold text-white" endAt={endAt} variant="inline" />
        <span aria-hidden className="text-white">
          —
        </span>
        <span>Only 8 spots remaining!</span>
      </p>
    </div>
  );
}
