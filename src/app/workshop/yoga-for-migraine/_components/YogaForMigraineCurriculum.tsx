import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const DAYS = [
  {
    id: "day-1",
    icon: "event",
    title: "DAY 1: The Neuroscience of Relief",
    time: "60 MIN",
    body: "Understanding why traditional yoga isn't enough. We cover the specific cranial nerves involved and the clinical pathway to lowering sensitivity.",
  },
  {
    id: "day-2",
    icon: "fitness_center",
    title: "DAY 2: Precision Practice",
    time: "90 MIN",
    body: 'The "Rescue Protocol." Real-time guided session of specific movements and mudras designed to stop a pending attack in its tracks.',
  },
] as const;

export function YogaForMigraineCurriculum() {
  return (
    <ScrollReveal className="bg-surface py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">The 2-Day Curriculum</h2>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {DAYS.map((d, idx) => (
            <div
              key={d.id}
              className={`relative flex items-center justify-between md:justify-normal ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-primary text-white shadow md:order-1 ${
                  idx % 2 === 0 ? "md:-translate-x-1/2" : "md:translate-x-1/2"
                }`}
              >
                <span className="material-symbols-outlined text-sm">{d.icon}</span>
              </div>
              <div className="w-[calc(100%-4rem)] rounded-2xl border border-outline-variant bg-white p-6 shadow-md md:w-[calc(50%-2.5rem)]">
                <div className="mb-1 flex items-center justify-between gap-4">
                  <div className="font-bold text-on-surface">{d.title}</div>
                  <time className="text-xs font-semibold tracking-[0.2em] text-primary">
                    {d.time}
                  </time>
                </div>
                <div className="text-base leading-relaxed text-secondary">{d.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

