import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    icon: "self_improvement" as const,
    title: "Specific Yoga Asanas",
    body: "Low-impact postures designed to stimulate the vagus nerve and improve circulation without strain.",
  },
  {
    icon: "air" as const,
    title: "Breath Regulation",
    body: "Advanced Pranayama techniques that signal your brain to lower heart rate and blood pressure instantly.",
  },
  {
    icon: "psychology" as const,
    title: "Mindset Habits",
    body: "Daily 5-minute mental protocols to stop the \"stress-response\" before it triggers a BP spike.",
  },
];

export function YfbpSystem() {
  return (
    <ScrollReveal className="bg-[color:var(--yfbp-surface-container)] px-6 py-24" delay={0.06}>
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="yfbp-text-h2 mb-16 text-[color:var(--yfbp-on-background)]">The BP Reset System</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {STEPS.map(({ icon, title, body }) => (
            <div key={title} className="space-y-4">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--yfbp-primary-container)] text-[color:var(--yfbp-on-primary)]">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </div>
              <h3 className="yfbp-text-h3 text-[color:var(--yfbp-on-background)]">{title}</h3>
              <p className="text-[color:var(--yfbp-on-surface-variant)]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
