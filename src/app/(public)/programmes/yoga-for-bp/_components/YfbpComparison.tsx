import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BEFORE_ITEMS = [
  "Erratic blood pressure spikes during stress",
  "Constant underlying feeling of \"alertness\"",
  "Poor sleep and low physical stamina",
];

const AFTER_ITEMS = [
  "Consistent, stable cardiovascular readings",
  "A calm mind and resilient nervous system",
  "Vitality, deep sleep, and renewed energy",
];

export function YfbpComparison() {
  return (
    <ScrollReveal className="bg-[color:var(--yfbp-primary)] px-6 py-24 text-[color:var(--yfbp-on-primary)]" delay={0.06}>
      <div className="mx-auto max-w-[1200px] space-y-12 text-center">
        <h2 className="yfbp-text-h2 text-[color:var(--yfbp-on-primary)]">Regain Your Heart Health</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-10 backdrop-blur-md">
            <div className="yfbp-text-label-caps mb-4 opacity-70">BEFORE BREATHEFLOW</div>
            <ul className="space-y-4 text-left">
              {BEFORE_ITEMS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[color:var(--yfbp-tertiary-fixed)]">close</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/10 p-10 backdrop-blur-md">
            <div className="yfbp-text-label-caps mb-4 text-[color:var(--yfbp-primary-fixed)] opacity-100">
              AFTER BREATHEFLOW
            </div>
            <ul className="space-y-4 text-left">
              {AFTER_ITEMS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[color:var(--yfbp-primary-fixed)] yfbp-icon-fill">
                    check_circle
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
