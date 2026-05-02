import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    q: "Can I still gain height if I'm over 18?",
    a: 'Absolutely. While primary bone growth slows down, most adults have significant height "hidden" in compressed spinal discs and poor posture. Our program unlocks this potential, typically adding 1-3 inches regardless of age.',
  },
  {
    q: "Is the program safe for beginners?",
    a: "Yes! Every pose includes modifications for beginners. We prioritize safety and gradual progression to ensure you never overstrain your back.",
  },
  {
    q: "How much time do I need daily?",
    a: "We recommend at least 15-20 minutes a day for maximum results. However, even doing the routines 3 times a week will yield noticeable posture improvements.",
  },
] as const;

export function YfhgFaq() {
  return (
    <ScrollReveal className="px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]" as="section">
      <div className="mx-auto max-w-3xl">
        <h2 className="yfhg-headline-lg mb-[var(--yfhg-space-xl)] text-center text-[color:var(--color-on-background)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((item) => (
            <details key={item.q} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 yfhg-font-label font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-[color:var(--color-on-surface-variant)]">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
