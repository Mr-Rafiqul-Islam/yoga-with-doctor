import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const INSTRUCTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3_D42j1um0rWQe8aDzpftnY_rwY_phW2wn3gZhW5iEWjGuAvNLW7jGCT-3zJ1gq41klWrhUNw158WTAfaq9A6vNZzHuNkLZpiuNEu633Byru2oWyt1z8Uu2vA7ZAMBHCcl-UzsF01I27KaqVjyHaenNEmaD_KWjmZWNW5037MFQ-kAfJpg266fLjy1Vj2CW0ZF3ezXHyLU84Jcen6niLqk1D99tkdwSGPW0aS0VLEfHXiLIE3UBFxT5tPkjoney0q0XYgqjxMR_7";

const CHECKLIST = [
  "Vagus Nerve Stimulation Techniques",
  "Somatic Release Movements",
  "Breathwork for Anxiety Reduction",
] as const;

export function YogaForWellbeingAuthority() {
  return (
    <ScrollReveal className="overflow-hidden px-6 py-24" as="section" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="-z-10 absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-60 blur-[100px]" />
          <Image
            alt="Instructor"
            className="wellbeing-ambient-shadow w-full rounded-[40px]"
            height={600}
            src={INSTRUCTOR_IMAGE}
            width={700}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-[32px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
            Science-backed Yoga for Mental Clarity
          </h2>
          <p className="text-lg font-normal leading-[1.6] text-[var(--color-on-surface-variant)]">
            I&apos;m Dr. Sarah Chen, and for 15 years I&apos;ve specialized in the intersection of somatic yoga and
            nervous system regulation. This isn&apos;t about complex poses—it&apos;s about functional movement that
            signals &quot;safety&quot; to your brain.
          </p>
          <ul className="space-y-4">
            {CHECKLIST.map((line) => (
              <li key={line} className="flex items-center gap-3">
                <span className="material-symbols-outlined wellbeing-symbol--fill text-[var(--color-primary)]">
                  check_circle
                </span>
                <span className="text-base leading-[1.6] text-[var(--color-on-surface)]">{line}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-outline-variant)]/30 bg-[var(--color-surface-container-lowest)] p-4">
              <span className="material-symbols-outlined text-4xl text-[var(--color-tertiary)]">
                verified_user
              </span>
              <div>
                <p className="text-sm font-bold leading-tight tracking-[0.01em] text-[var(--color-on-surface)]">
                  Certified Trauma-Informed
                </p>
                <p className="text-xs text-[var(--color-outline)]">Yoga Alliance Continuing Education Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
