import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PROBLEMS = [
  {
    id: "energy",
    icon: "battery_very_low",
    title: "Low Energy",
    description: "Waking up tired despite 8 hours of sleep? Coffee only gets you so far.",
  },
  {
    id: "stress",
    icon: "psychology_alt",
    title: "Mental Stress",
    description: "A racing mind that never stops, making it hard to focus or truly relax.",
  },
  {
    id: "stiffness",
    icon: "architecture",
    title: "Body Stiffness",
    description: "That nagging ache in your back or neck from hours of sitting at a desk.",
  },
] as const;

export function YogaForAllProblem() {
  return (
    <ScrollReveal className="bg-[var(--color-surface)] py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Feeling Trapped in Your Own Body?
          </h2>
          <p className="text-[var(--color-on-surface-variant)]">
            Modern life isn&apos;t built for your wellbeing, but you can change that.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-[var(--color-outline-variant)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)]">
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">{p.title}</h3>
              <p className="text-[var(--color-on-surface-variant)]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

