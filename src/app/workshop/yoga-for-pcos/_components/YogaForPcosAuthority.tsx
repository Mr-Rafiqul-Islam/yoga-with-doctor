import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CREDENTIALS = [
  { icon: "school" as const, label: "MD, Gynecology" },
  { icon: "award_star" as const, label: "RYT-500 Certified" },
  { icon: "groups" as const, label: "10k+ Success Stories" },
];

export default function YogaForPcosAuthority() {
  return (
    <ScrollReveal className="px-6 py-[var(--pcos-section-y)]" as="section">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ambient-shadow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz3zY4tWFSl0zthtCaCvOd-n-gLkOgqRafyGxOsY-yZyNzFxYWn_y-Q1ksS1XZ4D1z9jsxvQnoq52XUBBozYrerDBFL2w0FwtWiyLzWjD4CxJD8KMATjufkfpY6gwBaxzex4KwGyxYUvK2Khrl_Lsi9fScJz36-s9j-6SgiE94gKuJ0WUP7d2xqwIC81p5uI5YRV2-SGXshd6WQxct1ZrmvS_f_7KMDWUvPsu-yUzrmQwXsYJihs76TZDsAcI1gnBKf-NpJC-PgsgZ"
              alt="Dr. Sarah Chen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="w-full space-y-6 md:w-2/3">
          <span className="text-label-sm uppercase tracking-wider text-[var(--color-primary)]">
            Meet Your Mentor
          </span>
          <h2 className="font-headline-lg text-[var(--color-on-surface)]">
            Dr. Sarah Chen, Hormone Specialist
          </h2>
          <p className="text-body-lg text-[var(--color-on-surface-variant)]">
            With over 15 years of experience in integrative gynecology and certified yoga therapy, Dr.
            Chen has helped thousands of women manage PCOS without relying solely on medication. Her
            holistic approach blends medical precision with spiritual nurturing.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary)]">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-[var(--color-on-surface)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
