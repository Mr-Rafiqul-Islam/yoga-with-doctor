import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "Will this cure my thyroid condition?",
    answer:
      'This program is designed as a complementary holistic support system. While it focuses on lifestyle and stress management which significantly impact thyroid health, it is not a "cure" and should be used alongside your medical professional\'s guidance.',
  },
  {
    question: "I have no yoga experience. Can I do this?",
    answer:
      "Absolutely. The Thyroid Yoga Protocol is built on therapeutic, gentle movements accessible to any fitness level. We focus on somatic regulation rather than complex athletics.",
  },
  {
    question: "What if I don't have time for long sessions?",
    answer:
      'We include "Energy Resets" that take as little as 10 minutes. The core program sessions are designed to be efficient yet deeply effective for busy lifestyles.',
  },
];

export function YftFaq() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface-container-lowest)] px-8 py-24" delay={0.21}>
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="yft-text-h2 mb-12 text-center text-[color:var(--color-primary)]">Common Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-transparent bg-[color:var(--color-surface-container-low)] p-6 transition-all open:border-[color:var(--color-primary)]/20 open:bg-[color:var(--color-surface-container-lowest)]"
            >
              <summary className="yft-text-h3 flex cursor-pointer list-none items-center justify-between text-lg">
                {item.question}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="yft-text-body-md mt-4 text-[color:var(--color-on-surface-variant)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
