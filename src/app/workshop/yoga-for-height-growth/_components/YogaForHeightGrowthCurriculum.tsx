import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { CURRICULUM } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthCurriculum() {
  return (
    <ScrollReveal className="rounded-t-[4rem] bg-[var(--color-primary)] px-6 py-20 text-white" as="section">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-[-0.01em]">{CURRICULUM.title}</h2>
          <p className="text-white/80">{CURRICULUM.subtitle}</p>
        </div>

        <div className="space-y-6">
          {CURRICULUM.items.map((item) => (
            <article key={item.number} className="flex items-start gap-6 rounded-2xl bg-white/10 p-6 transition-colors hover:bg-white/20">
              <div className="text-4xl font-black opacity-30">{item.number}</div>
              <div>
                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                <p className="text-white/80">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
