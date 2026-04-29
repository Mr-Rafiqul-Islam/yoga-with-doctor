import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MYTHS = [
  {
    myth: "You must do intense cardio to lose PCOS weight.",
    truth:
      "High-intensity exercise can actually spike cortisol and worsen PCOS symptoms. Gentle, consistent yoga is often more effective for hormonal weight loss.",
  },
  {
    myth: "Medication is the only way to get a regular period.",
    truth:
      "Lifestyle interventions like yoga and nutrition are clinically proven to restore natural ovulation by addressing the underlying hormonal imbalance.",
  },
];

export default function YogaForPcosMythBuster() {
  return (
    <ScrollReveal
      className="bg-[var(--color-slate-900)] py-[var(--pcos-section-y)] text-white"
      as="section"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-headline-lg mb-12">Let&apos;s Clear the Confusion</h2>
        <div className="grid gap-8 text-left md:grid-cols-2">
          {MYTHS.map((item) => (
            <div
              key={item.myth}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-4 flex items-center gap-3 text-[var(--color-secondary)]">
                <span className="material-symbols-outlined">cancel</span>
                <span className="text-sm font-semibold uppercase">Myth</span>
              </div>
              <p className="text-body-lg mb-4 font-medium">&ldquo;{item.myth}&rdquo;</p>
              <div className="mb-4 flex items-center gap-3 text-[var(--color-tertiary-fixed)]">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="text-sm font-semibold uppercase">The Truth</span>
              </div>
              <p className="opacity-80">{item.truth}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
