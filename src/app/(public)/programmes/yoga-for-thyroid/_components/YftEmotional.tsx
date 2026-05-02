import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YftEmotional() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface-container-lowest)] px-8 py-32 text-center" delay={0.06}>
      <div className="mx-auto max-w-4xl space-y-8">
        <h2 className="yft-text-h2 italic text-slate-500">
          &quot;I&apos;m doing everything right, so why do I still feel stuck?&quot;
        </h2>
        <p className="yft-text-body-lg text-[color:var(--color-on-surface-variant)]">
          We understand the frustration of following every clinical guideline yet still feeling the heavy
          weight of thyroid dysfunction. It&apos;s not your lack of willpower—it&apos;s a disconnect between
          your nervous system and your endocrine health.
        </p>
        <div className="mx-auto h-px w-24 bg-[color:var(--color-primary)] opacity-30" />
      </div>
    </ScrollReveal>
  );
}
