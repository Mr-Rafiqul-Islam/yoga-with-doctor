import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      '"I never thought I could gain height after 22, but the posture correction alone made me look 2 inches taller in weeks. My friends actually asked if I\'d been stretching!"',
    name: "Alex Chen",
    role: 'Gained 1.8" in 45 days',
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY1YND3DkDSHlq9bSygRF8TCTpE5NEP0Xp1egBZi6MQfkgrFWSJHs0fkX7o_mOnftTGItzXhNmMu6T4YsyRrnislXP5TVPIpi0s5wK79wq1xnxkwQeV7qW0rSbgaGfsK_54Pn0gIn_sZGZRkcr8V1HY70tWuVXL8Ln4GYB3JQ9yKeQLo0etpaubamKJty838_iW8AXaZhd0JABJRXQ0hRVpaiv2n3k4YJYmgxp9OKZE9TbgcIgg1y79c1WelusIJAtzwga4C9U1weT",
  },
  {
    quote:
      '"The Habit Plan was the game changer. Learning how to sit and walk properly reduced my back pain and helped me reclaim my natural height potential."',
    name: "Sarah Jenkins",
    role: 'Gained 1.5" in 30 days',
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUJgPDn4N6I3Y6pQ3Rdk4Ez-64plrQKbbD5MIdjX5m116GVv84q6XGOxCt7zj4yvQ5xeMHkM6FemVgGL34HaDiD9Jsl5-MFOQPEL34tqijmGab1zyK6nssacyC1ybnEWgofvv9xAQgiByXsvLuitDmPXOcXyvgJgYnVdyz9Sjly6f5XsA2dkGqhWMbs6Qd2btXZ-fd-ps2dT3V9AOD6QJDzU9wuq3q2eT4bmzkLF3_3DcFNHNa_PdUsa7QYgRiP-ell9qYChvWp3mv",
  },
  {
    quote:
      '"Professional, scientific, and it works. As a doctor, I was skeptical, but spinal decompression is a valid mechanical process for height optimization."',
    name: "Dr. Marcus Thorne",
    role: "Verified Success",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbl2kh4SbjfgXL9bQ2Pb-D4wIi7o5de0BQ4PGo7NNHeDjI-AIwOKOCGH7nXeTQPAaTwnjCDGUB7tJ8zFfw9YzNn9EuVh8Nu8mQQU5_ReRC5DzimfIg6UDtWSxsZBGxYDESj3ndK04SbjKXu6KAwiVSZpRAj-29ndMNadBpCIv-6WY2UpVbEL2Km6P-CvYzD9OKOnTQpdVsYPYYLkAXRJiXB_3-5RfNXo6sfboKB7V9En2UVkxkvr_VkgLEO4tuWKztUXU8OhvCiD1D",
  },
] as const;

const STARS = [0, 1, 2, 3, 4] as const;

export function YfhgTestimonials() {
  return (
    <ScrollReveal className="overflow-hidden px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]" as="section">
      <div className="mx-auto max-w-7xl">
        <h2 className="yfhg-display-xl mb-[var(--yfhg-space-xl)] text-center text-[color:var(--color-on-background)]">
          Success Stories
        </h2>
        <div className="flex snap-x flex-nowrap gap-[var(--yfhg-space-md)] overflow-x-auto pb-8 md:grid md:grid-cols-3 md:overflow-visible">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="min-w-[300px] snap-center rounded-3xl border border-slate-100 bg-white p-8 shadow-md md:min-w-0"
            >
              <div className="mb-4 flex text-[color:var(--color-tertiary-container)]">
                {STARS.map((i) => (
                  <span key={i} className="material-symbols-outlined material-symbols-outlined--fill text-xl">
                    star
                  </span>
                ))}
              </div>
              <p className="yfhg-body-md mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-200">
                  <Image alt={t.name} className="object-cover" fill sizes="48px" src={t.src} />
                </div>
                <div>
                  <p className="yfhg-font-label font-bold text-[color:var(--color-on-background)]">{t.name}</p>
                  <p className="text-xs text-[color:var(--color-on-surface-variant)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
