import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4uAU2k9y7ffj13a34s7KYpVu8OK6HkWHUqMU4E79JX78whLdEpl__DHId-iq1i4rXhkIN5FcZMPHLIEtv9sKBYhbVvhZelf_JFBZuWip9ER1WZtbMDWisQh9c4qjBLZOuK4I70HEJNYUH6zhzL0hlFnrJEMONIYGTLNYb9GMcAUiFebIH1f38LQfwMgS020eCgzy11ibDxh0vf2IST8GgAvWZXX7qEX1oG352JfphlACpUSqnzfJk4_3U0XrXSBmv5jsuAQvhE4Zk";

const WARNINGS = [
  "Rising dosages over time",
  "Potential long-term side effects",
  "The constant anxiety of the next reading",
];

export function YfbpDependency() {
  return (
    <ScrollReveal className="overflow-hidden px-6 py-24" delay={0.06}>
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <Image
            alt="Stressful lifestyle"
            className="rounded-2xl shadow-2xl"
            height={560}
            src={IMG}
            width={720}
          />
        </div>
        <div className="space-y-6">
          <h2 className="yfbp-text-h2 text-[color:var(--yfbp-on-background)]">
            Breaking the Cycle of Dependency
          </h2>
          <p className="yfbp-text-body-lg text-[color:var(--yfbp-on-surface-variant)]">
            Relying solely on medication might manage the symptoms, but it doesn&apos;t address the root cause: a
            dysregulated nervous system and chronic stress.
          </p>
          <div className="space-y-4">
            {WARNINGS.map((text) => (
              <div key={text} className="flex gap-4">
                <span className="material-symbols-outlined text-[color:var(--yfbp-error)]">warning</span>
                <p className="yfbp-text-body-md font-semibold text-[color:var(--yfbp-error)]">{text}</p>
              </div>
            ))}
          </div>
          <p className="yfbp-text-body-md italic text-[color:var(--yfbp-on-surface-variant)]">
            There is a scientifically proven way to support your body&apos;s natural ability to regulate pressure.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
