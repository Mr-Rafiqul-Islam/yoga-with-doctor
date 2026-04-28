import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PROTOCOL = [
  {
    id: "asana",
    icon: "spa",
    title: "Asana Therapy",
    body: "Targeted postures designed to support abdominal organ circulation and mobility.",
  },
  {
    id: "pranayama",
    icon: "air",
    title: "Pranayama Control",
    body: "Breathing techniques to downshift stress response and support insulin sensitivity habits.",
  },
  {
    id: "stress",
    icon: "psychology",
    title: "Stress Regulation",
    body: "Vagus-nerve friendly practices to stabilize the nervous system and cravings.",
  },
  {
    id: "rhythm",
    icon: "nutrition",
    title: "Glycemic Rhythm",
    body: "How to time light movement and meals to reduce spikes and improve steady energy.",
  },
] as const;

export function YogaCareDiabetesSolution() {
  return (
    <ScrollReveal className="bg-[rgb(var(--color-primary-container-rgb,0_168_107)/0.05)] py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-on-surface)] md:text-4xl">
            The Clinical Yoga Care Protocol
          </h2>
          <p className="mt-3 text-[var(--color-secondary)]">
            A practical blend of tradition and modern metabolic science.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROTOCOL.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center rounded-2xl border border-[rgb(var(--color-primary-rgb)/0.10)] bg-white p-6 text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary-rgb)/0.10)] text-[var(--color-primary)]">
                <span className="material-symbols-outlined text-3xl">{p.icon}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-secondary)]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

