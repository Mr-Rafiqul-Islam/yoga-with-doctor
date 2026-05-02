import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAIN_ITEMS = [
  "Heavy and sluggish mornings",
  "High cortisol and stress levels",
  "Joint pain from high-impact cardio",
] as const;

const GAIN_ITEMS = [
  "Effortless fat burning 24/7",
  "Calm mind and better sleep",
  "Flexible, strong, and lean physique",
] as const;

export function YfwlTransformation() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:flex-row">
        <div className="flex-1 space-y-6 bg-emerald-50 p-12">
          <h2 className="yfwl-text-h2 text-[color:var(--yfwl-primary)]">From Frustration...</h2>
          <ul className="space-y-4">
            {PAIN_ITEMS.map((text) => (
              <li
                key={text}
                className="flex items-center gap-3 text-[color:var(--yfwl-on-surface-variant)]"
              >
                <span className="material-symbols-outlined shrink-0 text-[color:var(--yfwl-error)]" aria-hidden>
                  close
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex-1 space-y-6 p-12 text-[color:var(--yfwl-on-primary)]"
          style={{ backgroundColor: "var(--yfwl-primary)" }}
        >
          <h2 className="yfwl-text-h2">...To Pure Vitality</h2>
          <ul className="space-y-4">
            {GAIN_ITEMS.map((text) => (
              <li key={text} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined yfwl-icon-fill shrink-0 text-[color:var(--yfwl-primary-fixed)]"
                  aria-hidden
                >
                  check_circle
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
