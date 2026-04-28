import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    id: "brain-stem",
    icon: "psychology",
    label: "BRAIN STEM",
    body: "Calm the trigeminal nerve",
  },
  {
    id: "nervous-system",
    icon: "self_care",
    label: "NERVOUS SYSTEM",
    body: "Activate the Vagus nerve",
  },
] as const;

export function YogaForMigraineSolution() {
  return (
    <ScrollReveal className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
        <h2 className="mb-12 text-3xl font-semibold leading-tight text-on-surface md:text-4xl">
          The Vagus Nerve Reset: A Science-Backed Solution
        </h2>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-outline-variant bg-surface-container p-8 shadow-sm md:p-12">
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-white">
                <span className="material-symbols-outlined">{STEPS[0].icon}</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-on-surface">
                {STEPS[0].label}
              </p>
              <p className="text-sm text-secondary">{STEPS[0].body}</p>
            </div>

            <div className="hidden md:block">
              <span className="material-symbols-outlined text-4xl text-outline-variant">
                trending_flat
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-white">
                <span className="material-symbols-outlined">{STEPS[1].icon}</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-on-surface">
                {STEPS[1].label}
              </p>
              <p className="text-sm text-secondary">{STEPS[1].body}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-xl text-base leading-relaxed text-on-surface">
              Unlike medication that masks symptoms, our yoga protocol rewires your nervous system
              to increase your &quot;migraine threshold.&quot;
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

