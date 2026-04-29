import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const credentials = [
  { icon: "verified", label: "Certified Therapist" },
  { icon: "school", label: "PhD in Integrative Health" },
];

export function YogaForThyroidAuthority() {
  return (
    <ScrollReveal className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 rounded-3xl bg-[var(--color-surface-container)] p-10 md:flex-row">
        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBre6txUHNHeVvO3hS1Ar52VBwbXm-aFjXrHjn7-Es1m8o8wzf0Jxpj_C1X54eylTYCNDRPQZKlaHlgDw7SBBl5FbWBwcQql2GwheufY3egMY1kPFi32B1ZDcHyrhs-eplu1vawiNzWKkPIM1qUYIEE3Hb8zUUsC_Bf-PxYxjsD8WZiy8M9VZ4-velm351J8rbal3XtmCrH-RPN5h_P0kQ_szD6favofIasRZ3TBZrUqNCb9yQCvlTF5kIBDvgstTqHqSiqIdFYvXFX"
            alt="Workshop instructor"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Dr. Sarah Jenni, E-RYT 500</h3>
          <p className="font-semibold text-[var(--color-primary)]">Specialist in Hormonal Health & Therapeutic Yoga</p>
          <p className="text-[var(--color-on-surface-variant)]">
            With over 12 years of clinical experience helping thousands of women regain vitality.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            {credentials.map((item) => (
              <div key={item.label} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.08em]">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
