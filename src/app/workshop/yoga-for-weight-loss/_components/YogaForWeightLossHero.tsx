import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATARS = [
  {
    id: "a1",
    alt: "Portrait of smiling woman in activewear",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk-TuddP__p_OGwW_WB2bCozGX6gUCgeDxWMMNkiyDC8unIkXieCsRnK3HwJkbZtD2fYZRdtla1OdqVAQ2lARVc0UazODnAV4f547GOwNpd3WP1LFVASZlR2e820uZG5hsr-AqR3uoUVDFG43nbW7_mZhs46bNi3m0SC8lAohWLJWLCf2_IvuyO5zUwZXJqa6GfhNrO48oRWP4aHKYrA296-8UxwDZEoVrc9bkeoV3YIyrHS_yfNAHH1nBzJAtYyUlDFoAZFhjsG1l",
  },
  {
    id: "a2",
    alt: "Portrait of fit middle aged man",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSefEbAX4I6rDmvsApXvhQ0HdiIqQmSaycAgZFGB5_ehkkH_B21m3aWLBcwqA6XhbNJ1-pH9WAYUy-ToXpZWTdFqOcWQ7KL32s-KnJAUs-K5DI_29YkcitG3rjFi6wlZEmnBpQpV8gT8CcKLvRxPKeEWYLsTg4FHNVp9rNrVQlM2Wr76VQ41-JHahcdLFBbXHpvJDIUVNvkykBkWWIzyc0OSnbdIjQzt2yHPQva0xprAFN_B51qO1BJw3v59yIwJLSTWjBF_vNiSsI",
  },
  {
    id: "a3",
    alt: "Portrait of happy yoga practitioner",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TDnJTUkHbFihYKw4OI5MdeX9N5D7qVrgrQ2Wjq9PW9Cy96IB9vzWU-ozOl6YZmjuLszx6SgilNrSPPFdptqaFP0MoiWjJWKXCVoG4AHTEd7RTMj_CLzENjKz6CB-mFCi6iFgOHp-DUogKlY7K8lIw4TVRzkN6epfe0hAmCmOSzQCLzQ20u4m-Fp9rD0FOQB3wh-TZI-5CQLXKp1NXe9LcL122WrsrQdLxE37yNkcuDaW0H-SrcT9wgVGA1LTdzU2x86h7S-WPw8z",
  },
] as const;

export function YogaForWeightLossHero() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-12"
      as="section"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 py-8 md:grid-cols-2 md:py-12">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-primary-rgb)/0.1)] px-4 py-2 text-[13px] font-semibold text-[var(--color-primary)]">
            <span className="material-symbols-outlined material-symbols-outlined--fill text-[18px]">
              verified
            </span>
            <span>94% Success Rate in Metabolic Reset</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-on-background)] md:text-5xl lg:text-6xl">
            Lose Weight Naturally Without Extreme{" "}
            <span className="text-[var(--color-secondary)]">Diets or Gym</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            Experience the YogaFlow method: A 90-minute live workshop to kickstart your metabolism and
            burn fat through mindful, high-intensity yoga flows.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-secondary-container)] px-10 py-5 text-center text-base font-bold text-[var(--color-on-secondary-fixed)] shadow-lg transition-transform duration-200 active:scale-[0.98]"
            >
              Join Free Workshop
            </a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {AVATARS.map((a) => (
                  <Image
                    key={a.id}
                    alt={a.alt}
                    src={a.src}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--color-on-background)]">
                +12k joined this month
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[rgb(var(--color-primary-rgb)/0.05)] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[rgb(148_74_0/0.06)] blur-3xl" />

          <Image
            alt="Woman practicing yoga pose"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASD8wVoBwfcZXa9PryyRX2ZGx7Gi-1SdoZM-dRdSzbxBlTFK0d7fhkbMgY5Ne2l3Q_NdHd2UTX7jx3vEYruUICV7cJ1C3dXMpk5ROMOxDwgsX8GvY-o13otLSLYjCwq09PxVKaZi4Xj1ywY8K-Ln8qbklUngoG2y7Oei646ijEpT_KNRVo-U-ihkBoTMPHiPCSnza6PMr4XWRLiacljx0ZsPHgz0MpriMuY8ub36zbPNgctcrHG4NdzbUxDtbjfccrc7aXWWfAc2JW"
            width={1200}
            height={1500}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative z-10 aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 z-20 flex items-center gap-4 rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]">
              <span className="material-symbols-outlined material-symbols-outlined--fill text-white">
                trending_down
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--color-on-surface-variant)]">
                Average Loss
              </p>
              <p className="text-2xl font-semibold text-[var(--color-primary)]">-4.2kg / Month</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

