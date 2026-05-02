import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";

type YffsOfferBarProps = {
  endAt: string;
};

export function YffsOfferBar({ endAt }: YffsOfferBarProps) {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex min-h-10 items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2 text-center shadow-md"
    >
      <p className="yffs-label-caps flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white">
        <span>Flash Sale: 50% OFF — Offer ends in</span>
        <ProgrammeOfferCountdown className="font-semibold text-white" endAt={endAt} variant="inline" />
      </p>
    </div>
  );
}
