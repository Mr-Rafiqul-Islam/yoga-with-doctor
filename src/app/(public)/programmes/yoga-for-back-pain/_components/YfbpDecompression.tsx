import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const RELIEF_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBLR5AZO6bm8kx_0wFd2bd2UahFrGh8Pe_8r78k8gq6StE1kyshrF7QnHIjxvQQ7r0ZcJYoVrFSA57jdpeDy2VGi1m6DcKjJZ4HOWhvnQ4dIqwkFewBlRHnUa1ppzuf1AjRaEHcjuICdf6cYSQZeC8mjrxfTuU55qm25h4-nBg89LBtVq7i6o-6RmPEeRxiNeB-A0lW8RXfiSdBVPQLSoRIPDfi_cJNqTPVL-66LknTx_rAPUIpv8BZWnN_LJB3n1-HoNpz4wf5nyYC";

const BENEFITS = [
  {
    title: "Restored Mobility",
    description: 'Move freely without that "catch" in your lower spine.',
  },
  {
    title: "Optimal Posture",
    description: "Stand taller and more confident with a naturally aligned spine.",
  },
  {
    title: "Mental Clarity",
    description: "Eliminate the brain fog caused by chronic physical stress.",
  },
] as const;

export function YfbpDecompression() {
  return (
    <ScrollReveal className="overflow-hidden bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src={RELIEF_IMG}
            alt="Calm athlete performing gentle relief stretches in a bright studio"
            width={800}
            height={600}
            className="rounded-3xl shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 space-y-6 md:order-2">
          <h2 className="text-slate-900 yfbp-text-display-xl">
            Experience Immediate <span className="text-[var(--yfbp-primary)]">Decompression</span>
          </h2>
          <ul className="space-y-6">
            {BENEFITS.map(({ title, description }) => (
              <li key={title} className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--yfbp-primary-container)]">
                  <span className="material-symbols-outlined text-sm text-white" aria-hidden>
                    check
                  </span>
                </div>
                <div>
                  <h4 className="text-slate-900 yfbp-text-headline-md">{title}</h4>
                  <p className="text-[var(--yfbp-on-surface-variant)] yfbp-text-body-md">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
