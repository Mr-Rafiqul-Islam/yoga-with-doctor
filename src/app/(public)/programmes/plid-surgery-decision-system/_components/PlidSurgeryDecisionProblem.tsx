import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAINS = [
  {
    icon: "bolt",
    title: "Constant Sciatica",
    description:
      "That radiating, electric shock that travels down your leg, making every step a gamble.",
  },
  {
    icon: "bed",
    title: "Sleepless Nights",
    description: "Unable to find a single position that doesn’t trigger a flare-up.",
  },
  {
    icon: "cancel",
    title: "Surgery Fear",
    description: "The looming threat of invasive surgery and a long, uncertain recovery.",
  },
] as const;

export function PlidSurgeryDecisionProblem() {
  return (
    <ScrollReveal className="bg-surface-container-low py-20 md:py-28" id="pain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface lg:text-5xl">
            Trapped by Spinal Pain?
          </h2>
          <p className="text-base leading-relaxed text-on-surface-variant lg:text-lg">
            Living with a slip disc isn’t just physical pain — it’s the life you’re missing out on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {PAINS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl bg-surface-container-lowest p-6 md:p-8 shadow-sm shadow-on-surface/5 lg:p-10"
            >
              <div className="mb-4 md:mb-5 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-error-container/30 text-error">
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="mb-3 font-headline text-xl md:text-2xl font-bold text-on-surface">{p.title}</h3>
              <p className="leading-relaxed text-on-surface-variant text-sm md:text-base">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

