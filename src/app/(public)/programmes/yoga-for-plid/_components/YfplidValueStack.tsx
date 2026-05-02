import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ROWS = [
  { label: "30-Day Master Yoga Therapy Course", value: "$1,299 Value", bonus: false },
  { label: "Daily Spine Recovery Routine (Video)", value: "$499 Value", bonus: false },
  { label: "Lifestyle Correction Workshop", value: "$299 Value", bonus: false },
  {
    label: "BONUS: 1-Year Access to Support Group",
    value: "FREE",
    bonus: true,
  },
];

export function YfplidValueStack() {
  return (
    <ScrollReveal className="px-6 py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[color:var(--yfplid-surface-container)] p-12">
        <h2 className="yfplid-text-h2 mb-12 text-center text-[color:var(--yfplid-primary)]">
          What&apos;s Included in Your Program
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {ROWS.map(({ label, value, bonus }) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-sm ${
                bonus ? "border-2 border-[color:var(--yfplid-primary)]" : ""
              }`}
            >
              <span className={`yfplid-text-body-lg ${bonus ? "font-bold" : ""}`}>{label}</span>
              <span className="shrink-0 font-bold text-[color:var(--yfplid-primary)]">{value}</span>
            </div>
          ))}
          <div className="pt-8 text-center">
            <p className="yfplid-text-body-lg mb-2 line-through text-[color:var(--yfplid-on-surface-variant)]">
              Total Value: $2,097
            </p>
            <p className="yfplid-text-h1 mb-6 text-5xl text-[color:var(--yfplid-primary)]">
              Today Only: $197
            </p>
            <button
              type="button"
              className="rounded-2xl bg-[color:var(--yfplid-tertiary-container)] px-12 py-6 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Claim Your 90% Discount
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
