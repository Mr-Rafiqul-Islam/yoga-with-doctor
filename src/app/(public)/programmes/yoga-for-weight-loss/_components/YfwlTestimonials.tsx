import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STARS = 5;

const REVIEWS = [
  {
    quote:
      "I lost 8kg in the first month without ever stepping into a gym. Dr. Sarah's approach is gentle but incredibly effective. My energy is higher than it's been in years!",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGVYDwiMZ_v-Ey7_UkQXsKg1JZsM0T31ipqhGx65JMbSXb4AzHsqTnuo50FCO5SP8qwF8RBgLxIa2tFygT8Wh3qc4fS-pmhb8s9W9lQEp-8jDz8-eYxwBsBJxndFKXUq0irtjmmzd4gPV9fz-Gl_tFFNCgzFfUftx_ktiiaLMy4ShzT_fiWJXSUwlO0XJil-OcM1r-3WjDpldnib-Yw_lgilLKXNk_clkAEaDsmeLE2AURT4Fv-xcgzrCVV3wwrdg1NVcTfmUpUIqq",
    avatarAlt: "Headshot of a happy mature woman",
    name: "Elena R.",
    subtitle: "Lost 8kg",
  },
  {
    quote:
      "Finally a program that doesn't hurt my knees. I've dropped two dress sizes and my blood pressure has never been better. Safe and scientific.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQLD7rJvltskpmSlAEBmGz_sDi8x_q3vwlfPZuRn6G9QOoSCfUHm4IBHZWgD1GEVD6CGTILAtgwWw1BYAy6hmAtLzX86WyOzkix9UWJjEqHb1UbczgcTuW7yEcxSgPXTwaKSajHm4smBmOkVITjbAwh9kdeeaN89ndw9Z2XMjJ5C1ka9jUolvokT5p5CmecwOpNgLkeYJzHvcAN7HtERZaNH9QHTmg3NkVflhMv3QA0eSaDHhOXBkitQG__1A4b2pYGy_ZXucUKncW",
    avatarAlt: "Portrait of a confident mid-40s man smiling",
    name: "Mark T.",
    subtitle: "Lost 10kg",
  },
] as const;

export function YfwlTestimonials() {
  return (
    <ScrollReveal
      as="section"
      id="testimonials"
      className="mx-auto max-w-7xl overflow-hidden px-6 py-24"
    >
      <h2 className="yfwl-text-h2 mb-16 text-center text-[color:var(--yfwl-on-surface)]">
        Results From Our Community
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {REVIEWS.map(({ quote, avatar, avatarAlt, name, subtitle }) => (
          <div
            key={name}
            className="max-w-md space-y-6 rounded-2xl border border-teal-50 bg-white p-8 shadow-lg"
          >
            <div className="flex gap-1" style={{ color: "var(--yfwl-brand-orange)" }}>
              {Array.from({ length: STARS }, (_, i) => (
                <span key={i} className="material-symbols-outlined yfwl-icon-fill text-xl" aria-hidden>
                  star
                </span>
              ))}
            </div>
            <p className="italic text-[color:var(--yfwl-on-surface-variant)]">&quot;{quote}&quot;</p>
            <div className="flex items-center gap-4">
              <Image src={avatar} alt={avatarAlt} width={48} height={48} className="rounded-full" sizes="48px" />
              <div>
                <div className="font-bold text-[color:var(--yfwl-on-surface)]">{name}</div>
                <div className="text-xs font-bold uppercase text-[color:var(--yfwl-outline)]">
                  {subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
