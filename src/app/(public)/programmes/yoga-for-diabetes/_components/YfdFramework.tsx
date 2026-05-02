import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ITEMS = [
  {
    icon: "biotech",
    iconWrap: "bg-[color:var(--yfd-primary)]/10 text-[color:var(--yfd-primary)]",
    title: "Glucose-Aware Sequencing",
    body: "Poses specifically chosen to stimulate the pancreas and improve glucose uptake in muscle tissue without inducing high-stress cortisol spikes.",
  },
  {
    icon: "psychology",
    iconWrap: "bg-[color:var(--yfd-secondary)]/10 text-[color:var(--yfd-secondary)]",
    title: "Parasympathetic Reset",
    body: 'Stress is the silent enemy of insulin. Our breath-work protocols lower systemic inflammation and switch your body into "repair mode."',
  },
  {
    icon: "analytics",
    iconWrap: "bg-[color:var(--yfd-primary)]/10 text-[color:var(--yfd-primary)]",
    title: "Dynamic Load Calibration",
    body: "Clinical-grade intensity adjustments based on your daily energy levels, ensuring you never over-exert or under-perform.",
  },
] as const;

export function YfdFramework() {
  return (
    <ScrollReveal className="px-5 py-12 md:py-16 bg-[color:var(--yfd-surface-container)]" delay={0.2}>
      <div className="mx-auto max-w-7xl">
        <h2 className="yfd-text-headline-lg mb-16 text-center italic text-[color:var(--yfd-primary)]">
          The Metabolic Balance Framework
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-8">
              <div
                className={`mb-6 flex size-12 items-center justify-center rounded-xl ${item.iconWrap}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="yfd-text-headline-md mb-4 text-[color:var(--yfd-primary)]">{item.title}</h3>
              <p className="text-[color:var(--yfd-on-surface-variant)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
