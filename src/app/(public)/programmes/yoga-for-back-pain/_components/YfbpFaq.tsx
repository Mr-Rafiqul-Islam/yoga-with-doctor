import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "Do I need any special equipment?",
    answer:
      "No! All exercises can be done with a simple yoga mat or even on a carpeted floor. We focus on bodyweight alignment and gentle stretching.",
    defaultOpen: true,
  },
  {
    question: "Is this safe for herniated discs?",
    answer:
      "Yes, our program is specifically designed to be low-impact. However, we always recommend consulting your physician before starting any new physical regimen if you have a diagnosed severe injury.",
    defaultOpen: false,
  },
  {
    question: "How long before I see results?",
    answer:
      "Most students report significant relief from stiffness after their very first 15-minute session. Long-term structural improvement typically begins within 14-21 days of consistent practice.",
    defaultOpen: false,
  },
] as const;

export function YfbpFaq() {
  return (
    <ScrollReveal className="bg-[var(--yfbp-surface-container-low)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-slate-900 yfbp-text-headline-lg">Common Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map(({ question, answer, defaultOpen }) => (
            <details
              key={question}
              className="group cursor-pointer rounded-2xl bg-white p-6"
              open={defaultOpen}
            >
              <summary className="flex list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden yfbp-text-headline-md">
                {question}
                <span
                  className="material-symbols-outlined shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-[var(--yfbp-on-surface-variant)] yfbp-text-body-md">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
