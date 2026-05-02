import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const RISK_CARDS = [
  {
    icon: "heart_broken" as const,
    title: "Heart Risk",
    body: "Increased pressure forces your heart to work harder, leading to wall thickening.",
  },
  {
    icon: "neurology" as const,
    title: "Stroke Threat",
    body: "Damaged arteries in the brain can burst or clog far more easily.",
  },
  {
    icon: "battery_alert" as const,
    title: "Daily Fatigue",
    body: "Poor circulation leaves you feeling drained and mentally foggy.",
  },
];

export function YfbpRisk() {
  return (
    <ScrollReveal className="bg-[color:var(--yfbp-surface-container-low)] px-6 py-24" delay={0.06}>
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <h2 className="yfbp-text-h2 text-[color:var(--yfbp-on-background)]">High Blood Pressure: The Silent Risk</h2>
        <p className="yfbp-text-body-lg text-[color:var(--yfbp-on-surface-variant)]">
          Hypertension often has no symptoms, but the internal damage is real and escalating. It&apos;s more than
          just a number on a cuff; it&apos;s a constant strain on your most vital systems.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {RISK_CARDS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-teal-50 bg-white p-8 yfbp-shadow-soft"
            >
              <span className="material-symbols-outlined mb-4 block text-4xl text-[color:var(--yfbp-error)]">
                {icon}
              </span>
              <h3 className="yfbp-text-h3 mb-2 text-[color:var(--yfbp-on-background)]">{title}</h3>
              <p className="text-sm opacity-80 text-[color:var(--yfbp-on-surface-variant)]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
