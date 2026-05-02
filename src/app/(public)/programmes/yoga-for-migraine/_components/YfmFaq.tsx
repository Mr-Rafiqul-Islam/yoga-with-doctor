import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "I've never done yoga before. Can I still join?",
    answer:
      "Absolutely. This program is designed for all levels. We focus on therapeutic movement, not advanced gymnastics. If you can breathe, you can do this.",
    defaultOpen: true,
  },
  {
    question: "How much time do I need daily?",
    answer:
      "We recommend 15-20 minutes a day. We've optimized the routines to fit into a busy professional or parent schedule.",
    defaultOpen: false,
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "We offer a 7-day no-questions-asked money-back guarantee. If you don't feel a difference in your stress levels or tension within the first week, we'll refund your full amount.",
    defaultOpen: false,
  },
];

export function YfmFaq() {
  return (
    <ScrollReveal className="bg-[color:var(--yfm-surface-container-low)] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="yfm-text-h2 mb-16 text-center text-[color:var(--yfm-primary)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map(({ question, answer, defaultOpen }) => (
            <details
              key={question}
              className="group overflow-hidden rounded-xl border border-teal-50 bg-white shadow-sm dark:border-teal-900/40"
              open={defaultOpen}
            >
              <summary className="flex list-none cursor-pointer items-center justify-between p-6 font-bold text-slate-800 [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  className="material-symbols-outlined transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-[color:var(--yfm-secondary)]">{answer}</div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
