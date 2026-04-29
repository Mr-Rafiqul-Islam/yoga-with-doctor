import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForBackPainHero() {
  return (
    <ScrollReveal as="header" className="px-6 pb-12 pt-12 md:pb-20 md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="mb-6 inline-block rounded-full bg-[var(--color-secondary-container)] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-on-secondary-container)]">
            Free Live Workshop
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-[-0.02em] text-[var(--color-primary)] md:text-6xl md:leading-[1.1]">
            Relieve your back pain naturally without risky treatments
          </h1>
          <p className="mb-8 max-w-xl text-lg text-[var(--color-on-surface-variant)]">
            Join Dr. Elena Vance for a clinical-grade yoga workshop designed to restore spinal mobility and
            reduce chronic stiffness in 20 minutes a day.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="orange-cta-glow inline-flex items-center justify-center rounded-lg bg-[var(--color-action-orange)] px-8 py-4 text-base font-semibold text-white transition hover:brightness-110"
            >
              Join Free Workshop
            </a>
            <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">verified</span>
              <span>Medically Reviewed</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="vsl-shadow relative aspect-video overflow-hidden rounded-2xl border-4 border-white bg-[var(--color-surface-container-highest)]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS0h6Srv8-KHFiKZ3pYlnhAWdPMvZ6g6TbjW_YWRNLtI9YY9xMv5RT3RTyI8SFvZZYz93bm8Do8Begcm7iR2LZ8CPqBuRVPbCDRrARWmtzHiVFzOaQX91tRHi3ij3103S-2xuXRoKsfvQfzEg8rrMxCnyOYcAjCm7-kO6xKOArlx6Wkji0zkJ1m_nRSHy-yiZYSBUz2KKaWqQV3NQqKXU5wqG212PxVRavMM5A63BbUmW1rPIA8hDB_YdONX9qFPGEVP75qAjTQF5T"
              alt="Yoga instructor demonstrating back pain relief movement"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/90 p-5">
                <span className="material-symbols-outlined material-symbols-outlined--fill text-5xl text-[var(--color-primary)]">
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-[var(--color-surface-container-high)] bg-white p-4 shadow-lg md:block">
            <p className="text-sm font-bold text-[var(--color-primary)]">Next Session: Live in 4h 12m</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
