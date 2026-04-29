import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const faqs = [
  {
    q: "Is this safe for hyperthyroidism?",
    a: "Yes. We include calming modifications for hyperthyroid conditions to support balance.",
  },
  {
    q: "Do I need to stop my medication?",
    a: "No. This workshop complements medical treatment, not replaces it.",
  },
  {
    q: "I'm a complete beginner. Can I join?",
    a: "Yes. All techniques are beginner-friendly and fatigue-conscious.",
  },
];

export function YogaForThyroidFaq() {
  return (
    <ScrollReveal id="faq" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <details key={item.q} className="group overflow-hidden rounded-xl bg-[var(--color-surface)]" open={idx === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-bold">
                {item.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-[var(--color-on-surface-variant)]">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
