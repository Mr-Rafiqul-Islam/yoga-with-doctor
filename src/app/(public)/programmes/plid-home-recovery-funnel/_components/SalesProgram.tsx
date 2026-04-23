import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const ACCENT = {
  primaryA: "text-primary",
  primaryB: "text-primary-container",
} as const;

type AccentKey = keyof typeof ACCENT;

const PROGRAM_PILLARS = [
  {
    id: "core",
    num: "01",
    title: "Core Exercises",
    description:
      "নির্দিষ্ট থেরাপিউটিক ব্যায়ামের মাধ্যমে পেশি শক্তিশালী করা, মেরুদণ্ডের স্থিতিশীলতা বাড়ানো এবং ধীরে ধীরে ব্যথা কমাতে সাহায্য করা।",
    value: "৳২,৫৯৯ মূল্য",
    accent: "primaryA" as AccentKey,
    imageSrc:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=960&q=80",
    imageAlt: "থেরাপিউটিক কোর এক্সারসাইজ",
  },
  {
    id: "lifestyle",
    num: "02",
    title: "Posture Correction",
    description:
      "বসা, দাঁড়ানো, হাঁটা ও কাজ করার ভুল ভঙ্গি ঠিক করে মেরুদণ্ডের উপর অতিরিক্ত চাপ কমানো এবং ভবিষ্যৎ ব্যথা প্রতিরোধ করা।",
    value: "৳১,৮৯৯ মূল্য",
    accent: "primaryB" as AccentKey,
    imageSrc:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=960&q=80",
    imageAlt: "সঠিক বসা ও দৈনন্দিন ভঙ্গি",
  },
  {
    id: "diet",
    num: "03",
    title: "Lifestyle Modification",
    description:
      "দৈনন্দিন অভ্যাস যেমন কাজের ধরন, বিশ্রাম ও চলাফেরা পরিবর্তন করে শরীরকে দীর্ঘমেয়াদে সুস্থ রাখার উপযোগী জীবনধারা তৈরি করা।",
    value: "৳২,১৯৯ মূল্য",
    accent: "primaryA" as AccentKey,
    imageSrc:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=960&q=80",
    imageAlt: "সুস্থ খাবার ও পুষ্টি",
  },
  {
    id: "pain",
    num: "04",
    title: "Scientific Body Alignment",
    description:
      "শরীরের অ্যালাইনমেন্ট ঠিক রাখতে বিজ্ঞানভিত্তিক পদ্ধতি অনুসরণ করা, যাতে ডিস্ক ও মেরুদণ্ডে অপ্রয়োজনীয় চাপ না পড়ে।",
    value: "৳৩,৪৯৯ মূল্য",
    accent: "primaryB" as AccentKey,
    imageSrc:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=960&q=80",
    imageAlt: "ব্যথা উপশম ও যত্ন",
  },
  {
    id: "nutrition",
    num: "05",
    title: "Proper Nutrition",
    description:
      "হাড়, ডিস্ক ও মাংসপেশি পুনর্গঠনে সহায়ক পুষ্টিকর খাবার গ্রহণ, যা শরীরের প্রাকৃতিক রিকভারি প্রসেসকে দ্রুত করে।",
    value: "৳৩,৪৯৯ মূল্য",
    accent: "primaryB" as AccentKey,
    imageSrc:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=960&q=80",
    imageAlt: "ব্যথা উপশম ও যত্ন",
  },
] as const;

