import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATARS = [
  {
    alt: "User 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4_XPWfTQNUIrQXai_4CJE1fspxUURFvAIwEle9pI_zx-54HrDrA4hTcxKtHDDmEZVC3lnPRhf_nwl9y9W1-UNqP1yZw7Gy_kzsdphgqt5YWovGGqJG62HX-feE22BUNEeyHrHau1VRWLpWacoKxdFW1VsuGHyJTiHp17omzadoNUSDY9qRyvmNLhBWV0P_TTWsgAGj6t36BV8zaC6BeWjXlWUZHJIBoTB5qU_x2yqdumc4GqEeAelhkROTdWkAagV9EyUrKz88jbE",
  },
  {
    alt: "User 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD846ef1rDLr9kEcbZnHKNA1iGfZHpd2mjO3wEbDA7BXVDeBwZFPnyF-WQVrywZC4xJ2wujtY8AH9Eq4nOTNKtuKzDg6S-PXWF6LaXlEOYNz0n7RFJ7LZcrRacKMyFHedPWP5DA-QlPvBvleDjI118PPgJ3If5u0z06xJ1PgXS5muI4JjVUKG9DXDyc3orAIKz9fZCL9YF6juIvOTmzwIKRqHH2d_CD9smVMrAsEVlHcFehHlfWk9eidUdk8Fx3trFmMaSY9RlSr3XG",
  },
  {
    alt: "User 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2wtUdHCIVw_A77JSYpFkCsj2oFEWwvo3_xODRZvMDG3gkOL2Y-7m-3-vsqQPxSz73TTIjUgqbrBlCtAcy7Wrp8hiiZJTliNdvRYnA9yMMOQDeEG2T6uU3yK8NrbCR53EbnPetJez6yHmuTqBDsyNaG1vTkMUjSu_gGVKxGogb4ebb53o_BMYPxFgoEyt5nxJKHnnRGrOSufRYW4nqx38_YEbATDD2CSZV2hVy4CGdiORgaqshUYXpHJUXT6EqPusHPfeNeY_e3lUO",
  },
] as const;

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXZPw04fJdmSMV41Me8aQUwen-f-pW-6B9xyTM-WER-fpVXkGMNR_X_cNukYThF9aE-zg-o8kC1gRaz2fp8Quz4B8isfpTXHiRNtTZeW3uDvf3IAjvbjwkFLvPcSkkIBU1JvDk9fISd7wFbGroyVVxNEqHaeEt5ReS8kAK9HEDqIT9loYT69gcEyZvIU8Ck4PELYqxAfkKEJSb27vdo-lOqY5iSTYPRO2rbLZTlqhw0xuVFlLZFdS8LK52d29HqmMe8aZHbiMcJHxe";

export function YfhgHero() {
  return (
    <ScrollReveal
      className="relative flex min-h-[min(870px,140vh)] items-center px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]"
      as="section"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-[var(--yfhg-space-lg)] md:grid-cols-2">
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary-container)]/10 px-4 py-1 text-[color:var(--color-primary)]">
            <span className="material-symbols-outlined material-symbols-outlined--fill text-lg">
              trending_up
            </span>
            <span className="yfhg-font-label yfhg-label-bold">Scientifically Proven Method</span>
          </div>
          <h1 className="yfhg-display-xl mb-6 text-[color:var(--color-on-background)]">
            Increase Your Height <span className="text-[color:var(--color-primary)]">Naturally</span> with Yoga
          </h1>
          <p className="yfhg-body-lg mb-10 max-w-lg text-[color:var(--color-on-surface-variant)]">
            Simple, guided system to improve posture, growth potential, and confidence through professional-grade
            spinal decompression.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="yfhg-font-label rounded-2xl bg-[color:var(--color-tertiary-container)] px-8 py-5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[0_4px_0_0_#8b5000] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#8b5000] active:translate-y-1 active:shadow-none"
              href="#checkout"
            >
              JOIN THE COURSE NOW
            </Link>
            <div className="flex items-center gap-3 px-2">
              <div className="flex -space-x-3">
                {AVATARS.map((a) => (
                  <div
                    key={a.alt}
                    className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-200"
                  >
                    <Image alt={a.alt} className="object-cover" fill sizes="40px" src={a.src} />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-[color:var(--color-on-surface-variant)]">
                4.9/5 (12,400+ Students)
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[color:var(--color-secondary-container)]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[color:var(--color-primary-container)]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
            <div className="relative aspect-[4/5] w-full">
              <Image
                alt="Yoga Performance"
                className="object-cover"
                fill
                priority
                sizes="(max-width:768px) 100vw, 45vw"
                src={HERO_IMG}
              />
            </div>
            <div className="glass-card absolute bottom-6 left-6 right-6 rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-primary)] text-white">
                  <span className="material-symbols-outlined">height</span>
                </div>
                <div>
                  <p className="yfhg-font-label font-bold text-[color:var(--color-on-background)]">
                    +2.5 Inches Gained
                  </p>
                  <p className="text-xs text-[color:var(--color-on-surface-variant)]">
                    Average result after 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
