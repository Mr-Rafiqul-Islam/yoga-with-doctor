import { funnelSectionClass, type FunnelSectionVariant } from "./funnelSectionVariant";
import { ScrollReveal } from "./ScrollReveal";
import { SalesProofSlider } from "./SalesProofSlider";

type SalesProofProps = {
  variant?: FunnelSectionVariant;
};

export function SalesProof({ variant = "auto" }: SalesProofProps) {
  return (
    <ScrollReveal className={`py-24 ${funnelSectionClass(variant)}`} id="results">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-widest text-primary">
            Patient Stories
          </h2>
          <h3 className="text-4xl font-extrabold text-on-surface">জীবনের নতুন দিগন্ত</h3>
        </div>
        <SalesProofSlider />
      </div>
    </ScrollReveal>
  );
}