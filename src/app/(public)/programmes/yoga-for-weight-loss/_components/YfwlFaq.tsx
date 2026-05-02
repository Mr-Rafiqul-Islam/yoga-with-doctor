import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "Does yoga actually work for weight loss?",
    answer:
      "Yes. Unlike high-impact cardio which can spike cortisol (stress), our specific yoga sequences lower cortisol and activate your metabolism, allowing your body to burn fat sustainably without feeling depleted.",
  },
  {
    question: "I'm not flexible, can I still do this?",
    answer:
      "Absolutely. This program is designed for beginners. We use modifications and props so that anyone, at any fitness level, can safely perform the movements and get results.",
  },
  {
    question: "How much time do I need daily?",
    answer:
      "Just 20-30 minutes a day is all you need. We've designed these routines to fit into the busiest schedules while still providing maximum metabolic benefit.",
  },
] as const;

export function YfwlFaq() {
  return (
    <ScrollReveal className="bg-[color:var(--yfwl-surface-container-low)] px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="yfwl-text-h2 mb-12 text-center text-[color:var(--yfwl-on-surface)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details
              key={question}
              className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm transition-[box-shadow] open:shadow-md open:ring-1 open:ring-[color:var(--yfwl-primary)]"
            >
              <summary className="flex list-none items-center justify-between font-bold text-[color:var(--yfwl-on-surface)] [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  className="material-symbols-outlined shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-sm text-[color:var(--yfwl-on-surface-variant)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
