import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const WARNINGS = [
  { label: "High Risk of Recurrence" },
  { label: "6-Month Recovery Time" },
];

export function YfplidSurgeryTrap() {
  return (
    <ScrollReveal className="px-6 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[color:var(--yfplid-inverse-surface)] p-12 text-white">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="yfplid-text-h2 text-[color:var(--yfplid-primary-fixed-dim)]">
            The Surgery Trap
          </h2>
          <p className="yfplid-text-body-lg text-[color:var(--yfplid-surface-variant)]">
            Waiting too long or choosing invasive surgery often leads to months of painful recovery,
            permanent scarring, and no guarantee of a pain-free life. Every day you delay is a day
            your spine loses its natural resilience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 opacity-70">
            {WARNINGS.map(({ label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[color:var(--yfplid-error)]" aria-hidden>
                  warning
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
