import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { IMG } from "./regular-yoga-programme-assets";

export function RegularYogaProgrammeVideo() {
  return (
    <ScrollReveal className="bg-surface-container-low md:py-24 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="mb-12 font-headline text-3xl font-bold md:text-4xl">
          Watch: The Science Behind The Healing Flow
        </h2>
        <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border-4 border-surface-container-lowest bg-emerald-100/30 shadow-2xl">
          <Image
            alt="Peaceful yoga studio with a yoga mat on a wooden floor"
            className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            height={1080}
            src={IMG.videoStudio}
            width={1920}
            sizes="(min-width: 1024px) 896px, 100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform duration-300 group-hover:scale-110"
              type="button"
            >
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
            </button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-medium text-white">
            <span className="rounded-full bg-on-background/40 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-md">
              Medical Briefing
            </span>
            <span className="rounded-full bg-on-background/40 px-3 py-1 text-xs backdrop-blur-md">
              12:45 min
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
