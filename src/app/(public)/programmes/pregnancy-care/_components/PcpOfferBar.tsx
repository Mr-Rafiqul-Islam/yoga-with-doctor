import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";

type PcpOfferBarProps = {
  endAt: string;
};

export function PcpOfferBar({ endAt }: PcpOfferBarProps) {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[100] bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-container)] py-3 px-4 text-center text-white shadow-md"
    >
      <p className="pcp-label-caps flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-[family-name:var(--font-body)] text-white">
        <span aria-hidden className="material-symbols-outlined text-base">
          hourglass_top
        </span>
        <span>Limited offer: Enrollment closes in</span>
        <ProgrammeOfferCountdown className="font-semibold text-white" endAt={endAt} variant="inline" />
        <span aria-hidden>—</span>
        <span>Only 8 spots remaining!</span>
      </p>
    </div>
  );
}
