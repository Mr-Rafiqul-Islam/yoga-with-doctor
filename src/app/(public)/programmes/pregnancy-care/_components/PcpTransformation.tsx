import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { PcpSectionHeader } from "./PcpSectionHeader";

const WITHOUT = [
  "Chronic lower back and pelvic pain",
  "Sleepless nights due to physical discomfort",
  "Rising levels of prenatal stress and anxiety",
] as const;

const WITH = [
  "Fluid movement and reduced body aches",
  "Deep, restorative sleep and renewed energy",
  "Emotional resilience and readiness for birth",
] as const;

export function PcpTransformation() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface-container)] py-24" delay={0.08}>
      <div className="mx-auto max-w-7xl px-8">
        <PcpSectionHeader className="mb-16" title="The Sanctuary Transformation" />
        <div className="grid gap-0 overflow-hidden rounded-[3rem] border border-[color:var(--color-outline-variant)] md:grid-cols-2">
          <div className="space-y-6 bg-[color:var(--color-surface-container-high)] p-12">
            <h4 className="pcp-label-caps mb-6 text-[color:var(--color-tertiary)]">Without Guided Care</h4>
            <ul className="space-y-6">
              {WITHOUT.map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-4 italic text-[color:var(--color-on-surface-variant)]"
                >
                  <span className="material-symbols-outlined text-[color:var(--color-tertiary-container)]">close</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 bg-[color:var(--color-secondary-container)]/20 p-12">
            <h4 className="pcp-label-caps mb-6 text-[color:var(--color-secondary)]">With Sanctuary Yoga</h4>
            <ul className="space-y-6">
              {WITH.map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-4 font-medium text-[color:var(--color-secondary)]"
                >
                  <span className="material-symbols-outlined material-symbols-outlined--fill">spa</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
