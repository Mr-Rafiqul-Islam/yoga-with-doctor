import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FEATURES = [
  { id: "time", icon: "schedule", text: "Only 15 mins a day needed" },
  { id: "gear", icon: "check_circle", text: "No special equipment required" },
] as const;

export function YogaForAllSolution() {
  return (
    <ScrollReveal className="bg-white py-24" as="section">
      <div className="mx-auto max-w-3xl px-8 text-center">
        <div className="mb-6 inline-block rounded-full bg-[var(--color-primary-fixed)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-on-primary-fixed)]">
          The Solution
        </div>
        <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
          Yoga as an Easy Daily Habit
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
          We don&apos;t believe in grueling 2-hour sessions. Our ZenFlow method focuses on clinical
          precision and micro-movements that deliver 80% of the results in 20% of the time. Simple,
          effective, and accessible to everyone.
        </p>

        <div className="grid gap-4 text-left md:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.id}
              className="flex items-center gap-4 rounded-xl bg-[var(--color-surface)] p-6"
            >
              <div className="rounded-lg bg-[var(--color-primary-container)] p-2 text-white">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <span className="font-semibold">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

