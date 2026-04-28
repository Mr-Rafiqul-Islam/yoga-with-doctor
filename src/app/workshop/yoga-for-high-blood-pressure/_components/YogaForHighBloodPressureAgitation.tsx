import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { AGITATION } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureAgitation() {
  return (
    <ScrollReveal className="px-6 py-16" as="section">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-12 rounded-3xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-high)] p-12 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-6 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
            {AGITATION.title}
          </h2>
          <p className="mb-6 text-lg leading-[1.6] text-[var(--color-on-surface-variant)]">{AGITATION.body}</p>
          <ul className="space-y-4">
            {AGITATION.bullets.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="material-symbols-outlined shrink-0 text-[var(--color-error)]">warning</span>
                <span className="text-[var(--color-on-surface-variant)]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full shrink-0 md:w-80">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-inner">
            <Image
              src={AGITATION.imageSrc}
              alt={AGITATION.imageAlt}
              fill
              className="object-cover grayscale opacity-80"
              sizes="320px"
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
