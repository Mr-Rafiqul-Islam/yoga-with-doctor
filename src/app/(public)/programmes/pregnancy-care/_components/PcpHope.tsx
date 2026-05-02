import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HOPE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeAnL6bvj3KvszzpDy--cxf4gRxGb04bzRFYBVv2GrxCzSRZolXl8KcGqgdkXVUtTKABSXnz-uqhWHJppG1gPa0RVTp6Jpc_fiG4pMCknwJ0NmUpZipKeKYHnJ1qdB2r9ffvK2HWKjnQlpdHPAVdZ52KtMhoXGUw0F85pMGqh5MtrsuWr4OAhs7Z4VsK2DvCrSz8D9K4Z5kuaA5nS2DF3KpL8vdCCwEhJJ2bYL8XDbdmz7LSKVnLAPlUd5qgXiA0OEZ1V3IXpFk4qe";

const CHECKLIST = [
  "Replace anxiety with mindful breathing",
  "Strengthen the body for an easier labor",
  "Create a sanctuary of peace for you and your baby",
] as const;

export function PcpHope() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-8 py-24" delay={0.06}>
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            alt=""
            className="rounded-[2rem] shadow-xl"
            height={640}
            src={HOPE_IMG}
            width={560}
          />
        </div>
        <div className="order-1 space-y-8 md:order-2">
          <h2 className="pcp-text-h1 leading-tight text-[color:var(--color-on-surface)]">
            You Deserve a <span className="italic text-[color:var(--color-secondary)]">Calm &amp; Confident</span> Journey
          </h2>
          <p className="pcp-text-body-lg text-[color:var(--color-on-surface-variant)]">
            Pregnancy isn&apos;t just about survival; it&apos;s about thriving. Imagine waking up without that nagging
            back pain, feeling a deep connection with your growing baby, and approaching birth with quiet strength instead
            of fear.
          </p>
          <ul className="space-y-4">
            {CHECKLIST.map((line) => (
              <li key={line} className="flex items-start gap-4">
                <span className="material-symbols-outlined material-symbols-outlined--fill text-[color:var(--color-secondary)]">
                  check_circle
                </span>
                <span className="pcp-text-body-md">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
