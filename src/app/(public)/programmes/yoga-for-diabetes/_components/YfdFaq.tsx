import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    q: "What if I've never done yoga before?",
    a: 'Perfect! Our program is designed for beginners. We focus on "Clinical Movement" rather than athletic flexibility. If you can breathe, you can do this program.',
    defaultOpen: true,
  },
  {
    q: "Can I really see results in 30 days?",
    a: "Most patients report improved morning numbers and increased energy within the first 10-14 days. 30 days is the timeframe where long-term metabolic habits solidify.",
    defaultOpen: false,
  },
  {
    q: "Does this replace my medication?",
    a: "This program is a complementary protocol. You should never adjust medication without consulting your physician. However, many of our patients find they need less as their natural insulin sensitivity improves.",
    defaultOpen: false,
  },
] as const;

export function YfdFaq() {
  return (
    <ScrollReveal id="faq" className="mx-auto max-w-3xl px-5 py-12 md:py-16" delay={0.4}>
      <h2 className="yfd-text-headline-lg mb-12 text-center text-[color:var(--yfd-primary)]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group cursor-pointer rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
            open={item.defaultOpen}
          >
            <summary className="flex list-none items-center justify-between text-lg font-bold marker:hidden [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-[color:var(--yfd-on-surface-variant)]">{item.a}</p>
          </details>
        ))}
      </div>
    </ScrollReveal>
  );
}
