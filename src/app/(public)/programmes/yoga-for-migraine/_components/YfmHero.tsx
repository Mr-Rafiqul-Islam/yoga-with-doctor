import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAndSpt7mBR6trvb3wR3Zd0r-yvokq9ckNJWt5qkDIAf1Jznr8tZ5yVbgWBs94zrfgk27_EyBo7DQq8dT8uehb_-jUxEUXrzG9JIHf8TUp3ROgDqxu3eDuXJqu59CvtKE3cb-YvGIIs87M2Z-WqF86fR3q-jVpOSmMOufvvhSEZMo7zpAIYKSjhy1xBezzEc2mEBGNKFCDLD7krTqMbkXQev3uirWbzWplffu-kGlbxLnuliMve25uxUb3UfVCkkOqr99F-m-uQomEM";

export function YfmHero() {
  return (
    <ScrollReveal className="relative overflow-hidden pt-12 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 yfm-text-label-caps bg-[color:var(--yfm-tertiary-fixed)] text-[color:var(--yfm-on-tertiary-fixed)]">
            <span className="material-symbols-outlined text-base" aria-hidden>
              warning
            </span>
            LIMITED SEATS: 12 REMAINING
          </div>
          <h1 className="yfm-text-h1 mb-6 text-[color:var(--yfm-primary)]">
            Naturally Reduce Migraine Pain in 30 Days Without Medication
          </h1>
          <p className="yfm-text-body-lg mb-8 max-w-lg text-[color:var(--yfm-secondary)]">
            Doctor-guided yoga system targeting the root cause of migraine using nervous system
            regulation and mindful movement.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-[color:var(--yfm-tertiary)] px-8 py-4 text-center text-base font-bold text-[color:var(--yfm-on-tertiary)] shadow-lg transition-transform hover:scale-105"
              href="#curriculum"
            >
              Start Your Healing Journey
            </a>
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-400" />
              </div>
              <span className="text-xs font-medium text-[color:var(--yfm-secondary)]">
                Joined by 2,400+ Patients
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="yfm-breath-guider absolute -right-20 -top-20 size-96 rounded-full bg-[color:rgba(0,122,126,0.12)] blur-3xl"
          />
          <div className="relative z-10 overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
            <Image
              src={HERO_IMG}
              alt="Dr. Shah Alam demonstrating a calming yoga pose for migraine relief"
              width={960}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="yfm-glass-card absolute bottom-4 left-4 right-4 rounded-xl p-4">
              <p className="text-sm font-semibold text-[color:var(--yfm-primary)]">
                Dr. Shah Alam
              </p>
              <p className="text-xs text-[color:var(--yfm-secondary)]">
                Founder of the Migraine Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
