import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    icon: "straighten",
    iconBg: "bg-[color:var(--color-secondary-container)]",
    title: "01. Spine Alignment",
    body: "Daily 15-minute routines focusing on vertical traction and corrective positioning.",
  },
  {
    icon: "settings_backup_restore",
    iconBg: "bg-[color:var(--color-primary-container)]",
    title: "02. Habit Correction",
    body: 'Rewire your "lifestyle height killers" like phone-slump and seated-compression.',
  },
  {
    icon: "bolt",
    iconBg: "bg-[color:var(--color-tertiary-container)]",
    title: "03. Yoga Activation",
    body: "High-intensity growth-focused yoga flows that trigger cellular expansion.",
  },
] as const;

export function YfhgProtocol() {
  return (
    <ScrollReveal className="px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]" as="section">
      <div className="mx-auto max-w-7xl">
        <h2 className="yfhg-display-xl mb-[var(--yfhg-space-xl)] text-center text-[color:var(--color-on-background)]">
          The 3-Step Growth Protocol
        </h2>
        <div className="relative grid gap-[var(--yfhg-space-md)] md:grid-cols-3">
          <div className="pointer-events-none absolute left-1/3 right-1/3 top-1/2 hidden h-0.5 -translate-y-12 border-t-2 border-dashed border-slate-200 md:block" />
          {STEPS.map((step) => (
            <div key={step.title} className="relative z-[1] flex flex-col items-center text-center">
              <div
                className={`mb-6 flex h-24 w-24 items-center justify-center rounded-3xl text-4xl text-white shadow-xl ${step.iconBg}`}
              >
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h3 className="yfhg-headline-md mb-3 text-[color:var(--color-on-background)]">{step.title}</h3>
              <p className="text-[color:var(--color-on-surface-variant)]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