function ZigZagSpine({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 40 400"
      preserveAspectRatio="none"
    >
      <path
        d="M20 0 L20 88 L34 100 L34 188 L6 200 L6 288 L34 300 L34 388 L20 400"
        fill="none"
        stroke="url(#spineGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="nonScalingStroke"
      />
      <defs>
        <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="50%" stopColor="var(--color-primary-container)" />
          <stop offset="100%" stopColor="var(--color-primary-fixed-dim)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SalesProgram() {
  return (
    <ScrollReveal className="relative overflow-hidden bg-surface-container-low py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='18' fill='%23006b58'/%3E%3C/svg%3E\")",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-3 sm:px-6">
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Program pillars
          </p>
          <h3 className="mb-4 text-3xl md:text-4xl font-extrabold text-on-surface lg:text-5xl">
          ঘরোয়া পদ্ধতিতে PLID মুক্ত হওয়ার পূর্ণাঙ্গ রোডম্যাপ 
          </h3>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-on-surface/65">
          একটি একক সিস্টেমের মধ্যে চারটি মূল স্তম্ভকে একত্র করা হয়েছে—যেখানে প্রতিটি ধাপ আগের ধাপকে শক্তিশালী করে এবং ধাপে ধাপে দীর্ঘমেয়াদী সুস্থতার দিকে নিয়ে যায়। 
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-4 -translate-x-1/2 sm:w-5 md:w-7 lg:w-8">
            <ZigZagSpine className="h-full w-full" />
          </div>

          <ul className="relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-12">
            {PROGRAM_PILLARS.map((pillar, index) => {
              const isImageLeft = index % 2 === 0;

              const imageCol = (
                <div
                  className={`group/image relative flex min-h-[112px] flex-1 sm:min-h-[160px] lg:min-h-[200px] ${
                    isImageLeft ? "pr-1 sm:pr-2.5 md:pr-4 lg:pr-5" : "pl-1 sm:pl-2.5 md:pl-4 lg:pl-5"
                  }`}
                >
                  <div className="relative h-full min-h-[112px] w-full min-w-0 overflow-hidden rounded-lg sm:min-h-[160px] sm:rounded-xl lg:min-h-[200px] bg-white/70 shadow-md shadow-slate-900/5 ring-1 ring-slate-200/80 transition-all duration-500 ease-out group-hover/image:shadow-lg group-hover/image:shadow-primary/20 group-hover/image:ring-primary/35">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-container/20 opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />
                    <Image
                      fill
                      alt={pillar.imageAlt}
                      className="object-cover transition duration-700 ease-out will-change-transform group-hover/image:scale-[1.04]"
                      sizes="(max-width: 639px) 45vw, (max-width: 1023px) 40vw, 25vw"
                      src={pillar.imageSrc}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent opacity-50" />
                  </div>
                </div>
              );

              const cardCol = (
                <div
                  className={`group/card relative flex min-h-0 flex-1 ${
                    isImageLeft ? "pl-1 sm:pl-2.5 md:pl-4 lg:pl-5" : "pr-1 sm:pr-2.5 md:pr-4 lg:pr-5"
                  }`}
                >
                  <div className="relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200/90 bg-gradient-to-br from-white via-surface-container-low/40 to-surface-container/70 p-2.5 text-on-surface shadow-md ring-1 ring-white/80 transition duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-400/15 hover:ring-primary/15 sm:rounded-xl sm:p-4 lg:p-5">
                    <span className="pointer-events-none absolute -right-px -top-0.5 font-headline text-3xl font-extrabold tabular-nums text-primary/10 transition group-hover/card:text-primary/15 sm:text-5xl md:text-6xl">
                      {pillar.num}
                    </span>
                    <span
                      className={`relative mb-1 text-sm font-bold leading-tight tracking-tight sm:mb-2 sm:text-lg md:text-2xl ${ACCENT[pillar.accent]}`}
                    >
                      {pillar.title}
                    </span>
                    <p className="relative mb-2 flex-1 text-[11px] leading-snug text-on-surface/70 sm:mb-4 sm:text-xs sm:leading-relaxed md:text-sm lg:text-xl">
                      {pillar.description}
                    </p>
                    {/* <p className="relative mt-auto text-right text-[11px] font-bold tabular-nums text-primary sm:text-sm md:text-base">
                      {pillar.value}
                    </p> */}
                  </div>
                </div>
              );

              return (
                <li
                  key={pillar.id}
                  className="relative grid grid-cols-2 list-none items-stretch gap-0"
                >
                  {isImageLeft ? (
                    <>
                      {imageCol}
                      {cardCol}
                    </>
                  ) : (
                    <>
                      {cardCol}
                      {imageCol}
                    </>
                  )}

                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-6 min-h-6 min-w-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-container text-[10px] font-bold text-on-primary shadow-sm ring-2 ring-surface-container-low sm:h-8 sm:min-h-8 sm:min-w-8 sm:w-8 sm:text-[11px] sm:shadow-md md:h-9 md:min-h-9 md:min-w-9 md:w-9 md:text-xs md:ring-[3px]"
                  >
                    {pillar.num}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
