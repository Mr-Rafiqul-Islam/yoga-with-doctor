import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { AUTHORITY } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureAuthority() {
  return (
    <ScrollReveal className="bg-[#f8fafc] px-6 py-16" as="section">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={AUTHORITY.imageSrc}
              alt={AUTHORITY.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[var(--color-border-card)] bg-white p-6 shadow-xl">
            <p className="font-bold text-[var(--color-primary)]">{AUTHORITY.statTitle}</p>
            <p className="text-xs uppercase text-[var(--color-secondary)]">{AUTHORITY.statSubtitle}</p>
          </div>
        </div>
        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)]">
            {AUTHORITY.label}
          </span>
          <h2 className="mb-6 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
            {AUTHORITY.name}
          </h2>
          <p className="mb-6 text-lg leading-[1.6] text-[var(--color-secondary)]">{AUTHORITY.bio}</p>
          <div className="space-y-4">
            {AUTHORITY.credentials.map((line) => (
              <div key={line} className="flex items-center gap-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span className="font-medium text-[var(--color-on-surface)]">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
