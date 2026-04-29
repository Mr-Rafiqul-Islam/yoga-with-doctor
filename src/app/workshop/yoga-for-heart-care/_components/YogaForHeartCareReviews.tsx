import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const REVIEWS = [
  {
    quote:
      '"As a cardiac rehab patient, I was nervous. This program gave me the confidence to move safely again."',
    name: "Robert M.",
    subtitle: "Patient since 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANeDhz0pyJTWoYB0zn3PP3-S1EzF6nv9RQynxyqudwn7wj6JhJ3I80CkrJleS3goKbm0sPiW54r1l7ZRQni8h0rjCg6SqQbWJTtMUBIrYZ8679Z-VPBzaWzlBKlaLUVaogTVu3PplDCYxLDymfzy-3FA6AE5ALkTAq2Oqrsew8dAcnsnwvemVkMZ-jwCLQZus78asSEN_JgSc6bzBKeynGgUPZ97dZUIoykmvuZSeJ3oNAEuWcWfDiU8u0zX1zUkpKladzkxNxZCFZ",
    alt: "Robert M.",
  },
  {
    quote: '"Finally found a way to manage my work stress that actually shows up on my health tracker."',
    name: "Elena K.",
    subtitle: "HRV +15% improvement",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFqyXOxtK6ZDHB6m7G5WxWLFQRQihbZgdq1w71ijIiQusoxTTHuan4rgTgSH0MKsZkLnSfmh7HJAu283QJtiSzVUq2ZcmIOztRSNONxWfI6OSRIcq2bOwoJAd9v58xUUF10hiI4tHvW3tb56RdHtVxSmCcUHdQU8tzg0ydw2Jk9puY3yu5RZleBEWVoRVbHc-rsYbTMifXPoW6vV18KQvzJjlYc14AyBrkwBQRhWYSUvTG56dRhHqdWpAAz98ykZmfimIzBTHSzict",
    alt: "Elena K.",
  },
  {
    quote:
      '"Simple, clear instructions that prioritize safety above all else. Dr. Sarah is amazing."',
    name: "Linda G.",
    subtitle: "BP management user",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMCi1Xj_ln8bUyy-5y6H1GxQHhvJi0CTjd_JrgyJPxs80SpJD6_EeswQzcrqMdZyKnQY4LokCnwHbyCVccPDd6sFwg0jIKyn-p6nznqrWttBCPqzo6g3tGkqAZ64odOsgtboS-1X0Fb0dTQqG4pgf0OTs1J_AaPUa4Ztj-fT-uJWlBlQi3Dzb9xwGVliC1IAHE72e-NwqmYD89kCnlrRYievNLqFTePT598K3_lQywYrms08sIlI0H8qFN6v7-G4fIu2zN6nMI5wFc",
    alt: "Linda G.",
  },
] as const;

export function YogaForHeartCareReviews() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] px-6 py-20 text-center" as="section" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
          Results From Our Community
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="rounded-xl bg-white p-8 text-left shadow-sm">
              <div className="mb-4 flex gap-1 text-orange-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={`${r.name}-star-${i}`}
                    className="material-symbols-outlined material-symbols-outlined--fill text-orange-400"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 text-[var(--color-on-surface-variant)]">{r.quote}</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                  <Image src={r.image} alt={r.alt} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-bold text-[var(--color-on-background)]">{r.name}</p>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">{r.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
