import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { YfaFaqItem } from "./YfaFaqItem";

const FAQ_ITEMS = [
  {
    question: "I'm not flexible at all. Can I really do this?",
    answer:
      "Absolutely. Yoga isn't about being flexible; it's about becoming more mobile. We start with chair-assisted movements and very gentle stretches that anyone can do.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "All you need is a comfortable space to move and a chair. A yoga mat is recommended but not strictly necessary for the first week of the program.",
  },
  {
    question: "How long are the daily sessions?",
    answer:
      "Most sessions are between 15 and 20 minutes. We designed them to be short enough to fit into a morning or evening routine without feeling like a burden.",
  },
];

export function YfaFaq() {
  return (
    <ScrollReveal className="bg-[color:var(--yfa-surface-container-lowest)] px-6 py-16" delay={0.06} id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="yfa-text-h2 mb-12 text-center text-[color:var(--yfa-primary)]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map(({ question, answer }, index) => (
            <YfaFaqItem key={question} answer={answer} question={question} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
