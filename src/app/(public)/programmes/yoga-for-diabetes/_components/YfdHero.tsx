import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATAR_A =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6IjWxzxPAtfIuvbT7WUpSUFEk9MTfZ8nV6SnAG_gkVnClxXzB22CElUEBq_r_JByHOYc7GgWMUWPjh5FY4I1DNEAOT_f5hYfXRO3k_rnoi72pCj6yaZevc3LHzqedXpExyeN2wRBD90D9nLem8Y2TCNXtU3iZuxl6WvGuqH4GT1UUdwdja45qdeBRV2qJZuV-aOCnaupGT9RTkYxxe6Tr16k7LE750K4GRx8QWiundeIspuUYFsuXfJD9xxo9gNy_WoqsymBY4Gvu";
const AVATAR_B =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBydSBAHaqraO54DZDk2_40o8U6zBlbCayujWCIp2ch6sR4pBW3XNursZs5uYxAgwo6pmEv1t59Kg4dxhbLvDyL6hUPoYv4Q7hT0_RioKWSfh1sxn4J29Ek_so6bLzvDaRQCOjeWjDtqp6hr5zpM2Ze4OR_Nxp7OSlXYaG71aDDoiVA80A3JddnB23Ckjb05riFohMeD7fNgSdPQ4UHL22xjHboqK__By1Ens69lBjr-fUBIyXsxW_GQtj1N6NBxDlQg1qym6O9SCvb";
const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpDDDkVYML07cmKWRhRF8LfI_W4IFJXvTFFWkqZ_Ye8Qn1HdSBWvlIXbmXDGRA5laEHjmn7RIrGx-v58SGx_VWbCe1_bkzZBmFEdLac1lzhmOh2tg3CwizzjWtIDBDkSFGBF__LTPyew2kbtUKVxGpI9ecFBu6J4iN_O1p8sAQKjTw6fbLl2LdFszyT_dRiPiySY3TDK6oapnVAuMm5WLgcPY2aX4ys2X7jcTh2QEGERlubwLjGcF9TaeLaXTtD3E4Jwk-ptWNl8ZY";

const AVATARS = [
  { src: AVATAR_A, alt: "Professional portrait of a senior man smiling with confidence" },
  { src: AVATAR_B, alt: "Portrait of a woman showing vibrant health and energy" },
];

export function YfdHero() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[color:var(--yfd-surface)] px-5 pb-20 pt-10 md:pt-16"
      delay={0}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="z-10">
          <span className="yfd-text-label-sm mb-6 inline-block animate-pulse rounded-full bg-[color:var(--yfd-secondary-container)] px-4 py-1 text-[color:var(--yfd-on-secondary-container)] sm:mb-6">
            ⚠️ Limited Seats: 12 Spots Remaining
          </span>
          <h1 className="yfd-text-headline-xl mb-6 leading-tight text-[color:var(--yfd-primary)]">
            Control Your Blood Sugar <span className="italic text-[color:var(--yfd-secondary)]">Naturally</span>{" "}
            with Yoga in 30 Days
          </h1>
          <p className="yfd-text-body-lg mb-10 max-w-xl text-[color:var(--yfd-on-surface-variant)]">
            Stop living in fear of spikes. Our medically-backed clinical yoga program helps you reclaim metabolic
            flexibility and energy without more pills.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="yfd-text-label-sm rounded-lg bg-[color:var(--yfd-primary)] px-8 py-4 text-center text-[color:var(--yfd-on-primary)] shadow-lg transition-colors hover:bg-[color:var(--yfd-primary-container)]"
              href="#pricing"
            >
              START YOUR TRANSFORMATION NOW
            </a>
            <div className="flex items-center gap-3 py-2">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <Image
                    key={a.src}
                    src={a.src}
                    alt={a.alt}
                    width={32}
                    height={32}
                    className="size-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-[color:var(--yfd-on-surface-variant)]">Join 5,000+ success stories</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -rotate-3 scale-105 rounded-3xl bg-[color:var(--yfd-primary)] opacity-[0.05]"
          />
          <Image
            src={HERO_IMG}
            alt="Professional medical doctor in a white coat with stethoscope in a bright clinic"
            width={900}
            height={500}
            className="relative z-10 h-[min(500px,70vh)] w-full rounded-3xl border-4 border-white object-cover shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute -bottom-6 -left-6 z-20 flex items-center gap-4 rounded-2xl bg-white p-6 shadow-xl max-sm:relative sm:max-w-[calc(100%-1.5rem)]">
            <span className="yfd-icon-fill material-symbols-outlined text-4xl text-[color:var(--yfd-secondary)]">
              verified_user
            </span>
            <div>
              <p className="font-bold text-[color:var(--yfd-primary)]">Dr. Sarah Chen</p>
              <p className="text-sm text-[color:var(--yfd-on-surface-variant)]">Chief Medical Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
