import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    id: "mat",
    q: "Do I need a yoga mat?",
    a: "Not necessarily! For this workshop, a clear space on the floor or even a firm chair will work. We'll show you how to adapt.",
  },
  {
    id: "recorded",
    q: "Is this workshop live or recorded?",
    a: "This is a live interactive session where Sarah will answer questions in real-time. A recording will be sent to registered participants for 48 hours.",
  },
  {
    id: "beginner",
    q: "I haven't exercised in years. Can I join?",
    a: "Absolutely. This is specifically designed for beginners and those returning to physical activity. Everything is low-impact.",
  },
] as const;

export function YogaForAllFaq() {
  return (
    <ScrollReveal className="bg-white py-24" as="section" id="faq">
      <div className="mx-auto max-w-[800px] px-8">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Common Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.id}
              className="group rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold">
                {f.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-on-surface-variant)]">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

