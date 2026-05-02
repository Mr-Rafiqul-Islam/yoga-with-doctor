import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YfmiFinalCta() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 pb-12 text-center" delay={0.06}>
      <h2 className="yfmi-headline-lg mb-4">Don&apos;t wait for &quot;next month.&quot;</h2>
      <p className="yfmi-body-lg mx-auto mb-12 max-w-2xl text-[color:var(--yfmi-on-surface-variant)]">
        Your body is ready to heal now. Join the hundreds of women who have found clarity and calm through the Flow
        system.
      </p>
      <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl bg-[color:var(--yfmi-surface-container-lowest)] px-6 py-4 shadow-sm">
          <p className="yfmi-headline-md text-[color:var(--yfmi-secondary)]">08</p>
          <p className="text-[10px] font-bold uppercase tracking-wider">Seats Left</p>
        </div>
        <p className="font-[family-name:var(--font-yfmi-headline-stack)] text-2xl italic text-[color:var(--yfmi-on-surface-variant)]">
          at this price
        </p>
      </div>
    </ScrollReveal>
  );
}
