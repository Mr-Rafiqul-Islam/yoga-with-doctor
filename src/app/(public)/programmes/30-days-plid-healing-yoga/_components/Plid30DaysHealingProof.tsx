import {
  funnelSectionClass,
  type FunnelSectionVariant,
} from "./funnelSectionVariant";
import { Plid30DaysHealingProofSlider } from "./Plid30DaysHealingProofSlider";
import { Plid30DaysHealingSectionCta } from "./Plid30DaysHealingSectionCta";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type Plid30DaysHealingProofProps = {
  variant?: FunnelSectionVariant;
};

export function Plid30DaysHealingProof({
  variant = "auto",
}: Plid30DaysHealingProofProps) {
  return (
    <>
    <ScrollReveal
      className={`py-24 ${funnelSectionClass(variant)}`}
      id="results"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-on-surface">
            PLID মুক্ত হয়ে ওঠার গল্প
          </h3>
        </div>
        <Plid30DaysHealingProofSlider />
      </div>
    <Plid30DaysHealingSectionCta />
    </ScrollReveal>
    </>
  );
}
