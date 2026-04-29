import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { HERO } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 pb-20 pt-20" as="section">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="font-label inline-flex items-center gap-2 rounded-full bg-[rgb(76_175_80/0.10)] px-4 py-1 text-sm text-[var(--color-primary)]">
            <span className="material-symbols-outlined text-sm">bolt</span>
            {HERO.badge}
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-on-background)]">
            {HERO.titlePrefix} <span className="text-[var(--color-primary)]">{HERO.titleHighlight}</span>
          </h1>
          <p className="max-w-lg text-lg leading-7 text-[var(--color-on-surface-variant)]">{HERO.body}</p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="font-label inline-flex items-center justify-center rounded-2xl border-b-4 border-[rgb(139_80_0)] bg-[var(--color-tertiary-container)] px-8 py-4 text-white shadow-lg transition-all hover:scale-105"
            >
              {HERO.primaryCta}
            </a>

            <div className="flex items-center gap-3 px-2">
              <div className="flex -space-x-2">
                {HERO.socialAvatars.map((avatar) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt="Participant avatar"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="font-label text-sm text-[var(--color-on-surface-variant)]">{HERO.socialProof}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-[rgb(51_160_253/0.20)] blur-3xl" />
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--color-surface-container-highest)] shadow-xl">
            <Image src={HERO.heroImage} alt="Yoga transformation" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20">
              <button type="button" className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
                <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
