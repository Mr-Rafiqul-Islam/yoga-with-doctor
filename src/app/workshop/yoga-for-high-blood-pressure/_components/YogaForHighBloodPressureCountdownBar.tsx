import { Fragment } from "react";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { COUNTDOWN_SEGMENTS } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureCountdownBar() {
  return (
    <ScrollReveal className="bg-[var(--color-secondary-container)] py-6" as="section">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 px-6 md:flex-row">
        <span className="flex items-center gap-2 text-2xl font-semibold leading-[1.4] text-[var(--color-primary)]">
          <span className="material-symbols-outlined">alarm</span>
          Next Workshop Starts In:
        </span>
        <div className="flex items-center gap-4">
          {COUNTDOWN_SEGMENTS.map((seg, i) => (
            <Fragment key={seg.label}>
              {i > 0 ? (
                <span className="text-2xl font-bold text-[var(--color-on-surface)]">:</span>
              ) : null}
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[var(--color-on-surface)]">{seg.value}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-on-surface)]">
                  {seg.label}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
