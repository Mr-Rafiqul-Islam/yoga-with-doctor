import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { SOLUTION } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthSolution() {
  return (
    <ScrollReveal className="px-6 py-20" as="section">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src={SOLUTION.image}
            alt="Yoga pose"
            width={720}
            height={600}
            className="h-auto w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="order-1 space-y-6 md:order-2">
          <h2 className="text-4xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-on-surface)]">
            <span className="text-[var(--color-primary)]">{SOLUTION.titleHighlight}</span> Recovery is closer than you
            think.
          </h2>
          <p className="text-lg leading-8 text-[var(--color-on-surface)]">{SOLUTION.body}</p>

          <ul className="space-y-4">
            {SOLUTION.checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary)]">
                  check_circle
                </span>
                <span className="font-label font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#register"
            className="font-label inline-flex rounded-2xl bg-[var(--color-primary)] px-8 py-4 text-lg text-white shadow-lg transition-transform hover:scale-105"
          >
            {SOLUTION.cta}
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
