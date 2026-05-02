import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const LINE_ITEMS: { title: string; price: string }[] = [
  { title: "30 Days Guided Yoga Video Course", price: "$299" },
  { title: "The 10-Min Emergency BP Routine", price: "$149" },
  { title: "Scientific Stress Control Plan", price: "$99" },
  { title: "Hypertension-Friendly Diet Guidelines", price: "$149" },
  { title: "Private Support Community Access", price: "$255" },
];

const BONUS_LINES = [
  { lead: "Deep Relaxation Guide:", rest: " Sleep better tonight." },
  { lead: "Daily Checklist:", rest: " Stay on track effortlessly." },
];

export function YfbpPricing() {
  return (
    <ScrollReveal className="bg-white px-6 py-24" delay={0.06} id="pricing">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-[color:color-mix(in_srgb,var(--yfbp-primary)_20%,transparent)] shadow-2xl">
        <div className="bg-[color:var(--yfbp-primary)] p-8 text-center text-[color:var(--yfbp-on-primary)]">
          <h2 className="yfbp-text-h2">The Complete Heart Health Package</h2>
          <p className="opacity-80">Everything you need to transform your readings</p>
        </div>
        <div className="space-y-6 p-8 md:p-12">
          {LINE_ITEMS.map(({ title, price }) => (
            <div key={title} className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="yfbp-text-body-lg font-semibold text-[color:var(--yfbp-on-background)]">{title}</span>
              <span className="yfbp-text-body-lg text-slate-400 line-through">{price}</span>
            </div>
          ))}
          <div className="space-y-4 pt-8 text-center">
            <div className="text-sm uppercase tracking-widest text-[color:var(--yfbp-on-surface-variant)]">
              TOTAL VALUE: <span className="line-through">$951</span>
            </div>
            <div className="text-6xl font-bold text-[color:var(--yfbp-primary)]">$47</div>
            <p className="mx-auto max-w-sm text-[color:var(--yfbp-on-surface-variant)]">
              One-time payment. Lifetime access. Includes all future updates.
            </p>
            <a
              className="block w-full rounded-2xl bg-[color:var(--yfbp-tertiary-container)] py-6 text-center text-xl font-bold text-[color:var(--yfbp-on-tertiary)] shadow-xl transition-colors hover:bg-orange-600"
              href="#checkout"
            >
              Get Started Now
            </a>
            <div className="mt-8 rounded-2xl border border-[color:color-mix(in_srgb,var(--yfbp-primary)_10%,transparent)] bg-[color:var(--yfbp-secondary-container)] p-6 text-left">
              <div className="mb-4 flex items-center gap-2 font-bold text-[color:var(--yfbp-primary)]">
                <span className="material-symbols-outlined">redeem</span>
                EXCLUSIVE BONUSES INCLUDED:
              </div>
              <ul className="space-y-2 text-sm text-[color:var(--yfbp-on-secondary-container)]">
                {BONUS_LINES.map(({ lead, rest }) => (
                  <li key={lead} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                    <span>
                      <strong>{lead}</strong>
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
