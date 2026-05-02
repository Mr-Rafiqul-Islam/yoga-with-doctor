import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BEFORE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtZNFeJudXR2crFg08iByZH1-VErZg_u1jRb6mrTYH4IS4IBPESrwAc2g2YAhDOuiK5mwHejg2RpExdUhob8KzU-4DaYmEjWOPxyF71zq7xrdrumZC1GGpvqJPikg3UGniOLddvdwGbd3oZsDXPc9GBFIiuq75sogf_OrO1V1PNPgnmnIM4yjTLI9qaitGULg0b7XSvTDEY8CSDst5qclN3tgfZfv8Tzqu99u97RLdT9kYMry1dTY7vt6weE-S32Ha9Vkhddx7zcqx";

const AFTER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0kQKQMYQStOt1AVF5bED96cgm9WCEoolz6EBYrGAJlB953L2kPO9jdbUca7sd9wNNKc-SAns8QVyOyx7krtZwRfQ9R01qHsgX5r1kpm6HlVNXF8be0Twl1bDFgZgSTxr5jn2MNYu7IkRC0IehYIVVeYKCabiHXndtj7NjxQtCxOouD-BtOduJbUGQEFtwbp131X5130_kLbXlBh2GellCcMA4Fzi5Ere36szqUDxUWJEvTpCzFlgNHMQEOCIGFeVVq8TZrlb8lAUc";

const CHECKLIST = [
  "Lower resting heart rate and blood pressure",
  "Visible improvement in posture and flexibility",
  "Enhanced mental clarity and emotional resilience",
];

export function YfaSerenity() {
  return (
    <ScrollReveal className="px-6 py-16" id="benefits">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[color:var(--yfa-on-primary-fixed)] p-12 text-[color:var(--yfa-on-primary-container)] md:p-24">
        <div className="absolute right-0 top-0 p-12 opacity-10">
          <span className="material-symbols-outlined text-[12rem]">eco</span>
        </div>
        <div className="relative grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="yfa-text-h2 text-white">From Stress to Serenity</h2>
            <p className="yfa-text-body-lg text-[color:var(--yfa-primary-fixed)]">
              Imagine a version of yourself that moves without pain, sleeps without worry, and breathes with full
              capacity.
            </p>
            <ul className="space-y-4">
              {CHECKLIST.map((line) => (
                <li key={line} className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-[color:var(--yfa-primary-fixed)]">check_circle</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  alt="Before: stressed at desk"
                  className="h-full w-full object-cover grayscale opacity-50"
                  height={400}
                  src={BEFORE_IMG}
                  width={320}
                />
                <div className="absolute inset-0 flex items-end bg-black/20 p-4">
                  <span className="font-bold text-white">BEFORE</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[color:var(--yfa-primary-fixed)]">
                <Image
                  alt="After: yoga outdoors at sunrise"
                  className="h-full w-full object-cover"
                  height={400}
                  src={AFTER_IMG}
                  width={320}
                />
                <div className="absolute inset-0 flex items-end bg-[color:var(--yfa-primary-container)]/20 p-4">
                  <span className="font-bold text-white">AFTER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
