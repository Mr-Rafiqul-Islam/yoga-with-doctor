import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const QUOTES = [
  "I've been told to just 'lose weight' or 'take pills,' but no one ever explains how to actually heal from within.",
  "The internet is full of restrictive diets that only make my stress worse. I just want a sustainable way to feel normal again.",
];

export default function YogaForPcosAgitation() {
  return (
    <ScrollReveal className="px-6 py-[var(--pcos-section-y)]" as="section">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <h2 className="font-headline-lg text-[var(--color-on-surface)]">
          Tired of conflicting advice?
        </h2>
        <div className="grid gap-6 text-left md:grid-cols-2">
          {QUOTES.map((quote) => (
            <div
              key={quote.slice(0, 32)}
              className="rounded-2xl border border-[var(--color-outline-variant)] p-8"
            >
              <p className="text-body-md italic text-[var(--color-on-surface-variant)]">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
        <p className="text-body-lg mt-8 font-medium text-[var(--color-primary)]">
          PCOS isn&apos;t just a physical condition; it&apos;s an emotional journey. You deserve a better path.
        </p>
      </div>
    </ScrollReveal>
  );
}
