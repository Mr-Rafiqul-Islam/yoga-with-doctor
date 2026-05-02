import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const LEFT_PHASES = [
  {
    title: "Phase 1: Cortisol Flush",
    description:
      "Gentle flows to lower stress hormones that store fat around the middle.",
  },
  {
    title: "Phase 2: Muscle Activation",
    description:
      "Isometric holds that build lean muscle and spike your resting metabolism.",
  },
] as const;

const RIGHT_PHASES = [
  {
    title: "Phase 3: Deep Oxygenation",
    description:
      "Specific breathing patterns to increase cellular energy and toxin removal.",
  },
  {
    title: "Phase 4: Hormonal Balance",
    description:
      "Inversions and twists that stimulate the endocrine system for balance.",
  },
] as const;

export function YfwlMechanism() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h2 className="yfwl-text-h2 mb-16 text-[color:var(--yfwl-on-surface)]">
        The Metabolism Reset Mechanism
      </h2>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
        <div className="space-y-12 text-center lg:text-right">
          {LEFT_PHASES.map(({ title, description }) => (
            <div key={title} className="space-y-2">
              <h4 className="font-bold text-[color:var(--yfwl-primary)]">{title}</h4>
              <p className="text-sm text-[color:var(--yfwl-on-surface-variant)]">{description}</p>
            </div>
          ))}
        </div>
        <div className="relative flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-emerald-100">
            <div className="flex h-48 w-48 animate-pulse items-center justify-center rounded-full bg-emerald-50">
              <span className="material-symbols-outlined text-6xl text-[color:var(--yfwl-primary)]" aria-hidden>
                local_fire_department
              </span>
            </div>
            <div className="absolute -top-4 rounded-full border border-teal-100 bg-white px-4 py-1 text-xs font-bold shadow-sm">
              Optimal Fat Burning
            </div>
          </div>
        </div>
        <div className="space-y-12 text-center lg:text-left">
          {RIGHT_PHASES.map(({ title, description }) => (
            <div key={title} className="space-y-2">
              <h4 className="font-bold text-[color:var(--yfwl-primary)]">{title}</h4>
              <p className="text-sm text-[color:var(--yfwl-on-surface-variant)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
