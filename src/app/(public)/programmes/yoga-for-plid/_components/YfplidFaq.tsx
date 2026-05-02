import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    question: "Is this safe if I have a severe herniated disc?",
    answer:
      "Yes. This program is specifically designed for the acute phase. We focus on decompression movements that put zero pressure on the disc wall.",
    defaultOpen: true,
  },
  {
    question: "Can this replace the surgery my doctor recommended?",
    answer:
      "Many of our students have successfully avoided surgery. However, we always recommend showing our movement syllabus to your primary physician.",
    defaultOpen: false,
  },
];

export function YfplidFaq() {
  return (
    <ScrollReveal className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="yfplid-text-h2 mb-12 text-center text-[color:var(--yfplid-primary)]">
          Common Concerns
        </h2>
        <div className="space-y-4">
          {FAQS.map(({ question, answer, defaultOpen }) => (
            <details
              key={question}
              className="group overflow-hidden rounded-xl bg-white shadow-sm"
              open={defaultOpen}
            >
              <summary className="flex list-none cursor-pointer items-center justify-between p-6 font-bold [&::-webkit-details-marker]:hidden">
                {question}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180" aria-hidden>
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 text-[color:var(--yfplid-on-surface-variant)]">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
