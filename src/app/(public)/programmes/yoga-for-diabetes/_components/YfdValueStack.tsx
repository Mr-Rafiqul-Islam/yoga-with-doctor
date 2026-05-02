import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STACK_ROWS = [
  { icon: "play_circle" as const, label: "30 Days of Live Clinical Yoga Sessions", price: "$299" },
  { icon: "assignment" as const, label: "The Metabolic Lifestyle Master Blueprint", price: "$149" },
  { icon: "monitor_heart" as const, label: "The Digital Blood Sugar Tracking Protocol", price: "$97" },
  { icon: "nutrition" as const, label: "Anti-Inflammatory Diabetes Diet Plan", price: "$197" },
  { icon: "groups" as const, label: "24/7 Physician-Led Support Group", price: "$255" },
] as const;

export function YfdValueStack() {
  return (
    <ScrollReveal
      id="program"
      className="px-5 py-12 md:py-16 bg-[color:var(--yfd-surface-container-lowest)]"
      delay={0.25}
    >
      <div className="relative mx-auto max-w-4xl rounded-3xl border-2 border-[color:var(--yfd-primary)] p-8 shadow-2xl md:p-12">
        <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[color:var(--yfd-primary)] px-8 py-2 font-bold text-[color:var(--yfd-on-primary)]">
          EVERYTHING YOU GET TODAY
        </div>
        <div className="mt-6 space-y-6">
          {STACK_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="material-symbols-outlined shrink-0 text-[color:var(--yfd-secondary)]">
                  {row.icon}
                </span>
                <span className="font-medium text-[color:var(--yfd-on-surface)]">{row.label}</span>
              </div>
              <span className="shrink-0 text-[color:var(--yfd-on-surface-variant)] line-through">{row.price}</span>
            </div>
          ))}
          <div className="pt-6 text-center">
            <p className="yfd-text-body-lg text-[color:var(--yfd-on-surface-variant)]">
              Total Real-World Value: <span className="line-through">$997</span>
            </p>
            <p className="yfd-text-headline-xl mt-2 text-[color:var(--yfd-primary)]">Get It All For Just $47</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
