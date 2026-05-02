import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STACK_ITEMS = [
  {
    icon: "fitness_center",
    iconWrapClass: "bg-[color:rgba(0,110,28,0.1)] text-[var(--yfbp-primary)]",
    title: "30-Day Recovery Program",
    description: "Step-by-step video guidance for total back restoration.",
    crossedValue: "$197 Value",
  },
  {
    icon: "timer",
    iconWrapClass:
      "bg-[color:rgba(0,97,164,0.1)] text-[var(--yfbp-secondary)]",
    title: "5-Minute SOS Relief Routine",
    description: "Quick sequences for immediate pain relief anywhere.",
    crossedValue: "$47 Value",
  },
  {
    icon: "straighten",
    iconWrapClass: "bg-orange-100 text-orange-600",
    title: "Posture Alignment Masterclass",
    description: "Learn to sit, stand, and move without stressing your discs.",
    crossedValue: "$97 Value",
  },
] as const;

export function YfbpValueStack() {
  return (
    <ScrollReveal id="curriculum" className="yfbp-bg-mesh px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-slate-900 yfbp-text-display-xl md:mb-12">
          The BackGrowth <span className="text-orange-500">Value Stack</span>
        </h2>
        <div className="space-y-4">
          {STACK_ITEMS.map(
            ({ icon, iconWrapClass, title, description, crossedValue }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--yfbp-surface-container-high)] bg-white p-6 shadow-sm md:flex-row md:justify-between"
              >
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  <div
                    className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${iconWrapClass}`}
                  >
                    <span className="material-symbols-outlined text-4xl" aria-hidden>
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 yfbp-text-headline-md">{title}</h4>
                    <p className="text-[var(--yfbp-on-surface-variant)] yfbp-text-body-md">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-slate-400 line-through yfbp-text-label-md">{crossedValue}</p>
                  <p className="font-bold text-[var(--yfbp-primary)]">INCLUDED</p>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="mt-12 rounded-3xl bg-orange-500 p-12 text-center text-white md:mt-12">
          <p className="mb-2 uppercase tracking-widest yfbp-text-label-bold">
            Total Combined Value: $341
          </p>
          <h3 className="mb-4 text-white yfbp-text-display-xl">
            Get Everything For Just <span className="underline decoration-white/30">$47</span>
          </h3>
          <p className="opacity-90 yfbp-text-body-md">
            One-time payment. Lifetime access. Zero hidden fees.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
