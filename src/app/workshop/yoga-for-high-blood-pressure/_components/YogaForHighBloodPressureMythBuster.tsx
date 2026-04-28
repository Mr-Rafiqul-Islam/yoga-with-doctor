import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { MYTH_CARDS } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureMythBuster() {
  return (
    <ScrollReveal className="px-6 py-16" as="section">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2">
        {MYTH_CARDS.map((card) => (
          <div
            key={card.id}
            className={[
              "rounded-3xl bg-white p-10 shadow-sm",
              card.variant === "myth"
                ? "border-l-8 border-[var(--color-error)]"
                : "border-l-8 border-[var(--color-primary)]",
            ].join(" ")}
          >
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-semibold leading-[1.4] text-[var(--color-on-surface)]">
              <span
                className={[
                  "material-symbols-outlined",
                  card.variant === "myth"
                    ? "text-[var(--color-error)]"
                    : "text-[var(--color-primary)]",
                ].join(" ")}
              >
                {card.icon}
              </span>
              {card.title}
            </h3>
            <p className="text-[var(--color-secondary)]">{card.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
