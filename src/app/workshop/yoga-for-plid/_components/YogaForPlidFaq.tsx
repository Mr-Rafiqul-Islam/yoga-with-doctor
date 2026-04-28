import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    id: "acute",
    q: "Is this safe for acute pain?",
    a: "The workshop focuses on very gentle, clinical movements. However, we always recommend consulting with your physician before starting any new movement program during an acute flare-up.",
  },
  {
    id: "experience",
    q: "Do I need previous yoga experience?",
    a: "No experience is required. This is medical-grade yoga, which is very different from a standard studio class. We focus on therapy, not fitness.",
  },
  {
    id: "surgery",
    q: "What if I have already had surgery?",
    a: "Many of our students are post-operative and use our techniques to strengthen their spine and prevent future issues with other discs.",
  },
] as const;

export function YogaForPlidFaq() {
  return (
    <ScrollReveal className="px-8 py-20" as="section">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.id}
              className="group rounded-xl border border-[var(--color-outline-variant)] bg-white p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {f.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-sm text-[var(--color-on-surface-variant)]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

