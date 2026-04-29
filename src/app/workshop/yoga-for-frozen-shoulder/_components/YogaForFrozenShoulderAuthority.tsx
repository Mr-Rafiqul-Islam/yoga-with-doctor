import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const stats = [
  { value: "4,000+", label: "Success Stories" },
  { value: "15+", label: "Years Experience" },
];

export function YogaForFrozenShoulderAuthority() {
  return (
    <ScrollReveal className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-20 text-white">
      <div className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 skew-x-12 bg-white/5" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdsRfFjRRV6sPj1XeDSwvd8gNfgpEvsxlM5DiurPRggXSnbqcr5X5I-R-3yQp-3gmVlWomPE31Xb_vEUiuTgS-SOGooaV5werjFwQ0SD6aJE5wa4bBkT_3P3O0Ca9M29GRKXAZR-9R367kmxB7HbNNa0JWE7_1Egup5fBbdnqpcvlWnYM9OkgGdd25vE4G_JjjyPX3Yla-ncV3rPvN2XIN935bnDJrYub2oasWTLKfWYxY24xVBeBvKhL_e7jNHF4l44eSalryxr-I"
            alt="Workshop instructor portrait"
            width={720}
            height={900}
            className="rounded-3xl shadow-2xl grayscale transition duration-700 hover:grayscale-0"
          />
        </div>

        <div className="order-1 md:order-2">
          <span className="mb-6 inline-block rounded-full bg-[var(--color-primary-container)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary-container)]">
            Expert Instruction
          </span>
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Meet Dr. Elena Wright</h2>
          <p className="mb-8 text-lg text-white/90">
            With 15+ years in Sports Medicine and Clinical Yoga certification, Dr. Wright has helped over 4,000 patients avoid surgery through mindful movement protocols.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[var(--color-on-primary-container)]">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[var(--color-on-primary-container)]">workspace_premium</span>
            <span className="font-semibold">Board Certified Orthopedic Specialist</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
