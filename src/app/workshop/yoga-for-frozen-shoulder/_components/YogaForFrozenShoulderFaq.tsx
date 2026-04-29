import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const faqs = [
  {
    question: "Is this safe for severe frozen shoulder?",
    answer:
      'Yes. We focus on non-weight-bearing micro-movements that do not cross the "pain threshold," making it safe even for high-inflammation stages.',
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "Only a chair and a wall. We design our protocols to be accessible from your living room without expensive yoga props.",
  },
  {
    question: "What if I cannot attend the live session?",
    answer:
      "Every registered participant will receive a 48-hour access link to the recording, although we recommend live attendance for the Q&A.",
  },
  {
    question: "Is this a substitute for surgery?",
    answer:
      "While many avoid surgery using our protocols, you should always consult your primary physician. This workshop is educational in nature.",
  },
];

export function YogaForFrozenShoulderFaq() {
  return (
    <ScrollReveal className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-3xl font-semibold text-[var(--color-on-surface)] md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[var(--color-on-surface)]">{faq.question}</h3>
              <p className="text-[var(--color-on-surface-variant)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
