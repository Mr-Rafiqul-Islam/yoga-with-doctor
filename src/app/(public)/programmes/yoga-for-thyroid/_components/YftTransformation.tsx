import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BEFORE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmGlfe_FV714KK3bdGo1Nx-7PZa-YsS3O3B7wxcK2lcdi7MV08YXM9tHkcTqjvrY3LvQ9e2rJLcEmgnMXb5z7QI8KqsU7HwRkhNWt1CwyauQKPD_oy2Xj8wQhYhoR6P-ieu8o3zToDoeStp6AUyGgqoRkSoHIWqmoQO7CiwywncZ4YAH0KwGasfvG3KzdpE70_2f5PzizIy7H_nI7kyzdMRi9K4DvR7LlsJEvyU331xcxTLWKdb0ZrkSZwcXWzFbddV1D3tLjMEHX6";

const AFTER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6p0l-ti6Zj0-I4EuQAZdLDMRIXn5SlugW52mB1J0BlS1rOxF4oHMQU5IBP2FQ8A3o6SRY6QKgKpfgyYDBH1UbWWgEkrNhN-4_UbQShzO_hEoOKdE_b3qc1b3_HRSf3w5SmeofA6N2qqrUAbgtXfn4-d9RKssr2r1QWXTSlU9hdLQNPnNdraPKyTZGMK3R94gv81FBvQ5JwPN8NvNEUyvUOQhZi6OD8Fq-ROx_Ch4GnkUUpGCu_D_VkQRVbSI--0CjkExBKaONP6Kp";

const BENEFITS = [
  "Balanced Metabolic Rate & Sustained Energy",
  "Nervous System Regulation for Stress Defense",
  "Cognitive Clarity & Emotional Stability",
] as const;

export function YftTransformation() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface)] px-8 py-24" delay={0.09} id="results">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border-2 border-[color:var(--color-error-container)] shadow-lg">
                  <Image
                    alt="Woman looking exhausted and overwhelmed sitting on a couch with dim lighting"
                    className="w-full grayscale"
                    height={400}
                    src={BEFORE_IMG}
                    width={400}
                  />
                  <div className="yft-label-caps bg-[color:var(--color-error-container)] p-3 text-center text-[color:var(--color-on-error-container)]">
                    Before
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-[color:var(--color-on-surface-variant)]">
                  Constant Burnout
                </p>
              </div>
              <div className="space-y-4 pt-12">
                <div className="overflow-hidden rounded-xl border-2 border-[color:var(--color-secondary-container)] shadow-lg">
                  <Image
                    alt="Woman doing a gentle yoga pose in a bright sunlit room looking peaceful"
                    className="w-full"
                    height={400}
                    src={AFTER_IMG}
                    width={400}
                  />
                  <div className="yft-label-caps bg-[color:var(--color-secondary-container)] p-3 text-center text-[color:var(--color-on-secondary-container)]">
                    After
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-[color:var(--color-on-surface-variant)]">
                  Radiant Vitality
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 space-y-6 md:order-2">
            <h2 className="yft-text-h2 text-[color:var(--color-primary)]">Reclaim Your Natural Rhythm</h2>
            <p className="yft-text-body-lg text-[color:var(--color-on-surface-variant)]">
              Imagine waking up with genuine energy. Seeing your body respond positively to your efforts.
              Feeling a deep, quiet calm in your mind that persists throughout the busiest days.
            </p>
            <ul className="space-y-4">
              {BENEFITS.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="material-symbols-outlined material-symbols-outlined--fill text-[color:var(--color-secondary)]">
                    check_circle
                  </span>
                  <span className="yft-text-body-md font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
