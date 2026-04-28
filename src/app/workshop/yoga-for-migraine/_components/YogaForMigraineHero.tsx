import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForMigraineHero() {
  return (
    <ScrollReveal className="hero-gradient overflow-hidden py-20" as="section">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-12 lg:px-12">
        <div>
          <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            EXCLUSIVE FREE WORKSHOP
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-on-surface md:text-5xl lg:text-6xl">
            Relieve Migraine Naturally Without Medication Dependency
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-secondary">
            Join our transformative 2-day live workshop to discover clinically-backed yoga protocols
            that target the neurological root of migraine pain.
          </p>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-full bg-[#e86c6e] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Join Free Workshop
            </a>
            <div className="flex flex-col">
              <span className="font-bold text-on-surface">4.9/5 Rating</span>
              <span className="text-sm text-secondary">from 2,400+ participants</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-primary/5 blur-3xl" />
          <Image
            className="h-auto w-full rounded-2xl border-4 border-white shadow-2xl"
            width={1400}
            height={933}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Calm professional female instructor in yoga pose"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAywyAEF9ljaHD9hUHggNlptQqxz8oqxVs5lffFzhZefB3Qf4x5QDLVXWVcDfAd8bgi_---cid0jW2OgTDZp3G9QtrhZKppldGe9tj-O8Nur85G_XGJKdS-Nkx-SsYB9OAdgUfocwPrSQfrpArIFm_vRMTraT9L95Vd2tw3NvL7dzsk_IquSf_Du8GnWRSqxcK5CdQDwPz-PWhq31zJw59Qd140KSbZVPSnRm4j4TmkTNepaYQ4jnJS9FuV3Yzmzae1mvJAseaQQ2tF"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

