import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHb3yPDWWpNI5ApO6E26KpLyJ0qycd58r2cneqSmE28-d18rpL8rOhN8coYXl7oHecb1pYI-2fABuE4U6XTrim3t-JTnTeLj4nIQEudiDMgkGVUcCZ_FhNKeEt84hfQvDgBZBDOBzufrAwsWKwJOsghXr8mfnhwkPgTiIHg8RBQ2RZnB01AEtwnlqD2d9fvH2T1vGJLPkTvve-qMlxm1PX2ueePjcSAsbimyCE6QkSbSeZCBXn49GY2FNW1_4ulGZlZxJmLF_zFL5T";

export function YfmiHero() {
  return (
    <ScrollReveal
      className="mx-auto mb-12 max-w-7xl items-center px-6 md:px-12 lg:grid lg:grid-cols-2 lg:gap-12"
      delay={0.02}
    >
      <div className="text-center lg:text-left">
        <span className="yfmi-label-sm mb-6 inline-block rounded-full bg-[color:var(--yfmi-secondary-fixed)] px-4 py-1.5 text-[color:var(--yfmi-on-secondary-fixed)]">
          A DOCTOR-GUIDED JOURNEY
        </span>
        <h1 className="yfmi-headline-xl mb-6 leading-tight text-[color:var(--yfmi-on-background)]">
          Balance Your Cycle <span className="italic text-[color:var(--yfmi-primary)]">Naturally</span> with Yoga
        </h1>
        <p className="yfmi-body-lg mx-auto mb-10 max-w-xl text-[color:var(--yfmi-on-surface-variant)] lg:mx-0">
          Discover a gentle, evidence-based system designed to support menstrual health, hormonal harmony, and
          emotional resilience through the power of somatic movement.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          <Link
            className="yfmi-label-md flex items-center justify-center gap-2 rounded-full bg-[color:var(--yfmi-primary)] px-10 py-5 text-lg text-[color:var(--yfmi-on-primary)] shadow-lg shadow-[color:rgb(93_74_197/0.2)] transition-transform hover:-translate-y-0.5"
            href="#checkout"
          >
            Join The Program Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
      <div className="relative mt-12 lg:mt-0">
        <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:rgb(200_191_255/0.3)] opacity-60 blur-3xl" />
        <Image
          alt="Calm woman practicing gentle yoga in a sunlit lavender-themed studio"
          className="h-[500px] w-full rounded-[32px] object-cover shadow-2xl"
          height={500}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={HERO_IMG}
          width={800}
        />
      </div>
    </ScrollReveal>
  );
}
