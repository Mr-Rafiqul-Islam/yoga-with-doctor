import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "Is this safe if I've never done yoga before?",
    answer:
      "Absolutely. This course was specifically built with beginners in mind. We start with foundational grounding and provide modifications for every body type and experience level.",
  },
  {
    question: "What if I have a high-risk pregnancy?",
    answer:
      "While our program is doctor-guided, we always recommend consulting your specific obstetrician before starting any new physical regimen if your pregnancy is classified as high-risk.",
  },
  {
    question: "When is the best time to start?",
    answer:
      "The method includes modules for all three trimesters. You can join at any stage and find content specifically tailored to your current week of pregnancy.",
  },
] as const;

export function PcpFaq() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface)] py-24" delay={0.18}>
      <div className="mx-auto max-w-3xl px-8">
        <h2 className="pcp-text-h2 mb-16 text-center text-[color:var(--color-on-surface)]">Common Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-[#E8D5D0] bg-[color:var(--color-surface-container-lowest)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-[family-name:var(--font-headline)] text-xl text-[color:var(--color-on-surface)]">
                {item.question}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 pcp-text-body-md text-[color:var(--color-on-surface-variant)]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
