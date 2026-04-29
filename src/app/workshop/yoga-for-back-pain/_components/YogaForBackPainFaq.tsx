import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const faqs = [
  {
    q: "I am not flexible. Can I still do this?",
    a: "Yes. This is focused on spinal alignment and gentle progression, not advanced poses.",
  },
  {
    q: "I have had surgery before. Is this safe?",
    a: "The workshop is designed for sensitive backs, but always consult your physician for personal guidance.",
  },
  {
    q: "What equipment do I need?",
    a: "Just a yoga mat or carpeted floor. No special equipment is required.",
  },
];

export function YogaForBackPainFaq() {
  return (
    <ScrollReveal className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item) => (
          <details key={item.q} className="group rounded-2xl border border-[var(--color-surface-container-high)] bg-white p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
              <span>{item.q}</span>
              <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 text-[var(--color-on-surface-variant)]">{item.a}</p>
          </details>
        ))}
      </div>
    </ScrollReveal>
  );
}
