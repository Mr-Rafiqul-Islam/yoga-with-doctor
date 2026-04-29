import { funnelSectionClass, type FunnelSectionVariant } from "./funnelSectionVariant";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { Plid30DaysHealingProofSlider } from "./Plid30DaysHealingProofSlider";

type Plid30DaysHealingProofProps = {
  variant?: FunnelSectionVariant;
};

export function Plid30DaysHealingProof({ variant = "auto" }: Plid30DaysHealingProofProps) {
  return (
    <ScrollReveal className={`py-24 ${funnelSectionClass(variant)}`} id="results">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-widest text-primary">
            Patient Stories
          </h2>
          <h3 className="text-3xl lg:text-4xl text-center font-extrabold text-on-surface">ব্যথা মুক্ত জীবনের গল্প</h3>
        </div>
        <Plid30DaysHealingProofSlider />
      </div>
    </ScrollReveal>
  );
}
