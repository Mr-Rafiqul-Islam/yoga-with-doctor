import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type PillarItem =
  | {
      id: string;
      variant: "wide-white";
      title: string;
      body: string;
    }
  | { id: string; variant: "brown"; title: string; body: string; icon: string }
  | { id: string; variant: "green"; title: string; body: string }
  | { id: string; variant: "wide-bordered"; title: string; body: string; icon: string };

const PILLARS: PillarItem[] = [
  {
    id: "gentle",
    variant: "wide-white",
    title: "Gentle Yoga Therapy",
    body: "Low-impact movements that decompress the spine without causing further irritation to the disc wall.",
  },
  {
    id: "spine",
    variant: "brown",
    icon: "straighten",
    title: "Spine Alignment",
    body: "Daily routines to fix the postural imbalances that caused the herniation initially.",
  },
  {
    id: "pain",
    variant: "green",
    title: "Pain Management",
    body: "Breathwork techniques proven to lower cortisol and reduce nerve sensitivity.",
  },
  {
    id: "group",
    variant: "wide-bordered",
    icon: "groups",
    title: "Private Support Group",
    body: "Never heal alone. Connect with others on the same journey and get direct feedback from our experts.",
  },
];

export function YfplidPillars() {
  return (
    <ScrollReveal className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="yfplid-text-h2 mb-12 text-center text-[color:var(--yfplid-primary)]">
          The PLID-Recovery Pillars
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((item) => {
            const span =
              item.variant === "wide-white" || item.variant === "wide-bordered"
                ? "md:col-span-2"
                : "";

            if (item.variant === "wide-white") {
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-8 rounded-2xl bg-white p-8 yfplid-shadow-soft ${span}`}
                >
                  <div className="space-y-4">
                    <h3 className="yfplid-text-h3 text-[color:var(--yfplid-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-[color:var(--yfplid-on-surface-variant)]">{item.body}</p>
                  </div>
                  <div
                    aria-hidden
                    className="yfplid-breath-pulse hidden h-32 w-32 shrink-0 rounded-full bg-[color:var(--yfplid-primary-container)] sm:block"
                  />
                </div>
              );
            }

            if (item.variant === "brown") {
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl bg-[color:var(--yfplid-tertiary-container)] p-8 text-white yfplid-shadow-soft ${span}`}
                >
                  <span className="material-symbols-outlined mb-4 block text-4xl" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="yfplid-text-h3 mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.body}</p>
                </div>
              );
            }

            if (item.variant === "green") {
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl bg-[color:var(--yfplid-secondary-container)] p-8 yfplid-shadow-soft ${span}`}
                >
                  <h3 className="yfplid-text-h3 mb-2 text-[color:var(--yfplid-secondary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.body}</p>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className={`flex items-center gap-6 rounded-2xl border-2 border-[color:rgba(0,122,126,0.2)] bg-white p-8 yfplid-shadow-soft ${span}`}
              >
                <span
                  className="material-symbols-outlined text-5xl text-[color:var(--yfplid-primary)]"
                  aria-hidden
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="yfplid-text-h3 text-[color:var(--yfplid-primary)]">{item.title}</h3>
                  <p className="text-[color:var(--yfplid-on-surface-variant)]">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
