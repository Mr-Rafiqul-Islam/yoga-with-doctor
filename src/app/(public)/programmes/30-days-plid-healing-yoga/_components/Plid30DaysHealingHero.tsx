import Image from "next/image";
import { funnelSectionClass, type FunnelSectionVariant } from "./funnelSectionVariant";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type Plid30DaysHealingHeroProps = {
  variant?: FunnelSectionVariant;
};

export function Plid30DaysHealingHero({ variant = "auto" }: Plid30DaysHealingHeroProps) {
  return (
    <ScrollReveal
      className={`relative overflow-hidden pb-20 pt-16 lg:pt-32 ${funnelSectionClass(variant)}`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-container/20 px-4 py-1.5 text-primary">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Scientific Restoration
            </span>
          </div>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold leading-[1.1] text-on-surface lg:text-7xl">
            বিনা অপারেশনে পিএলআইডি (PLID) মুক্ত জীবনের{" "}
            <span className="text-primary">বৈজ্ঞানিক সমাধান</span>
          </h1>
          <p className="mb-10 max-w-xl text-base lg:text-xl leading-relaxed text-on-surface/80">
            সব চেষ্টা করেও কি PLID-এর ব্যথা কমছে না? হয়তো আপনি এখনো সঠিক পদ্ধতিটা জানেন না। অপারেশন ছাড়াই সুস্থ জীবনে ফিরতে আজই জয়েন করুন আমাদের ফ্রি ওয়েবিনারে।
          </p>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-primary lg:px-10 px-4 py-3 lg:py-4 text-center lg:text-lg text-base font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              href="#offer"
            >
              Start Healing Today
            </a>
            <div className="flex items-center gap-3 rounded-full bg-surface-container-lowest lg:px-6 px-4 lg:py-4 py-3 shadow-sm">
              <div className="flex -space-x-2">
                <Image
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  width={32}
                  height={32}
                  alt=""
                  sizes="32px"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm5bq_YNvyf1SKqnljft780uTWQpQSGwyZQpfD-npkByia1UFGD6bUCUW6qKQ32xnzrpcKBntOx_ckJRLz31mGKkmPNOvg4bwf39YqkuAgRYiganeGcbgXOeXBnLa01n60P5oKkAgjVuBDDHqulJwRXy2unFG93HwLzlH-gUk3P0AFvlT_xD4Elm4uqCVjMR1EOumYUWuLdQl-pKIatSVl8ipUflOtwyfg1PD3bB0YclizjJD45gmULdORgCaFFsa50jlAyMIvomc"
                />
                <Image
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  width={32}
                  height={32}
                  alt=""
                  sizes="32px"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5gl_CUXKqNwnEp6OUXgOk24_WFUVmXsUyi8KgluCapFFUHVZXSIh9AUxTjjPaE4WDoAQT9xg_mdi_DVwY4aL2rpM5NemHqGitRMjJ8WQDO-IK5r2R2pk--eCbYUEg0GbssOavZrkqAdM0b29wcFn8WS3ZBhJM2y8mEP0UiAAu5Iqlspk3U2pnv7PMOgiqKAtS0l5iPglv5x-IVyaOcwYDqUEpqCUbV77zIOhWowaRtGgg_bIjyFP6Pw4ehWsfIoXZl48Sif4Z4ww"
                />
              </div>
              <span className="plid-text-on-elevated text-sm font-medium">
                5000+ Success Stories
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary-container/20 to-transparent blur-3xl"></div>
          <Image
            className="relative z-10 h-auto w-full rounded-3xl object-cover shadow-2xl"
            width={1600}
            height={1066}
            alt="Dr. Shah Alam"
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/Dr. Shah Alam-3.jpeg"
          />
          <div className="absolute -bottom-6 -left-6 z-20 flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-2 xl:p-6 shadow-xl">
            <div className="rounded-xl bg-secondary p-1.5 xl:p-3 text-on-primary">
              <span
                className="material-symbols-outlined !text-base xl:!text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emergency
              </span>
            </div>
            <div>
              <div className="plid-text-on-elevated text-sm xl:text-base font-bold">Stop The Pain</div>
              <div className="plid-text-on-elevated-muted text-xs xl:text-sm">Scientific Protocol</div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
