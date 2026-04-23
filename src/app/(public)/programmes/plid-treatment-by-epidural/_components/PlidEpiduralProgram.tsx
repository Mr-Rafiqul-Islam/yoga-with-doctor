import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { IMG } from "./epidural-assets";

export function PlidEpiduralProgram() {
  return (
    <ScrollReveal className="bg-surface py-24 md:py-32" id="program">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl font-bold">Inside the PLID Home Recovery System</h2>
          <p className="text-on-surface-variant">A comprehensive medical-grade protocol delivered digitally.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="group flex flex-col items-center gap-8 overflow-hidden rounded-xl bg-surface-container-low p-8 md:col-span-8 md:flex-row">
            <div className="flex-1 text-left">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
                Module 01
              </span>
              <h3 className="mb-4 text-3xl font-bold">The Kinetic Exercises</h3>
              <p className="mb-6 text-on-surface-variant">
                40+ clinical yoga sequences categorized by pain severity. From bed-bound to fully mobile.
              </p>
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-surface-container-lowest px-4 py-2 text-sm font-semibold shadow-sm">
                  $297 Value
                </span>
                <span className="font-bold text-primary">Included</span>
              </div>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface-container-lowest shadow-xl md:w-64">
              <Image
                alt="Gentle spinal stretch on a yoga mat"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                fill
                sizes="(min-width: 768px) 256px, 100vw"
                src={IMG.programYoga}
              />
            </div>
          </div>
          <div className="group flex flex-col justify-between rounded-xl bg-secondary-fixed p-8 md:col-span-4">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant">
                Module 02
              </span>
              <h3 className="mb-4 text-2xl font-bold">Lifestyle Mastery</h3>
              <p className="text-on-secondary-fixed-variant/80">
                How to sit, sleep, and move in your daily life to protect your healing discs.
              </p>
            </div>
            <div className="mt-8">
              <span className="inline-block rounded-full bg-surface-container-lowest px-4 py-2 text-sm font-semibold shadow-sm">
                $97 Value
              </span>
            </div>
          </div>
          <div className="group flex flex-col justify-between rounded-xl bg-tertiary-fixed p-8 md:col-span-4">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">
                Module 03
              </span>
              <h3 className="mb-4 text-2xl font-bold">The Anti-Inflammatory Diet</h3>
              <p className="text-on-tertiary-fixed-variant/80">
                Specific nutrition protocols to reduce systemic inflammation and speed up tissue repair.
              </p>
            </div>
            <div className="mt-8">
              <span className="inline-block rounded-full bg-surface-container-lowest px-4 py-2 text-sm font-semibold shadow-sm">
                $147 Value
              </span>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-8 overflow-hidden rounded-xl bg-surface-container-high p-8 md:col-span-8 md:flex-row">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface-container-lowest shadow-xl md:w-64">
              <Image
                alt="Supplements and fresh ginger on a table"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                fill
                sizes="(min-width: 768px) 256px, 100vw"
                src={IMG.programDiet}
              />
            </div>
            <div className="flex-1 text-left">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Module 04</span>
              <h3 className="mb-4 text-3xl font-bold">The SOS Pain Protocol</h3>
              <p className="mb-6 text-on-surface-variant">
                Emergency routines for when a flare-up happens. Immediate relief strategies without heavy drugs.
              </p>
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-surface-container-lowest px-4 py-2 text-sm font-semibold shadow-sm">
                  $197 Value
                </span>
                <span className="font-bold text-primary">Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
