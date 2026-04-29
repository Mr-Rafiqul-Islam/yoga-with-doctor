import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCce3Nb8l0MAb383nBM2LJZLiWhodm_0hzrsXU2l04SNMGl8uoOztWiFN3r7WHnF2rP5FanoTYKiJ5Lz9N22w_rwvtop16nK3XZSiust5fF5TdhugSrS1dSoHlwqivv3XkwnMTubC-W-OUO_XY4dkKv-RBWFHBdKGYA_KnT_N9wu7TFkUvIQhiH8jQfTphaKDkBCIdoZOOdIK_MjbHogCNpqubupqa4jfgNGF43GnfD2J4eCg02Z9fyNCdvvJGMQCDhTC-dZYzMdH2k";

const COUNTDOWN_SEGMENTS = [
  { value: "02", label: "Days" },
  { value: "14", label: "Hrs" },
  { value: "45", label: "Min" },
  { value: "12", label: "Sec" },
] as const;

export function YogaForWellbeingHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24" as="section">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-fixed)] px-4 py-2 font-medium leading-tight tracking-[0.01em] text-[var(--color-on-primary-fixed-variant)]">
            <span className="material-symbols-outlined wellbeing-symbol--fill text-[18px]">emergency_home</span>
            Free Live Workshop This Saturday
          </div>
          <h1 className="max-w-lg text-5xl font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-on-background)] md:text-6xl">
            Find calm with simple yoga.
          </h1>
          <p className="max-w-md text-lg font-normal leading-[1.6] text-[var(--color-on-surface-variant)]">
            Experience a professional approach to emotional regulation and stress relief. Join our upcoming live
            workshop designed for busy minds.
          </p>
          <div className="flex gap-4 md:gap-8">
            {COUNTDOWN_SEGMENTS.map((seg) => (
              <div key={seg.label} className="flex flex-col">
                <span className="text-2xl font-semibold leading-[1.4] text-[var(--color-primary)]">{seg.value}</span>
                <span className="text-sm font-medium leading-tight tracking-[0.01em] text-[var(--color-outline)]">
                  {seg.label}
                </span>
              </div>
            ))}
          </div>
          <a
            className="wellbeing-ambient-shadow inline-block rounded-full bg-[var(--color-primary)] px-10 py-4 text-center text-2xl font-semibold leading-[1.4] text-[var(--color-on-primary)] transition-transform hover:scale-105 active:scale-95"
            href="#register"
          >
            Save My Free Spot
          </a>
        </div>
        <div className="relative">
          <div className="absolute -left-12 -top-12 h-64 w-64 animate-pulse rounded-full bg-[var(--color-primary-fixed)] opacity-30 mix-blend-multiply blur-3xl filter" />
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[var(--color-tertiary-fixed)] opacity-30 mix-blend-multiply blur-3xl filter" />
          <div className="relative overflow-hidden rounded-[48px] border-[8px] border-white/50 wellbeing-ambient-shadow">
            <Image
              alt="Yoga session"
              className="h-[500px] w-full object-cover"
              height={500}
              src={HERO_IMAGE}
              width={800}
              priority
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
