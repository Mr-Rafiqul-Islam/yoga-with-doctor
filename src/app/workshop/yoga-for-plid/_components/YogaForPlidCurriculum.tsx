import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MODULES = [
  {
    id: "m1",
    module: "MODULE 01",
    title: "The Anatomy of PLID",
    body: "Understand exactly what is happening to your discs and why you feel pain.",
  },
  {
    id: "m2",
    module: "MODULE 02",
    title: 'The "Safe-Zone" Poses',
    body: "3 essential yoga poses that decompress the spine and provide immediate relief.",
  },
  {
    id: "m3",
    module: "MODULE 03",
    title: "The Anti-Inflammatory Routine",
    body: "Daily habits and breathwork to reduce nerve inflammation naturally.",
  },
  {
    id: "m4",
    module: "MODULE 04",
    title: "Long-term Prevention",
    body: "How to maintain your spine health so you never experience a relapse.",
  },
] as const;

export function YogaForPlidCurriculum() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] px-8 py-20" as="section" id="curriculum">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            What You'll Learn in the 90-Min Workshop
          </h2>
          <p className="text-[var(--color-on-surface-variant)]">
            A comprehensive roadmap to a pain-free life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div
              key={m.id}
              className="premium-shadow rounded-2xl border border-emerald-50 bg-white p-6"
            >
              <div className="mb-4 text-sm font-bold text-[var(--color-primary)]">{m.module}</div>
              <h4 className="mb-2 font-bold text-[var(--color-on-surface)]">{m.title}</h4>
              <p className="text-sm text-[var(--color-on-surface-variant)]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

