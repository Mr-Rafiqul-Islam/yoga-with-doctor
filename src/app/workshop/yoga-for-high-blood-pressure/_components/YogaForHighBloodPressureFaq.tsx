import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { FAQ_ITEMS } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureFaq() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-bright)] px-6 py-16" as="section" id="faq">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-12 text-center text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
          Common Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[var(--color-border-card)] bg-white p-6"
            >
              <h4 className="mb-2 font-bold text-[var(--color-on-surface)]">{item.q}</h4>
              <p className="text-[var(--color-secondary)]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
