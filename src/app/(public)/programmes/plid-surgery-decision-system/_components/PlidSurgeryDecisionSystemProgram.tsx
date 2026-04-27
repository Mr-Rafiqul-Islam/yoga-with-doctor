import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ROADMAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkiz0PoFlcOgwmfYIiWa4eORH0EnSNhDHB_H8sp79MTRLRZXKWGE4NcfWPm-TUJtz1ZXiRceOU-ZaO0rhRRk_wvb5g_GG3R7A24GSnMNksDkn5xXReZMzeAXQVw4sSjsB9rPi1gWl19XP33C1EMN3z57oBaNcEbp6nNib2PaiOpnoZWJOc4QGcFbBvQCyAcqVTsbOixal0xPGiNZAIozfDuI7rkhJuggttPOhdANVc-ZMNr66XG00BHlvtYfAvhhCFuzq2xfllilw";

export function PlidSurgeryDecisionSystemProgram() {
  return (
    <ScrollReveal className="mx-4 rounded-3xl bg-on-surface py-20 text-surface md:mx-8 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-primary-fixed-dim">
              THE SOLUTION
            </span>
            <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl">
              PLID Home Treatment System
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-surface-variant/70 md:text-base">
            A comprehensive, doctor-verified digital therapy program you can follow from your living
            room.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 transition-colors hover:bg-white/10 md:col-span-2 md:row-span-2 lg:p-10">
            <h3 className="font-headline text-2xl md:text-3xl font-bold">The Recovery Roadmap</h3>
            <p className="my-6 text-base md:text-lg leading-relaxed text-surface-variant/80">
              12 weeks of step-by-step guidance tailored to your pain level.
            </p>
            <Image
              alt="Recovery roadmap preview"
              className="h-40 md:h-48 w-full rounded-2xl object-cover opacity-90 shadow-lg"
              height={480}
              sizes="(max-width: 767px) 100vw, 40vw"
              src={ROADMAP_IMAGE}
              width={800}
            />
          </div>

          <div className="rounded-3xl border border-primary/25 bg-primary/20 p-6 md:p-8">
            <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">
              emergency
            </span>
            <h4 className="mt-4 text-lg md:text-xl font-bold">Pain SOS</h4>
            <p className="mt-2 text-sm text-surface-variant/75">
              Instant relief protocols for acute flare-ups.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <span className="material-symbols-outlined text-4xl text-tertiary-fixed">group</span>
            <h4 className="mt-4 text-lg md:text-xl font-bold">Direct Support</h4>
            <p className="mt-2 text-sm text-surface-variant/75">
              Q&amp;A guidance with Dr. Shah Alam (program dependent).
            </p>
          </div>

          <div className="flex items-center gap-6 rounded-3xl bg-secondary p-6 md:p-8 text-on-secondary-container md:col-span-2">
            <span className="material-symbols-outlined text-4xl md:text-5xl">inventory_2</span>
            <div>
              <h4 className="text-xl md:text-2xl font-bold">Equipment Guide</h4>
              <p className="mt-1 text-sm md:text-base opacity-80">
                Simple tools to maximize spinal decompression at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

