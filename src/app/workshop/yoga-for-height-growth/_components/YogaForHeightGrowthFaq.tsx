import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { FAQS } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthFaq() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20" as="section">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-[-0.01em]">Common Questions</h2>
        <div className="space-y-4">
          {FAQS.map((item) => (
            <details
              key={item.q}
              open={item.defaultOpen}
              className="group overflow-hidden rounded-2xl border border-[var(--color-surface-variant)] bg-white shadow-sm"
            >
              <summary className="font-label flex cursor-pointer list-none items-center justify-between p-6 font-semibold">
                {item.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-on-surface-variant)]">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
