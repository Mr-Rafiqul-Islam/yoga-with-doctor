import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForThyroidAgitation() {
  return (
    <ScrollReveal className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-5 text-center">
        <h2 className="text-4xl font-bold text-[var(--color-error)]">Tired of conflicting advice?</h2>
        <p className="text-lg italic text-[var(--color-on-surface-variant)]">
          &quot;Eat this, don&apos;t eat that. Take this supplement, but not with that.&quot;
        </p>
        <p className="text-[var(--color-on-surface)]">
          Living with thyroid issues often feels like navigating a maze without a map. It&apos;s not your fault.
        </p>
      </div>
    </ScrollReveal>
  );
}
