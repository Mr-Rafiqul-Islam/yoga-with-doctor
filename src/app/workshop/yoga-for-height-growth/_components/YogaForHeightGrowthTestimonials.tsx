import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { TESTIMONIALS } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthTestimonials() {
  return (
    <ScrollReveal className="overflow-hidden px-6 py-20" as="section">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-[-0.01em]">{TESTIMONIALS.title}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.items.map((item) => (
            <article key={item.name} className="glass-card rounded-3xl p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-label font-semibold">{item.name}</p>
                  <div className="flex text-[var(--color-tertiary)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={`${item.name}-${i}`} className="material-symbols-outlined material-symbols-outlined--fill text-sm">
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[var(--color-on-surface-variant)]">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
