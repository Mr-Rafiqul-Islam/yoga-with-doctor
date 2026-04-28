import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PERKS = [
  { id: "live", icon: "video_camera_front", label: "Live HD Stream Access" },
  { id: "pdf", icon: "description", label: "Workshop Workbook (PDF)" },
  { id: "replay", icon: "history", label: "48-Hour Replay Access" },
] as const;

const COUNTDOWN = [
  { id: "days", value: "02", label: "Days" },
  { id: "hours", value: "14", label: "Hours" },
] as const;

export function YogaForWeightLossRegistration() {
  return (
    <ScrollReveal className="bg-[rgb(var(--color-primary-rgb)/0.05)] py-20" id="register">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-2xl md:grid-cols-12">
          <div className="bg-[var(--color-primary)] p-10 text-white md:col-span-5 md:p-12">
            <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              Secure Your Spot
            </h2>
            <p className="mb-8 opacity-80">Next Live Workshop starts in:</p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {COUNTDOWN.map((c) => (
                <div key={c.id} className="rounded-xl bg-white/10 p-4 text-center">
                  <div className="text-2xl font-bold">{c.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest opacity-60">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {PERKS.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary-fixed)]">
                    {p.icon}
                  </span>
                  <span className="text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:col-span-7 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface-variant)]">
                  Full Name
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgb(var(--color-primary-rgb)/0.25)]"
                  placeholder="Hasib Mollah"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface-variant)]">
                  WhatsApp / Phone Number
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgb(var(--color-primary-rgb)/0.25)]"
                  placeholder="01XXXXXXXXX"
                  type="tel"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface-variant)]">
                  Email
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgb(var(--color-primary-rgb)/0.25)]"
                  placeholder="example@gmail.com"
                  type="email"
                />
              </div>

              <div className="rounded-2xl border-2 border-dashed border-[var(--color-secondary-container)] bg-[rgb(252_143_52/0.10)] p-6">
                <div className="flex items-start gap-4">
                  <input
                    id="oso"
                    type="checkbox"
                    className="mt-1.5 h-6 w-6 rounded border-[var(--color-secondary-container)] text-[var(--color-secondary-container)] focus:ring-[var(--color-secondary-container)]"
                  />
                  <label htmlFor="oso" className="cursor-pointer">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="rounded bg-[var(--color-secondary-container)] px-2 py-0.5 text-[10px] font-bold uppercase text-[var(--color-on-secondary-fixed)]">
                        Exclusive Offer
                      </span>
                      <span className="font-bold text-[var(--color-on-secondary-container)]">
                        Add 21-Day Fat Burn Protocol
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-[var(--color-on-secondary-container)] opacity-80">
                      Get Sarah's daily blueprint, meal guide, and morning routines. Normally $97,
                      yours today for <span className="font-bold">$19</span>.
                    </p>
                  </label>
                </div>
              </div>

              <button
                className="w-full rounded-xl bg-[var(--color-secondary-container)] py-5 text-base font-bold text-[var(--color-on-secondary-fixed)] shadow-lg transition-all active:scale-[0.98]"
                type="button"
              >
                Register Free Now
              </button>
              <p className="text-center text-xs text-[var(--color-on-surface-variant)]">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

