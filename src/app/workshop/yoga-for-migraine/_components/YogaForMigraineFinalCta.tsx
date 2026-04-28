import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForMigraineFinalCta() {
  return (
    <ScrollReveal className="hero-gradient py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
        <h2 className="mb-6 text-4xl font-bold leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-6xl">
          Stop Managing Pain. Start Living Life.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-secondary">
          Take the first step toward a medication-free future. Our next live workshop starts soon and
          seats are filling up.
        </p>
        <a
          href="#register"
          className="inline-flex items-center justify-center rounded-full bg-primary-container px-12 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Join Free Workshop Today
        </a>
      </div>
    </ScrollReveal>
  );
}

