import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    q: "Is this safe for someone who has had a heart attack?",
    a: "Yes, our protocols are specifically designed for post-cardiac recovery. However, we strictly mandate that you consult with your physician before starting any new exercise routine.",
  },
  {
    q: "How long is the workshop?",
    a: "The live workshop lasts approximately 75 minutes, including a 15-minute Q&A session with Dr. Sarah Chen.",
  },
  {
    q: "What equipment do I need?",
    a: "Just a comfortable chair or a yoga mat. We provide modifications for those who prefer to remain seated throughout the practice.",
  },
] as const;

export function YogaForHeartCareFaq() {
  return (
    <ScrollReveal className="px-6 py-20" as="section" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-xl border border-[rgb(var(--color-primary-rgb)/0.05)] bg-white open:shadow-sm"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <span className="font-bold text-[var(--color-on-background)]">{item.q}</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="border-t border-teal-50 px-6 pb-6 pt-0 text-[var(--color-on-surface-variant)]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
