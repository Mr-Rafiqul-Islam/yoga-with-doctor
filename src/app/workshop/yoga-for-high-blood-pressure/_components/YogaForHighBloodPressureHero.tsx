import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { HERO } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 py-16" as="section">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="z-10">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-primary)]">
            {HERO.label}
          </span>
          <h1 className="mb-6 text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-on-surface)]">
            {HERO.title}
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-[1.6] text-[var(--color-secondary)]">{HERO.body}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#register"
              className="flex h-14 items-center justify-center rounded-2xl bg-[var(--color-tertiary-container)] px-8 font-bold text-[var(--color-on-tertiary-container)] transition-all hover:brightness-110 active:scale-95"
            >
              {HERO.cta}
            </a>
            <div className="flex items-center gap-3 px-4">
              <span className="material-symbols-outlined text-[var(--color-primary)]">verified_user</span>
              <span className="text-sm font-medium text-[var(--color-secondary)]">{HERO.badge}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-3xl border-8 border-white bg-[var(--color-surface-container)] shadow-2xl">
            <Image
              src={HERO.imageSrc}
              alt={HERO.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <div className="hbp-breath-guider absolute -bottom-10 -right-10 animate-pulse" aria-hidden />
        </div>
      </div>
    </ScrollReveal>
  );
}
