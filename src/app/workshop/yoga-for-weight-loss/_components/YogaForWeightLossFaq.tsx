import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    id: "equipment",
    q: "Do I need any special equipment?",
    a: "Just a yoga mat and some water! If you have yoga blocks, great, but they are not required. A towel is also recommended as you will build some internal heat.",
    defaultOpen: true,
  },
  {
    id: "beginners",
    q: "Is this for beginners?",
    a: "Absolutely. Sarah provides modifications for every pose. Whether you're a first-timer or a seasoned yogi, the Metabolic Flow works based on your own intensity.",
    defaultOpen: false,
  },
  {
    id: "recording",
    q: "What if I can't attend live?",
    a: "While live attendance is encouraged for the Q&A, all registered participants will receive a link to the replay which will be available for 48 hours after the event.",
    defaultOpen: false,
  },
] as const;

export function YogaForWeightLossFaq() {
  return (
    <ScrollReveal className="py-20" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.id}
              className="premium-shadow group overflow-hidden rounded-2xl border border-gray-100 bg-white"
              open={f.defaultOpen}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-[18px] font-semibold">
                {f.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-on-surface-variant)]">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

