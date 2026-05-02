import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { PcpSectionHeader } from "./PcpSectionHeader";

const TRIMESTER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_OQHhH1A-AiU4T6GtKboDwUAb1fIdL3yYzDAy5eVnRDqDcpSxf9KMnQBke2x4yFbhjbGCF85cIipesD0hZJ0CHGs_7lAIZcHVXnuoMi7TK0wm2OePlMUks0Z_DUZDFNLCboqSEnoD6GJaz_r_B_vopVr0AstD05mUsnBHa9OERkGljmam1vUFpYs-jLXv1F0b9Wu5wLTK_qNVZDEndFZNEzNMBISPMmMBxaegUcdDRkQIL-Nw2aFj2cBXFZP5OoEHkbYkPh6dLtOU";

const PHASES = [
  {
    id: "p1",
    label: "Phase 01",
    title: "First Trimester: Grounding",
    body: "Focus on gentle nausea relief, stabilizing pelvic floor basics, and breathwork to manage early hormonal shifts.",
    variant: "text" as const,
  },
  {
    id: "p2",
    label: "Phase 02",
    title: "Second Trimester: Expansion",
    body: "As your belly grows, we focus on safe core stabilization, back-strengthening flow, and opening the hips for future labor.",
    image: TRIMESTER_IMG,
    variant: "text-image-tall" as const,
  },
  {
    id: "p3",
    label: "Phase 03",
    title: "Third Trimester: Preparation",
    body: "Gentle stretching for lightness, pelvic floor release techniques, and birth-specific movement patterns.",
    variant: "text" as const,
  },
] as const;

export function PcpTrimesters() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface)] py-24" delay={0.12}>
      <div className="mx-auto max-w-7xl px-8">
        <PcpSectionHeader
          className="mb-16"
          subtitle="Movement that evolves as you and your baby do."
          title="The Trimester-Balanced Method"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          {PHASES.map((phase) =>
            phase.variant === "text-image-tall" ? (
              <div
                key={phase.id}
                className="flex flex-col justify-center space-y-6 rounded-[2.5rem] border border-[#E8D5D0] bg-white p-10 md:row-span-2"
              >
                <span className="pcp-label-caps w-fit rounded-full bg-[color:var(--color-secondary-container)]/20 px-4 py-1 text-[color:var(--color-secondary)]">
                  {phase.label}
                </span>
                <h3 className="pcp-text-h3 text-[color:var(--color-on-surface)]">{phase.title}</h3>
                <p className="pcp-text-body-md text-[color:var(--color-on-surface-variant)]">{phase.body}</p>
                {"image" in phase && phase.image ? (
                  <Image
                    alt=""
                    className="mt-8 rounded-2xl shadow-sm"
                    height={320}
                    src={phase.image}
                    width={480}
                  />
                ) : null}
              </div>
            ) : (
              <div
                key={phase.id}
                className="space-y-6 rounded-[2.5rem] border border-[#E8D5D0] bg-white p-10"
              >
                <span className="pcp-label-caps w-fit rounded-full bg-[color:var(--color-secondary-container)]/20 px-4 py-1 text-[color:var(--color-secondary)]">
                  {phase.label}
                </span>
                <h3 className="pcp-text-h3 text-[color:var(--color-on-surface)]">{phase.title}</h3>
                <p className="pcp-text-body-md text-[color:var(--color-on-surface-variant)]">{phase.body}</p>
              </div>
            ),
          )}
          <div className="space-y-4 rounded-[2.5rem] bg-[color:var(--color-primary)] p-10 text-[color:var(--color-on-primary)] md:col-span-1">
            <h3 className="pcp-text-h3 text-[color:inherit]">Doctor-Led Guidance</h3>
            <p className="pcp-text-body-md text-[color:var(--color-primary-fixed)]">
              Every pose is screened for maximum safety and clinical benefit.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
