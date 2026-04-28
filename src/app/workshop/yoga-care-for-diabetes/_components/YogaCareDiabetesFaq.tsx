import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    id: "type1type2",
    q: "Is this workshop suitable for Type 1 and Type 2?",
    a: "Yes. The session focuses on stress regulation, safe movement, and supportive habits. If you have Type 1, please follow your clinician’s guidance closely and treat this as complementary education.",
    defaultOpen: true,
  },
  {
    id: "meds",
    q: "Do I need to stop my medication to do yoga?",
    a: "No. This is complementary support. Continue prescribed medication and only make changes with your doctor.",
    defaultOpen: false,
  },
  {
    id: "miss",
    q: "What if I miss the live session?",
    a: "A replay link will be sent to registered participants and will be available for a limited time after the workshop.",
    defaultOpen: false,
  },
] as const;

export function YogaCareDiabetesFaq() {
  return (
    <ScrollReveal className="py-24" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.id}
              className="premium-shadow group overflow-hidden rounded-2xl border border-[rgb(0_0_0/0.06)] bg-white"
              open={f.defaultOpen}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-[18px] font-semibold">
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

