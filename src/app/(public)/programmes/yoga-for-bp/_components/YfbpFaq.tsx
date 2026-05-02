import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { YfbpFaqItem } from "./YfbpFaqItem";

const FAQ_ITEMS = [
  {
    question: "Is this yoga safe for everyone?",
    answer:
      "Yes. These routines are designed specifically for those with cardiovascular concerns. We avoid inversions and heavy strains that could spike pressure.",
  },
  {
    question: "I'm over 60. Can I do this?",
    answer:
      "Absolutely. Most of our students are between 45-75. We focus on mobility and breathing, not athletic feats.",
  },
  {
    question: "Will it really lower my blood pressure?",
    answer:
      "Clinical studies show that yoga and deep breathing consistently lower systolic and diastolic pressure by reducing sympathetic nervous system activity.",
  },
];

export function YfbpFaq() {
  return (
    <ScrollReveal className="bg-[color:var(--yfbp-surface-container-low)] px-6 py-24" delay={0.06}>
      <div className="mx-auto max-w-3xl">
        <h2 className="yfbp-text-h2 mb-12 text-center text-[color:var(--yfbp-on-background)]">
          Common Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map(({ question, answer }, index) => (
            <YfbpFaqItem key={question} answer={answer} question={question} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
