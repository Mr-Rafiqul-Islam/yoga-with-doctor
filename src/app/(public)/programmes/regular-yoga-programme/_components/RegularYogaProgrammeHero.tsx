import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { IMG } from "./regular-yoga-programme-assets";

export function RegularYogaProgrammeHero() {
  return (
    <ScrollReveal className="relative overflow-hidden bg-surface pt-16 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="z-10">
          <div className="flex justify-center lg:justify-start">

          <span className="mb-6 inline-block rounded-full bg-secondary-fixed px-4 py-1 text-sm text-center lg:text-left font-medium text-on-secondary-fixed-variant">
            Medical Expertise meets Holistic Flow
          </span>
          </div>
          <h1 className="mb-8 font-headline text-4xl md:text-5xl font-bold leading-tight tracking-tight text-on-surface text-center lg:text-left xl:text-7xl">
            Heal Your Spine Naturally: The{" "}
            <span className="text-primary italic">Doctor-Led</span> Yoga System for PLID Recovery
          </h1>
          <p className="mb-10 text-center mx-auto lg:mx-0 lg:text-left max-w-xl text-base md:text-xl leading-relaxed text-on-surface-variant">
            Stop managing pain and start reversing the cause. A scientifically-backed, step-by-step home
            protocol designed by Dr. Shah Alam for lasting relief from Prolapsed Lumbar Intervertebral
            Disc.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
            <a
              className="flex items-center justify-center gap-2 rounded-xl bg-tertiary-container px-10 py-5 text-base md:text-lg font-bold text-on-tertiary-container shadow-lg transition-colors hover:bg-tertiary-container/80"
              href="#claim"
            >
              Start Healing Today
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <div className="flex items-center gap-3 px-4">
              <div className="-space-x-2 flex">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-surface-container-high">
                  <Image
                    alt=""
                    className="h-full w-full object-cover"
                    height={40}
                    src={IMG.avatar1}
                    width={40}
                  />
                </div>
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-surface-container-high">
                  <Image
                    alt=""
                    className="h-full w-full object-cover"
                    height={40}
                    src={IMG.avatar2}
                    width={40}
                  />
                </div>
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-surface-container-high">
                  <Image
                    alt=""
                    className="h-full w-full object-cover"
                    height={40}
                    src={IMG.avatar3}
                    width={40}
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-on-surface-variant">5,000+ Recovered</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-1/4 transform rounded-full bg-primary-container/10 blur-3xl" />
          <div className="overflow-hidden rounded-xl border-8 border-surface-container-high shadow-2xl">
            <Image
              alt="Professional portrait of Dr. Shah Alam in clinical attire"
              className="aspect-[4/5] w-full object-cover"
              height={1000}
              priority
              src={IMG.heroDoctor}
              width={800}
            />
          </div>
          <div className="absolute -bottom-8 -left-8 max-w-xs rounded-lg bg-surface-container-lowest lg:p-6 p-4 shadow-xl">
            <div className="mb-2 flex items-center gap-2 text-tertiary">
              <span className="material-symbols-outlined material-symbols-outlined--fill">verified</span>
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider">Doctor Verified</span>
            </div>
            <p className="lg:text-sm text-xs italic text-on-surface-variant">
              &ldquo;Surgery should be the last resort. Your body has an incredible capacity to heal
              when guided by science.&rdquo;
            </p>
            <p className="mt-3 text-sm font-bold text-on-surface">— Dr. Shah Alam</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
