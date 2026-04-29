import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsJG_soyBYrZBFRs83aWW77t-qAekTeOoCwqgfdJqWvOGO_6dXr4Gdhsfg9xc7gKem3StXou9_D8MPX1vz2tfmZb0NCGchhjFVO6BqVRFgtBZ0ydWzAeExUVX0q4GMzMhGPdFYuVPq68Pct9lD7Z6oGDBoSI3pYp_nuhbr7x8e5ofUfAxmrs2H9tpU3Yr2ND_ou536rgTHcP5CgroF0h0ksGLCSm5QowBpvutJGN-qOAt6XPTYNZ9R2uvcUG1eecTGlpxbUU_jX_8U";

export function YogaForMenstrualIrregularitiesHero() {
  return (
    <ScrollReveal as="header" className="mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-24">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1 space-y-8">
          <span className="inline-block rounded-full bg-[var(--color-secondary-container)] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-on-secondary-container)]">
            Free Live Workshop
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--color-primary)] lg:max-w-xl md:text-5xl lg:text-[2.75rem]">
            Supporting Your Cycle <span className="italic">Naturally</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            Regain hormonal balance and find your natural rhythm through evidence-based yoga practices
            designed specifically for menstrual irregularities.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <a
              className="rounded-xl bg-[var(--color-cta)] px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              href="#register"
            >
              Join Free Workshop
            </a>
            <div className="flex items-center gap-2 text-[var(--color-on-surface-variant)]">
              <span className="material-symbols-outlined text-[var(--color-primary)]">verified_user</span>
              <span className="text-base font-semibold">Limited Slots Available</span>
            </div>
          </div>
        </div>
        <div className="relative w-full flex-1">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[var(--color-primary-fixed)] opacity-30 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mi-soft-shadow">
            <Image
              src={HERO_IMAGE}
              alt="Serene woman practicing gentle yoga in a sun-drenched minimalist studio with soft lavender curtains and warm morning light"
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
