import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STARS = [0, 1, 2, 3, 4] as const;

const REVIEWS = [
  {
    quote:
      '"My A1C dropped from 7.8 to 6.2 in just three months. I have more energy than I did in my 40s. Dr. Chen\'s program literally saved my life."',
    name: "Linda M.",
    role: "Verified Patient",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3iQvCs_75M9BbuQHTEQ6McRSQvK94XcUPVc8cRa6sFo0rE92V5fYkPIZo3ME7wTmKFG5kMOJU6EnpHR0BfesF3P7GgcWk0UgC62PSa5D-uGQrH-gPtiI8tqwYrYL0xoN02rd_qxsiGVcN6U-Fdjn2v1_PckbwCwDrbfKRu4MJZxtELwF0fWGbmBIz76nklFbttjA0xVJUYnjjJ9Bta_wxX2sQFBiHa_T75brHFHweBAVhEixiFJzITgmHogGYmriuu-2bqrSGD7UV",
    alt: "Portrait of a healthy mature woman smiling",
  },
  {
    quote:
      '"I was skeptical about yoga. But the science-first approach clicked for me. The routine is gentle but the results on my meter are undeniable."',
    name: "James R.",
    role: "Verified Patient",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtb7SF4S7wAyvx417JJFm9_a-8sngl6fvxIKOMo3CU977qcEhcjjYK_PaIRlvwsaqVd39rt0L7VWY5WQKgklu2bRAC9EDxj867CD5r4guqU0TV9J_nhzo3k6HUa3PaHnqDmtK8yFq48q8P6hw4NXNPuCf9d2K2FrsEzVsnaS_zcZP1F2emSsZnTtgTxeUKkSfTapE1F9PonSvkcz3GKHRoY1xzLTe8932HC5jk__UXWl7HTQIdnyxwiHm-3LSN1fuJhzBQgVEaLGhF",
    alt: "Portrait of a confident middle-aged man",
  },
  {
    quote:
      '"The community support is what kept me going. Being around others who understand the struggle makes all the difference."',
    name: "Sofia K.",
    role: "Verified Patient",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyL8oieTOuuoXsclJsJj4aw3h3ay99KNt__K6QVkfvdCYp6XxPw75Msh6704FVJQDrTvb7-uFeze-N1EMAukoW0_h6ii_-R4xXZkfYrQkPaqhiz9o-A6pmz35-5uI2WMhMDEn-uT1sLJ2QuQcaAv0AMFyzQMonL2_VA7_GAgZQyoVEBZzvPno2xndZ9ldoH2LubYd4Sd7hU9aNmSUoLiQQIMldw5u9umo1YvB3nsaTFVUFUGfCg1uBjILGDqd1Ib8_uiydFF6dDcu",
    alt: "Portrait of a serene middle-aged woman",
  },
] as const;

export function YfdTestimonials() {
  return (
    <ScrollReveal id="reviews" className="px-5 py-12 md:py-16 bg-[color:var(--yfd-surface)]" delay={0.3}>
      <div className="mx-auto max-w-7xl">
        <h2 className="yfd-text-headline-lg mb-16 text-center text-[color:var(--yfd-primary)]">
          Stories of Restoration
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="yfd-shadow-soft rounded-2xl bg-white p-8">
              <div className="mb-4 flex text-[color:var(--yfd-secondary-fixed-dim)]">
                {STARS.map((i) => (
                  <span key={i} className="yfd-icon-fill material-symbols-outlined">
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 italic text-[color:var(--yfd-on-surface-variant)]">{r.quote}</p>
              <div className="flex items-center gap-4">
                <Image src={r.img} alt={r.alt} width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[color:var(--yfd-on-surface)]">{r.name}</p>
                  <p className="text-xs text-[color:var(--yfd-on-surface-variant)]">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
