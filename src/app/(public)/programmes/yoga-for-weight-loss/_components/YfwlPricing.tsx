import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { YfwlCountdown } from "./YfwlCountdown";

const BONUSES = [
  {
    title: "Bonus #1: Smoothies Guide",
    subtitle: "Value: $47 - FREE",
    icon: "card_giftcard" as const,
  },
  {
    title: "Bonus #2: Sleep Hypnosis",
    subtitle: "Value: $67 - FREE",
    icon: "card_giftcard" as const,
  },
] as const;

export function YfwlPricing() {
  return (
    <ScrollReveal
      as="section"
      id="pricing"
      className="bg-[color:var(--yfwl-primary-container)] px-6 py-24 text-center text-[color:var(--yfwl-on-primary-container-token)]"
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div
          className="mx-auto mb-4 inline-block animate-bounce rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: "var(--yfwl-brand-orange)" }}
        >
          Limited Time: Save 95% Today
        </div>
        <h2 className="yfwl-text-h2">Start Your 30-Day Journey</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 py-8">
          <div className="text-4xl leading-none text-teal-200 line-through">$997</div>
          <div className="text-7xl font-bold leading-none md:text-[4.5rem]">$47</div>
        </div>
        <YfwlCountdown
          variant="panels"
          className="text-[color:var(--yfwl-on-primary-container-token)]"
        />
        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {BONUSES.map(({ title, subtitle, icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 p-4"
            >
              <span
                className="material-symbols-outlined shrink-0 text-xl"
                style={{ color: "var(--yfwl-brand-orange)" }}
                aria-hidden
              >
                {icon}
              </span>
              <div className="min-w-0">
                <div className="font-bold text-sm">{title}</div>
                <div className="text-xs opacity-80">{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
