import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AUTHORITY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCud0oLXQaypz8Q22k1vjACvAurMTxlk9mpn6kRuJPaUKiGe75TTxWsuuUrZdkwJuTTiSZLwh5zucrrvVyGdJItxaCwyuY26iCQ9qkFLBou51e0JioJ1SJIj_9Ve2zjTWVsiAJWsKbLeeyY6AXySdhx3HyQVHIHsRTo2MtRuLBDV7l6fm9rcQ_-4ojIXFOzNIlkugRv9GvIvubjUkUrViWZUoK7AyWmz3nLO2fVU1pxW5QIevnpVErw4ssZCUBDNiM1PdlBQa1OLPQS";

export function YogaForMenstrualIrregularitiesAuthority() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-high)] pb-10 pt-32" as="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-white mi-soft-shadow">
            <Image
              src={AUTHORITY_IMAGE}
              alt="Professional portrait of a female yoga therapist with a warm, kind smile wearing a soft lavender top"
              width={256}
              height={256}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="mb-2 text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
              Meet Dr. Sarah Chen
            </h2>
            <p className="mb-4 text-base font-semibold text-[var(--color-primary-container)]">
              Founder, Yoga Therapist &amp; Hormonal Health Specialist
            </p>
            <p className="mx-auto max-w-2xl text-base text-[var(--color-on-surface-variant)] lg:mx-0 md:text-lg">
              With over 12 years of experience in clinical yoga therapy and a background in reproductive health,
              Dr. Sarah has helped over 5,000 women rediscover their rhythm through gentle, somatic practices.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
