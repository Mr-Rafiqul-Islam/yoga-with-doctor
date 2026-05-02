import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PHASES = [
  {
    phase: "BEFORE" as const,
    headerClass:
      "bg-[color:var(--yfplid-error)] text-[color:var(--yfplid-on-error)]",
    cardClass: "bg-[color:var(--yfplid-surface-container-high)]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApoOMio6tm_9fnWTkX2Vq-t_DbdWi-rBJlWVen4uihwPH3QG9Fiw9sSd1lSopoi44_wZt9k491FJQFFHOTqHd1upAUc_dl8dKomkLtvJ4C_wte5xFFbQ7H0DbIN1YW1JtEfuzC4mDzlk7TeDqATW1ESuONAyIoTiIv8PezvlOyqziF58ETF9ZCI9Tvts-paEn_NXbPX1SHuffQg1qzN0AgyCpKUc2acvaIxorbaJHek3aSYsoXNgv10pPF5IGP5uUNlniQ-6bkoW_B",
    alt: "Person in pain",
    body:
      "Stiffness, inability to lift small weights, chronic dependence on painkillers, and fear of movement.",
    bodyTone: "normal" as const,
  },
  {
    phase: "AFTER" as const,
    headerClass: "bg-[color:var(--yfplid-primary)] text-[color:var(--yfplid-on-primary)]",
    cardClass: "bg-[color:rgba(0,122,126,0.1)]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6hOY3-dDHtDMiHH7OM4jVO44Mcbxv4eMDzQvo-B6Gn-8TZ96g4bDqH2jp_1N4T6ecoEl-dVJ-BdjtKj2HAqROV3DimE2lrPfBc9YjZonVk31pfLFJRo7SXgKIt4VcZe9zKzSfvCjzBMsjfLg6q1N3Dksjj1yHlgJ5rryX7zQgep4qnIsRFCA1Fsx5jIPUvFjS-Wwad9l5Qae44vOvTsRNucf0d3CYCkxGmsiMcFan9NgvVMO0eZsGElBVI_uKyrxI-LYPxCyZaoRX",
    alt: "Person doing yoga",
    body:
      "Natural alignment restored, waking up without pain, active playing with grandkids, and pharmaceutical-free life.",
    bodyTone: "primary" as const,
  },
];

export function YfplidTransformation() {
  return (
    <ScrollReveal className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="yfplid-text-h2 text-[color:var(--yfplid-primary)]">
            Your Journey to Recovery
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {PHASES.map(
            ({ phase, headerClass, cardClass, image, alt, body, bodyTone }) => (
              <div
                key={phase}
                className={`flex-1 overflow-hidden rounded-2xl yfplid-shadow-soft ${cardClass}`}
              >
                <div className={`p-4 text-center text-base font-bold ${headerClass}`}>{phase}</div>
                <Image
                  src={image}
                  alt={alt}
                  width={800}
                  height={450}
                  className="aspect-video w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="p-6">
                  <p
                    className={`yfplid-text-body-md ${
                      bodyTone === "primary"
                        ? "text-[color:var(--yfplid-primary)]"
                        : ""
                    }`}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
