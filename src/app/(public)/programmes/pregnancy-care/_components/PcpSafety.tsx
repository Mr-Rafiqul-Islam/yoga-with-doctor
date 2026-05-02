import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { PcpSectionHeader } from "./PcpSectionHeader";

const CONCERNS = [
  {
    icon: "warning",
    title: "Fear of Strain",
    body: "Worrying that standard yoga poses might overstretch ligaments or pressure the belly.",
  },
  {
    icon: "psychology_alt",
    title: "Information Overload",
    body: "Conflicting advice from the internet leaving you paralyzed and inactive.",
  },
  {
    icon: "child_care",
    title: "Baby's Wellbeing",
    body: 'The constant question: "Will this movement impact my baby\'s development?"',
  },
] as const;

export function PcpSafety() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface-container-low)] py-24" delay={0.04}>
      <div className="mx-auto max-w-7xl px-8">
        <PcpSectionHeader
          className="mb-16"
          title={
            <>
              Is My Movement <span className="italic text-[color:var(--color-primary)]">Safe</span> For My Baby?
            </>
          }
          subtitle="It's natural to feel anxious about physical activity during pregnancy. We've heard your concerns."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {CONCERNS.map((item) => (
            <div key={item.title} className="pcp-glass-card pcp-nurture-glow space-y-4 rounded-3xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-error-container)] text-[color:var(--color-error)]">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="pcp-text-h3 text-[color:var(--color-on-surface)]">{item.title}</h3>
              <p className="pcp-text-body-md text-[color:var(--color-on-surface-variant)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
