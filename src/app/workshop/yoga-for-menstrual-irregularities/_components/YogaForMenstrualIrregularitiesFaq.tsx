import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const faqs = [
  {
    question: "Is this workshop safe for beginners?",
    answer:
      "Absolutely. The practices are gentle and specifically designed for all experience levels. We focus on somatic awareness rather than advanced flexibility.",
  },
  {
    question: "I have PCOS, will this help?",
    answer:
      "Yes, yoga therapy is a highly effective complementary approach for managing PCOS symptoms by lowering insulin resistance and reducing stress.",
  },
  {
    question: "How long is the workshop?",
    answer:
      "The live session is approximately 90 minutes, including 45 minutes of practice and 45 minutes of education and Q&A.",
  },
];

export function YogaForMenstrualIrregularitiesFaq() {
  return (
    <ScrollReveal className="mx-auto max-w-3xl px-6 py-32" as="section" id="faq">
      <h2 className="mb-16 text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
        Common Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-[var(--color-outline-variant)] bg-white"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
              <span className="pr-4 text-sm font-bold text-[var(--color-on-surface)] md:text-base">
                {faq.question}
              </span>
              <span className="material-symbols-outlined shrink-0 transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-on-surface-variant)]">{faq.answer}</div>
          </details>
        ))}
      </div>
    </ScrollReveal>
  );
}
