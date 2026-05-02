import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAH1fbUY5ChniJ42HXebt9b6jZVwx5Cjxuut2yEKcv5CnZtd999A5e_tzQ5VM9brHu4FFtO4feVONzm8JtrktfWW0iRN2jcKdz3_gzV0KX1NGyZNIfj5meV6OSl4_7cDi70Z49myEkGzUcR1PO6HCmPEI7jUw9nQxc8i6eMqlloBIcfC0zvf6dhZvyX6HYdutUCMUsa_hn-710NX8Sg4rgTK4XlVyikflFPGy3-UjRA01fk79EPPL7U9PhF1y30QHmoOKx_LXhMRnmB";

const STATS = [
  { value: "5,000+", label: "Patients Helped" },
  { value: "15 Years", label: "Clinical Exp." },
];

export function YfbpExpert() {
  return (
    <ScrollReveal className="mx-auto max-w-[1200px] px-6 py-24" delay={0.06}>
      <div className="grid items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <Image
            alt="Dr. Sarah Chen"
            className="w-full rounded-2xl"
            height={640}
            src={PORTRAIT}
            width={560}
          />
        </div>
        <div className="space-y-6 md:col-span-3">
          <div className="yfbp-text-label-caps font-bold uppercase tracking-widest text-[color:var(--yfbp-primary)]">
            Clinical Background
          </div>
          <h2 className="yfbp-text-h2 text-[color:var(--yfbp-on-background)]">Meet Dr. Sarah Chen</h2>
          <p className="yfbp-text-body-lg leading-relaxed text-[color:var(--yfbp-on-surface-variant)]">
            &quot;During my 15 years in cardiology, I saw thousands of patients struggling with hypertension. While
            medicine is vital, the missing link was always the &apos;Biological Reset.&apos; I developed BreatheFlow
            to bridge the gap between clinical medicine and holistic wellness, giving my patients a tool they could
            use at home to actively lower their stress response.&quot;
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-[color:var(--yfbp-primary)]">{value}</div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--yfbp-on-surface-variant)]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
