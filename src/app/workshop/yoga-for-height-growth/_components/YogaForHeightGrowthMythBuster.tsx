import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { MYTH_BUSTER } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthMythBuster() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20" as="section">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-[-0.01em]">{MYTH_BUSTER.title}</h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            {MYTH_BUSTER.myths.map((item) => (
              <article key={item.myth} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-label mb-2 font-semibold text-[var(--color-error)]">{item.myth}</h3>
                <p className="text-[var(--color-on-surface-variant)]">{item.fact}</p>
              </article>
            ))}
          </div>
          <div>
            <Image
              src={MYTH_BUSTER.image}
              alt="Anatomy chart"
              width={720}
              height={620}
              className="h-auto w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
