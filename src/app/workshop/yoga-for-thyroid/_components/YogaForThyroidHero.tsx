import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForThyroidHero() {
  return (
    <ScrollReveal as="header" className="px-6 pb-20 pt-14 md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-[var(--color-secondary-container)] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-on-secondary-container)]">
            Free Live Workshop
          </span>
          <h1 className="text-4xl font-bold tracking-[-0.02em] text-[var(--color-on-surface)] md:text-5xl">
            Support your thyroid health naturally with guided yoga
          </h1>
          <p className="text-lg text-[var(--color-on-surface-variant)]">
            Balance hormones, energy, and lifestyle step-by-step through therapeutic movement and mindful breathing.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(156,39,176,0.15)] transition hover:brightness-110"
            >
              Join Free Workshop
            </a>
            <div className="flex items-center gap-2 text-[var(--color-secondary)]">
              <span className="material-symbols-outlined">timer</span>
              <span className="font-semibold">Next Session: Sunday, 10 AM</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--color-surface-container-highest)] shadow-xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD7uTSKZq2F42uons5fYvLHNIOZ9Suf6lK_vnJPIQdJ4E4I7vXuqlL3yZX2nefiDjAJZfl5vODT-iLxH8cJLsw1vF-kf_dbXQU6pNjyRfQ7vy3P5iCP6jhPK4RX6x50EB2_0Rt7ZyG21DVqmsN9nEUPB5XAZjVQSKRlzSyK7ae2RpA5CfhDByGOPjBkggr_9pJVIiIhrQK4f-TFNDozXxoyUm-oI21fJGBb1a5tKrbOHChzEtOoRoC1cL1CcsHO3Awa9tVTFIpSHSs"
            alt="Woman practicing yoga in a calm studio"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
