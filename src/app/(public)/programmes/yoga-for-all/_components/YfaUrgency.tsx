import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type YfaUrgencyProps = {
  endAt: string;
};

export function YfaUrgency({ endAt }: YfaUrgencyProps) {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[color:var(--yfa-primary-container)] px-6 py-16"
      delay={0.05}
      id="pricing"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-5">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full border-8 border-white" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full border-8 border-white" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <div className="mb-6 inline-block animate-pulse rounded-full bg-[color:var(--yfa-tertiary)] px-6 py-2 text-sm font-bold text-white">
          LIMITED TIME: 70% DISCOUNT ENDING SOON
        </div>
        <h2 className="yfa-text-h2 mb-8 text-white">Ready to Start Your Transformation?</h2>
        <div className="mb-12">
          <ProgrammeOfferCountdown endAt={endAt} variant="blocks" />
        </div>
        <p className="text-lg text-[color:var(--yfa-primary-fixed-dim)]">
          Only 14 seats left at this introductory price point.
        </p>
      </div>
    </ScrollReveal>
  );
}
