import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CARD_BASE =
  "rounded-2xl border border-teal-50 bg-white p-8 shadow-sm dark:border-teal-900/40";

type PainCard =
  | { kind: "simple"; icon: string; title: string; description: string; className?: string }
  | {
      kind: "tall";
      icon: string;
      title: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
    };

const PAIN_BLOCKS: PainCard[] = [
  {
    kind: "simple",
    icon: "light_mode",
    title: "Sensitivity Overload",
    description:
      "When every flicker of light or hum of a fridge feels like a physical assault on your senses.",
  },
  {
    kind: "tall",
    icon: "work_off",
    title: "Stolen Productivity",
    description:
      "Missing work, canceling family plans, and living in constant fear of the 'next attack' looming around the corner.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv4QM_dPg6DVjiCmcNSnlZ6lh8wMxn7NX0dnU8sMQLb4Qv0FSjzc_WNsENSfUuupz-sl_hPbKQ9YYO9JEdCn_pYx1I4iuRqRcn3KHvmuzAEfMuzHXVm9GlOMj1wVuxdRKloyeOV0-gsh57fB8yLM3djTGFjcaUQ9xEoFQnCJHCYbZmdXT0l-GfR0ILnqy4R5Sak8Ih3kZBGiYNvr44DPAtFxdFrjBFfVKze0J05y5s6TiTf2EUCqJlNewW-FCv2uATjfOwCBB3RqXx",
    imageAlt: "Professional under stress working at a laptop",
  },
  {
    kind: "simple",
    icon: "pill",
    title: "Medication Fatigue",
    description:
      "Tired of the brain fog and side effects from pills that only mask the symptoms temporarily.",
  },
  {
    kind: "simple",
    icon: "sentiment_very_dissatisfied",
    title: "Social Isolation",
    description: "The quiet anxiety of having to explain—again—why you can't show up today.",
    className: "md:col-span-1",
  },
];

export function YfmPainPoints() {
  return (
    <ScrollReveal className="bg-[color:var(--yfm-surface-container-low)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="yfm-text-h2 mb-16 text-center text-[color:var(--yfm-primary)]">
          Is Your Life Held Hostage by Migraines?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PAIN_BLOCKS.map((block) => {
            if (block.kind === "tall") {
              return (
                <div
                  key={block.title}
                  className={`flex flex-col justify-center rounded-2xl border border-teal-50 bg-white bg-[length:320px_320px] p-8 shadow-sm dark:border-teal-900/40 md:row-span-2`}
                  style={{
                    backgroundImage:
                      "url(https://www.transparenttextures.com/patterns/cubes.png)",
                  }}
                >
                  <span className="material-symbols-outlined mb-4 text-5xl text-[color:var(--yfm-error)]" aria-hidden>
                    {block.icon}
                  </span>
                  <h3 className="yfm-text-h3 mb-4 text-[color:var(--yfm-on-surface)]">{block.title}</h3>
                  <p className="mb-6 text-[color:var(--yfm-secondary)]">{block.description}</p>
                  <Image
                    src={block.imageSrc}
                    alt={block.imageAlt}
                    width={640}
                    height={400}
                    className="rounded-xl opacity-50 grayscale"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              );
            }
            return (
              <div key={block.title} className={`${CARD_BASE} ${block.className ?? ""}`}>
                <span className="material-symbols-outlined mb-4 text-4xl text-[color:var(--yfm-error)]" aria-hidden>
                  {block.icon}
                </span>
                <h3 className="yfm-text-h3 mb-4 text-[color:var(--yfm-on-surface)]">{block.title}</h3>
                <p className="text-[color:var(--yfm-secondary)]">{block.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
