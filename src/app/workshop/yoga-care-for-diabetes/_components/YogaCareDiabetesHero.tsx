import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATARS = [
  {
    id: "a1",
    alt: "Participant portrait",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk-TuddP__p_OGwW_WB2bCozGX6gUCgeDxWMMNkiyDC8unIkXieCsRnK3HwJkbZtD2fYZRdtla1OdqVAQ2lARVc0UazODnAV4f547GOwNpd3WP1LFVASZlR2e820uZG5hsr-AqR3uoUVDFG43nbW7_mZhs46bNi3m0SC8lAohWLJWLCf2_IvuyO5zUwZXJqa6GfhNrO48oRWP4aHKYrA296-8UxwDZEoVrc9bkeoV3YIyrHS_yfNAHH1nBzJAtYyUlDFoAZFhjsG1l",
  },
  {
    id: "a2",
    alt: "Participant portrait",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSefEbAX4I6rDmvsApXvhQ0HdiIqQmSaycAgZFGB5_ehkkH_B21m3aWLBcwqA6XhbNJ1-pH9WAYUy-ToXpZWTdFqOcWQ7KL32s-KnJAUs-K5DI_29YkcitG3rjFi6wlZEmnBpQpV8gT8CcKLvRxPKeEWYLsTg4FHNVp9rNrVQlM2Wr76VQ41-JHahcdLFBbXHpvJDIUVNvkykBkWWIzyc0OSnbdIjQzt2yHPQva0xprAFN_B51qO1BJw3v59yIwJLSTWjBF_vNiSsI",
  },
  {
    id: "a3",
    alt: "Participant portrait",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TDnJTUkHbFihYKw4OI5MdeX9N5D7qVrgrQ2Wjq9PW9Cy96IB9vzWU-ozOl6YZmjuLszx6SgilNrSPPFdptqaFP0MoiWjJWKXCVoG4AHTEd7RTMj_CLzENjKz6CB-mFCi6iFgOHp-DUogKlY7K8lIw4TVRzkN6epfe0hAmCmOSzQCLzQ20u4m-Fp9rD0FOQB3wh-TZI-5CQLXKp1NXe9LcL122WrsrQdLxE37yNkcuDaW0H-SrcT9wgVGA1LTdzU2x86h7S-WPw8z",
  },
] as const;

export function YogaCareDiabetesHero() {
  return (
    <ScrollReveal className="hero-gradient overflow-hidden px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-primary-rgb)/0.10)] px-4 py-2 text-[12px] font-semibold tracking-wide text-[var(--color-primary)]">
            FREE LIVE WORKSHOP
          </span>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--color-on-surface)] md:text-5xl lg:text-6xl">
            Support Healthy Blood Sugar Naturally With{" "}
            <span className="text-[var(--color-primary-container)]">Yoga Care</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            A doctor-led, evidence-informed session from Yoga With Doctor to reduce stress load,
            improve insulin sensitivity habits, and feel steady energy again—without extreme diets.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-tertiary-container)] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[rgb(232_108_110/0.25)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Join Free Workshop
            </a>

            <div className="flex items-center gap-3 px-1">
              <span className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary-container)]">
                verified
              </span>
              <span className="text-sm font-semibold leading-tight text-[var(--color-secondary)]">
                Join 15,000+ <br />
                participants
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 scale-105 rounded-2xl bg-[rgb(var(--color-primary-container-rgb,0_168_107)/0.05)]" />
          <Image
            alt="Professional yoga therapist"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUcEPGK1RHzaaZGW8OLtK3vOvzD1UTxXHnCPPho4P2JNf6StfaQQWFdlFdQzIjh4HgRMYtiAFnckgk92D8q5u83h0DuevGvz_xgvw0kzRb4AyDTrLoW59BTpOS6VEfFGiMttZaDk_sse89vihZAFAG5935cJw9BqrRz2h5-vZwuTYRjGsNxB8GyY2CIP-qf05f_8Cns0TOVf6fsvA15Y1ftHykL-riATcNPm9Sj36llJYBxIgnBlMx_ZuBwLSPts64ue6hoag-uzS6"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="card-shadow relative z-10 h-[480px] w-full rounded-2xl object-cover"
          />

          <div className="pointer-events-none absolute -bottom-5 left-6 z-20 hidden items-center gap-3 rounded-full bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:flex">
            <div className="flex -space-x-3">
              {AVATARS.map((a) => (
                <Image
                  key={a.id}
                  alt={a.alt}
                  src={a.src}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-[var(--color-on-background)]">
              15k+ joined this year
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

