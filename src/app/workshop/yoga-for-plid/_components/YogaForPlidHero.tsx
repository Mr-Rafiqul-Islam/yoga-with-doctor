import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATARS = [
  { id: "a1" },
  { id: "a2" },
  { id: "a3" },
] as const;

export function YogaForPlidHero() {
  return (
    <ScrollReveal className="px-8 pb-20 pt-24 md:pt-28" as="section">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-primary-container-rgb)/0.10)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-primary)]">
            <span className="material-symbols-outlined material-symbols-outlined--fill text-[14px]">
              verified
            </span>
            <span>CLINICALLY PROVEN METHOD</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-on-background)] md:text-5xl lg:text-6xl">
            Relieve Back Pain and{" "}
            <span className="text-[var(--color-primary)]">Avoid Spine Surgery</span> Forever.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            A doctor-led, scientifically designed yoga program specifically for Prolapsed Lumbar
            Intervertebral Disc (PLID) recovery and long-term spinal health.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-tertiary-container)] px-8 py-4 text-center text-lg font-bold text-[var(--color-on-tertiary)] shadow-xl shadow-[rgb(var(--color-tertiary-container-rgb)/0.30)] transition-transform active:scale-[0.98]"
            >
              Join Free Workshop
            </a>

            <div className="flex items-center gap-3 px-1 sm:px-0">
              <div className="flex -space-x-2">
                {AVATARS.map((a, idx) => (
                  <div
                    key={a.id}
                    className={[
                      "h-8 w-8 rounded-full border-2 border-white",
                      idx === 0 ? "bg-slate-200" : idx === 1 ? "bg-slate-300" : "bg-slate-400",
                    ].join(" ")}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--color-on-surface-variant)]">
                1,200+ Students Enrolled
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rotate-3 rounded-2xl bg-[rgb(var(--color-primary-rgb)/0.05)]" />
          <Image
            alt="Medical Professional"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIjzWR1l4LU5ZyzWnVbFMjE4T39P8EO9lvU0NjDRXGGmy0RpSV-SMLA7ZDjQot2ZHJlIKG4LGqyhvEUodAKKxEEmh44LGkgxd9uZJIf22h7ISLLhveVrhoMz18yaOqOuwqcMj7lEiI98mVhYLp4GFta2LvLNiZJqXVj56e7Hjs8hv3235sUd1Tpo_WTtRIup429u3eQ44uXFujFzkxlzXfck_GNSQyu6mclVpI-Ui_-YywqPy0w27HJgE4qTVQ7Tt_ZIqWZftP7Uap"
            width={1200}
            height={1500}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

