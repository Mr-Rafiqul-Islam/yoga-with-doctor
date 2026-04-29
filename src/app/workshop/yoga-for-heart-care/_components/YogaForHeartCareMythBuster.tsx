import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MYTHS = [
  {
    title: '"Yoga is too strenuous for heart patients."',
    body: "False. Our clinical protocol focuses on parasympathetic activation, not high-intensity cardio.",
  },
  {
    title: '"You need to be flexible to start."',
    body: "False. If you can breathe, you can practice our Heart Care Yoga.",
  },
] as const;

export function YogaForHeartCareMythBuster() {
  return (
    <ScrollReveal className="px-6 py-20" as="section">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 rounded-3xl border border-teal-50 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
              Breaking the Myths
            </h2>
            <div className="space-y-6">
              {MYTHS.map((m) => (
                <div key={m.title} className="flex gap-4">
                  <span className="material-symbols-outlined material-symbols-outlined--fill flex-shrink-0 text-[var(--color-error)]">
                    cancel
                  </span>
                  <div>
                    <p className="font-bold text-[var(--color-on-background)]">{m.title}</p>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-teal-50 p-8">
            <h3 className="mb-4 text-2xl font-semibold leading-[1.4] text-teal-800">The Scientific Reality</h3>
            <p className="text-lg leading-[1.6] text-teal-900/80">
              Studies show that consistent mindfulness-based yoga can lower systolic blood pressure by up to 10mmHg
              and significantly improve heart rate variability (HRV).
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
