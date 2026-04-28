import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { REGISTRATION } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureRegistration() {
  return (
    <ScrollReveal className="px-6 py-16" as="section" id="register">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
            {REGISTRATION.title}
          </h2>
          <p className="mb-8 text-lg leading-[1.6] text-[var(--color-secondary)]">{REGISTRATION.body}</p>
          <div className="space-y-4">
            {REGISTRATION.checklist.map((line) => (
              <div key={line} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-primary)]">check</span>
                <span className="text-[var(--color-on-surface)]">{line}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--color-border-card)] bg-white p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">
                Full Name
              </label>
              <input
                readOnly
                placeholder="Enter your name"
                type="text"
                className="h-14 w-full rounded-xl border border-transparent bg-[var(--color-surface-container-low)] px-4 text-[var(--color-on-surface)] outline-none ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">
                Email Address
              </label>
              <input
                readOnly
                placeholder="email@example.com"
                type="email"
                className="h-14 w-full rounded-xl border border-transparent bg-[var(--color-surface-container-low)] px-4 text-[var(--color-on-surface)] outline-none ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">
                WhatsApp Number (For reminders)
              </label>
              <input
                readOnly
                placeholder="+1 (555) 000-0000"
                type="tel"
                className="h-14 w-full rounded-xl border border-transparent bg-[var(--color-surface-container-low)] px-4 text-[var(--color-on-surface)] outline-none ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:ring-2"
              />
            </div>
            <div className="rounded-2xl border-2 border-dashed border-[var(--color-tertiary-fixed)] bg-[rgb(255_219_201/0.3)] p-6">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-[var(--color-tertiary)]">
                <span className="material-symbols-outlined">celebration</span>
                {REGISTRATION.offerTitle}
              </h4>
              <div className="flex items-start gap-4">
                <input
                  readOnly
                  id="hbp-offer"
                  type="checkbox"
                  className="mt-1 rounded border-[var(--color-outline)] text-[var(--color-primary)]"
                />
                <label htmlFor="hbp-offer" className="text-sm leading-tight text-[var(--color-secondary)]">
                  <span className="font-bold text-[var(--color-on-surface)]">BP Control Yoga Routine</span> -
                  Get our premium 21-day video series and guide. Usually $97, only{" "}
                  <span className="font-bold text-[var(--color-tertiary)]">$19</span> today.
                </label>
              </div>
            </div>
            <button
              type="button"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] font-bold text-[var(--color-on-primary)] transition-all hover:brightness-110"
            >
              {REGISTRATION.submitLabel}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-[10px] text-slate-400">{REGISTRATION.disclaimer}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
