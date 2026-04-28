import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAIN_POINTS = [
  {
    id: "throbbing",
    icon: "bolt",
    title: "Throbbing Pain",
    body: "The relentless pounding that makes even thinking a physical challenge.",
  },
  {
    id: "light",
    icon: "light_mode",
    title: "Light Sensitivity",
    body: "Trapped in dark rooms while life happens without you outside.",
  },
  {
    id: "work",
    icon: "event_busy",
    title: "Missed Work",
    body: "Professional potential stalled by unpredictable neurological flares.",
  },
] as const;

export function YogaForMigrainePainPoints() {
  return (
    <ScrollReveal className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-on-surface md:text-4xl">
            When Every Pulse Feels Like a Setback
          </h2>
          <p className="text-base text-secondary">
            Migraine is more than just a headache. It&apos;s a life interrupted.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-6">
          {PAIN_POINTS.map((p) => (
            <div
              key={p.id}
              className="bento-card rounded-2xl border border-outline-variant bg-surface-container-low p-8"
            >
              <span className="material-symbols-outlined mb-4 block text-4xl text-primary">
                {p.icon}
              </span>
              <h3 className="mb-2 text-2xl font-semibold leading-snug">{p.title}</h3>
              <p className="text-base leading-relaxed text-on-surface-variant">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

