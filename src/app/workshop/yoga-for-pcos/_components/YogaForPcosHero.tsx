import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export default function YogaForPcosHero() {
  return (
    <ScrollReveal
      as="header"
      className="relative overflow-hidden px-6 pb-20 pt-12 md:pb-20 md:pt-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <span className="text-label-sm inline-block rounded-full bg-[rgb(var(--color-primary-rgb)/0.1)] px-4 py-1.5 text-[var(--color-primary)]">
            Free Live Online Workshop
          </span>
          <h1 className="font-headline-xl text-[var(--color-on-surface)]">
            Support your hormonal balance naturally
          </h1>
          <p className="text-body-lg max-w-lg text-[var(--color-on-surface-variant)]">
            Reclaim your health and rhythm through a medically-backed, restorative yoga practice designed specifically for PCOS and PCOD management.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#register"
              className="ambient-shadow text-label-sm rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-8 py-4 text-center text-[var(--color-on-primary)] transition-all hover:-translate-y-1"
            >
              Join Free Workshop
            </a>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-on-surface-variant)]">
              <span className="material-symbols-outlined text-[var(--color-tertiary)]">
                verified_user
              </span>
              <span>9,400+ Women Enrolled</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[var(--color-primary-fixed)] to-[var(--color-secondary-fixed)] opacity-30 blur-3xl" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ambient-shadow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiiDxoZscXRO6mS2b5YOC6UDAA9S04rFTr8kxPiqDoexcOZ6_puZFhuiazxDwx4SiNqsmo6zlrJZmf7KEsKfiCFsvlgxev95aijFbtecRJHpYrjVXsuA8DSbbe4jlQoV-twmqIKcKV96ALVsQ74sS19toRHFmndV7zoRRoViSHl5ERGA2KU64XBQnPwjYDY-SzoaVIvU1grrLx6-4I8bWKZ7ajr-rTT_1nURapVxFiHCgc0lZMdOuJpS8iAjNSOArAoD-HR2o1YQlu"
              alt="Yoga for PCOS"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
