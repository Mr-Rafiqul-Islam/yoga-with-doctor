import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";

type YfaOfferBarProps = {
  endAt: string;
};

export function YfaOfferBar({ endAt }: YfaOfferBarProps) {
  return (
    <div
      aria-live="polite"
      className="fixed left-0 right-0 top-0 z-[60] flex flex-col items-center justify-center gap-0.5 px-4 py-2 text-center shadow-lg sm:flex-row sm:flex-wrap sm:gap-2"
      style={{ backgroundColor: "var(--yfa-offer-bar)" }}
    >
      <p className="text-[13px] font-semibold tracking-tight text-[color:var(--yfa-on-error)] sm:text-sm">
        <span className="uppercase">Offer ends in:</span>{" "}
        <ProgrammeOfferCountdown endAt={endAt} variant="inline" />
      </p>
      <p className="text-[12px] text-[color:var(--yfa-on-error)] opacity-95 sm:text-sm">
        Limited time — join before enrollment closes.
      </p>
    </div>
  );
}
