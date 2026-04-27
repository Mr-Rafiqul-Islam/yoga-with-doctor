import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKQsiHAyVvZjmddt2QUMsxcg1-fRGnUZgPt4NmLKah8y8dbvao2h4zV2mhT9LgFTfQAu_1dmp3cNo3lubC_9LAfocFKWmI3OBaS3sSJIzYuRSsRRMg53Yn1rM-BLDyybGv2_zHJf1VOWs8Tiwc1NFjz78DWyYJBV88qNoNjT27IsM4xLbkDu-ohIIfwwL_cT8bt9qGIoP9gbbFanuHQgs6ymgS9SKVE0kQ10PvhuEZscfYRQvsirD_k0ggL3r1n0o8m-Nqjpvuy8Y";

export function PlidSurgeryDecisionHero() {
  return (
    <ScrollReveal className="relative overflow-hidden bg-surface pb-20 pt-16 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="z-10">
          <span className="mb-6 inline-flex text-center lg:text-left items-center gap-2 rounded-full bg-tertiary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-on-tertiary-fixed">
            Medical-grade holistic recovery
          </span>
          <h1 className="mb-6 font-headline text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-on-surface xl:text-7xl">
            Heal Your Spine <span className="italic text-primary">Naturally</span>
          </h1>
          <p className="mb-10 max-w-xl text-base md:text-lg leading-relaxed text-on-surface-variant lg:text-xl">
            A physician-designed yoga protocol engineered for PLID and slip disc recovery. Reclaim your
            mobility without the risks of invasive surgery.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-bold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98] md:px-10 md:py-5 md:text-lg "
              href="#checkout"
            >
              Start Healing Today
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-outline-variant bg-surface-container-lowest px-8 py-4 text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-low md:px-10 md:py-5 md:text-lg"
              href="#science"
            >
              <span className="material-symbols-outlined">play_circle</span>
              Watch the Science
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute right-0 top-0 -z-10 h-[140%] w-[140%] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-bl from-primary-container/25 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl bg-surface-container-high shadow-2xl">
            <Image
              alt="Therapist guiding gentle spinal yoga movements"
              className="h-full w-full object-cover"
              height={1200}
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              src={HERO_IMAGE}
              width={1200}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-on-surface/20 transition-colors hover:bg-on-surface/10"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-lowest/90 shadow-2xl">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-surface-container-lowest p-5 shadow-xl md:block">
            <p className="text-3xl font-extrabold tabular-nums text-primary">94%</p>
            <p className="text-sm text-on-surface-variant">Surgery Avoidance Rate</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

