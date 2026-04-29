import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { AUTHORITY } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthAuthority() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] px-6 py-20" as="section">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-12 text-4xl font-bold tracking-[-0.01em]">{AUTHORITY.title}</h2>
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
          <div className="relative">
            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-[var(--color-primary)] p-2">
              <Image src={AUTHORITY.image} alt={AUTHORITY.coach} width={180} height={180} className="rounded-full object-cover" />
            </div>
            <div className="font-label absolute -bottom-4 right-0 rounded-full bg-[var(--color-primary)] px-4 py-1 text-sm text-white">
              {AUTHORITY.badge}
            </div>
          </div>

          <div className="max-w-xl space-y-4 text-left">
            <h3 className="text-3xl font-bold">{AUTHORITY.coach}</h3>
            <p className="italic text-[var(--color-on-surface-variant)]">{AUTHORITY.quote}</p>
            <div className="flex flex-wrap gap-4">
              {AUTHORITY.highlights.map((line) => (
                <div
                  key={line}
                  className="font-label flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold shadow-sm"
                >
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">verified</span>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
