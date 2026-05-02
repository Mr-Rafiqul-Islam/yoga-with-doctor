import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnoLMsIdtc15LCDVLOPJLCNMAdQkV6_WYHRovSoIHUJtUoTdJKeG2GVc3xpb56YdNeDxLDxb7AEDjbJsrEQM3Al4eQ74hiT2h4SELKXNrjQ-aHuqLk66g68KFC0KHiuhkR8lkWyJ--MT70KiJld_r8Vn87er6Bv6PmamzlGR2wcJmWCRhA2nyGU6oCXIF61-93veLdK1AeJodAqUOM75P9z2MtBo4XXp_RZ3qT4nMqTOqSXy9XmOzFNPRQbuIbdJ8B2ConAeWMum70";

export function YfbpHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2 md:gap-6">
        <div className="relative z-10 space-y-6">
          <span className="inline-block rounded-full bg-[var(--yfbp-secondary-fixed)] px-4 py-1 text-[var(--yfbp-on-secondary-fixed)] yfbp-text-label-bold yfbp-text-label-md">
            #1 Doctor-Recommended System
          </span>
          <h1 className="leading-tight text-slate-900 yfbp-text-display-xl">
            Relieve Back Pain Naturally{" "}
            <span className="text-[var(--yfbp-primary)]">Without Medicine</span> or Surgery
          </h1>
          <p className="max-w-lg text-[var(--yfbp-on-surface-variant)] yfbp-text-body-lg">
            A scientifically-backed, doctor-guided yoga system designed specifically for safe and
            effective pain relief in just 15 minutes a day.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a
              href="#checkout"
              className="rounded-2xl bg-orange-500 px-20 py-4 text-center text-white shadow-[0_4px_0_rgb(204,124,0)] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_rgb(204,124,0)] active:scale-95 yfbp-text-headline-md"
            >
              Join Now
            </a>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--yfbp-error)]/20 bg-[var(--yfbp-error-container)] px-4 py-2 text-[var(--yfbp-on-error-container)]">
              <span
                className="material-symbols-outlined text-[var(--yfbp-error)] yfbp-icon-fill shrink-0"
                aria-hidden
              >
                warning
              </span>
              <span className="yfbp-text-label-bold yfbp-text-label-md uppercase tracking-wide">
                Limited Seats
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-full bg-[color:rgba(0,110,28,0.1)] blur-3xl"
            aria-hidden
          />
          <Image
            src={HERO_IMG}
            alt="Our Program Director — professional physician in clinical setting"
            width={960}
            height={1200}
            className="relative z-10 aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute -left-6 bottom-6 z-20 flex items-center gap-4 rounded-2xl border border-[var(--yfbp-surface-container-high)] bg-white p-6 shadow-xl max-sm:left-0 max-sm:right-0 max-sm:mx-auto max-sm:w-fit">
            <div className="rounded-xl bg-[var(--yfbp-secondary-container)] p-3">
              <span className="material-symbols-outlined text-white" aria-hidden>
                verified
              </span>
            </div>
            <div>
              <p className="text-slate-900 yfbp-text-headline-md">10,000+</p>
              <p className="text-[var(--yfbp-on-surface-variant)] yfbp-text-label-md">
                Active Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
