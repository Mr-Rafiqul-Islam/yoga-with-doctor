import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BUNDLE_ROWS = [
  {
    icon: "ondemand_video" as const,
    title: "30 Days Guided Yoga Program",
    sub: "Daily HD follow-along videos",
    price: "$297",
  },
  {
    icon: "calendar_today" as const,
    title: "The Routine Architect System",
    sub: "Custom habit-building templates",
    price: "$147",
  },
  {
    icon: "groups" as const,
    title: "Private Support Community",
    sub: "Lifetime access to instructors",
    price: "$197",
  },
];

export function YfaBundle() {
  return (
    <ScrollReveal className="bg-[color:var(--yfa-secondary-container)]/30 px-6 py-16" delay={0.06}>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-teal-100 bg-white shadow-2xl">
        <div className="bg-[color:var(--yfa-primary)] p-12 text-center">
          <h2 className="yfa-text-h2 text-white">The Complete Yoga For All Bundle</h2>
          <p className="yfa-text-body-lg mt-2 text-[color:var(--yfa-primary-fixed-dim)]">
            Everything you need to succeed, valued at over $800
          </p>
        </div>
        <div className="space-y-6 p-12">
          {BUNDLE_ROWS.map(({ icon, title, sub, price }) => (
            <div
              key={title}
              className="flex items-center justify-between border-b border-teal-50 pb-4"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[color:var(--yfa-primary)]">{icon}</span>
                <div>
                  <p className="font-bold text-[color:var(--yfa-on-background)]">{title}</p>
                  <p className="text-sm text-[color:var(--yfa-secondary)]">{sub}</p>
                </div>
              </div>
              <p className="font-bold text-[color:var(--yfa-secondary)] line-through">{price}</p>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-xl bg-[color:var(--yfa-surface-container-low)] p-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[color:var(--yfa-tertiary)]">card_giftcard</span>
              <div>
                <p className="font-bold text-[color:var(--yfa-tertiary)]">BONUS: 5-Min Morning Rituals</p>
                <p className="text-sm text-[color:var(--yfa-secondary)]">For when you&apos;re in a rush</p>
              </div>
            </div>
            <p className="font-bold text-[color:var(--yfa-tertiary)]">FREE</p>
          </div>
          <div className="pt-10 text-center">
            <p className="yfa-text-label-caps mb-2 uppercase text-[color:var(--yfa-secondary)]">
              Total Value: $838
            </p>
            <p className="mb-6 text-4xl font-bold text-[color:var(--yfa-primary)]">
              Get It All Today For Only $97
            </p>
            <a
              className="block w-full rounded-2xl bg-[color:var(--yfa-tertiary)] py-6 text-center text-xl font-bold text-white transition-transform hover:scale-[1.02]"
              href="#checkout"
            >
              Claim My Access Now
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[color:var(--yfa-secondary)]">
              <span className="material-symbols-outlined text-sm">lock</span>
              Secure 256-bit SSL Encrypted Payment
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
