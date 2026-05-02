import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    icon: "close" as const,
    iconWrap: "bg-[color:rgba(186,26,26,0.10)] text-[color:var(--yfm-error)]",
    title: "Before: The Cycle of Pain",
    body: 'Dark rooms, ice packs, and constant "wait and see" anxiety.',
  },
  {
    icon: "check" as const,
    iconWrap: "bg-[color:rgba(0,95,98,0.10)] text-[color:var(--yfm-primary)]",
    title: "After: Total Freedom",
    body: "Waking up with clarity, enjoying sunshine, and living without fear.",
  },
];

const IMAGES = [
  {
    src:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrozsQJuhu0bk-DgwbMtaZtvmaa3P2clLyDSZEg4CFDSeAB8nbTEYdIcvwtgdpBQxYS_8TSppkTg-RUp9HAIpzF8mOZBSoQcki534eZYzTdfbno20X0vAk3HADsp2SWRtoWJCvad3hkfvvaDHtharN0M7aOaRpHZE0-zLQ6yKnM3jYeMPG8MllSrEBlExXTi07wqpfxCFPUlQerFx15Sq7-FgHbrNAKLM-IchZtXgc4wHC8x5srbFIbV4ohgAhBFKCfQKUlR__Kmg",
    alt: "Person resting during a migraine episode in a quiet space",
    className:
      "rounded-2xl border border-slate-100 shadow-lg h-auto w-full object-cover",
  },
  {
    src:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtIgs0tvGGcb6FcDqv04hTX8GryHiJ1y0f2g305tTDFkQbSCtA_sDUR_f43YzZU_V4hFvj09KVIjAGGBVN9XpK4CmlEBsDvrieqhDmL5HtRAQ9Unzm2s0IHhqmBGqkItO-NwHYItofO5zla-kZunMFVd5bvgwczj1roPzReFY76HMUhpKQj1zIEzU2Ue_qAwbnQqyODcwhI2c5WUuhCMmP4KcjvQf6nZWEZw2lgEjC2ybmkWR00-lq3iwTETGZNf0sdjAU8q7RhQ4W",
    alt: "Person outdoors relaxed and energized in natural light",
    className:
      "mt-8 rounded-2xl border border-teal-100 shadow-lg h-auto w-full object-cover md:mt-8",
  },
];

export function YfmTransformation() {
  return (
    <ScrollReveal className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="yfm-text-h2 mb-8 text-[color:var(--yfm-primary)]">
              A New Way to Live
            </h2>
            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={step.title}>
                  <div className="flex gap-4">
                    <div className={`shrink-0 rounded-full p-2 ${step.iconWrap}`}>
                      <span className="material-symbols-outlined" aria-hidden>
                        {step.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{step.title}</p>
                      <p className="text-sm text-[color:var(--yfm-secondary)]">{step.body}</p>
                    </div>
                  </div>
                  {i === 0 ? <div className="ml-5 h-12 w-px bg-slate-200" aria-hidden /> : null}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {IMAGES.map((img) => (
              <Image
                key={img.src.slice(-48)}
                src={img.src}
                alt={img.alt}
                width={480}
                height={360}
                className={img.className}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
