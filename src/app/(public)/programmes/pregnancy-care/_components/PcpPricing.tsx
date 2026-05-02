import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const VALUE_ROWS = [
  { label: "30-Day Guided Yoga Core Program", value: "$199" },
  { label: "Phase-Specific Trimester Plans", value: "$149" },
  { label: "Deep Relaxation & Breathwork Vault", value: "$99" },
  { label: "Safe Care Physical Guidelines (E-Book)", value: "$49" },
  { label: "Private Motherhood Support Group", value: "BONUS", emphasize: true },
] as const;

const ORDER_BUMPS = [
  { title: "Add Personalized Pregnancy Diet Plan", sub: "Only $5 Today" },
  { title: "Complete Breathing & Relaxation Guide", sub: "Only $10 Today" },
] as const;

export function PcpPricing() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[color:var(--color-surface-container-low)] py-24"
      delay={0.14}
      id="checkout"
    >
      <div className="relative mx-auto max-w-4xl px-8">
        <div className="overflow-hidden rounded-[3rem] border border-[color:var(--color-primary-container)]/20 bg-white shadow-2xl">
          <div className="space-y-4 bg-[color:var(--color-primary)] p-12 text-center text-[color:var(--color-on-primary)]">
            <div className="inline-block rounded-full bg-white/20 px-4 py-1 pcp-label-caps tracking-widest text-[color:inherit]">
              Enrollment Open
            </div>
            <h2 className="pcp-text-h2 text-[color:inherit]">Your Sanctuary Awaits</h2>
            <p className="pcp-text-body-md opacity-80">Full access to the comprehensive pregnancy care system.</p>
          </div>
          <div className="space-y-8 p-12">
            <div className="space-y-4">
              {VALUE_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-b border-[color:var(--color-surface-variant)] py-3"
                >
                  <span className="pcp-text-body-md text-[color:var(--color-on-surface)]">{row.label}</span>
                  <span
                    className={`font-[family-name:var(--font-body)] text-base ${
                      "emphasize" in row && row.emphasize
                        ? "font-bold text-[color:var(--color-secondary)]"
                        : "text-[color:var(--color-tertiary)] line-through"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="py-8 text-center">
              <p className="pcp-label-caps mb-1 text-[color:var(--color-tertiary)] line-through">Total Value: $496</p>
              <p className="pcp-text-hero text-[color:var(--color-primary)]">$147</p>
              <p className="pcp-label-caps mt-1 font-bold text-[color:var(--color-secondary)]">
                Limited Enrollment Price
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  readOnly
                  aria-label="Full name (preview)"
                  className="w-full rounded-xl border-none bg-[color:var(--color-surface-container)] px-6 py-4 placeholder:text-[color:var(--color-tertiary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-secondary)]/20"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  readOnly
                  aria-label="Phone (preview)"
                  className="w-full rounded-xl border-none bg-[color:var(--color-surface-container)] px-6 py-4 placeholder:text-[color:var(--color-tertiary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-secondary)]/20"
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
              <input
                readOnly
                aria-label="Email (preview)"
                className="w-full rounded-xl border-none bg-[color:var(--color-surface-container)] px-6 py-4 placeholder:text-[color:var(--color-tertiary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-secondary)]/20"
                placeholder="Email Address"
                type="email"
              />
              <div className="space-y-3">
                {ORDER_BUMPS.map((bump) => (
                  <label
                    key={bump.title}
                    className="flex cursor-pointer items-center gap-4 rounded-2xl border border-[color:var(--color-secondary)]/20 bg-[color:var(--color-secondary-container)]/10 p-4 transition-colors hover:bg-[color:var(--color-secondary-container)]/20"
                  >
                    <input className="h-5 w-5 rounded-md text-[color:var(--color-secondary)]" type="checkbox" />
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-body)] text-sm font-medium">{bump.title}</p>
                      <p className="text-xs text-[color:var(--color-secondary-fixed-dim)]">{bump.sub}</p>
                    </div>
                  </label>
                ))}
              </div>
              <button
                className="w-full rounded-full bg-[color:var(--color-primary)] py-5 font-[family-name:var(--font-body)] text-lg font-medium text-[color:var(--color-on-primary)] shadow-xl shadow-[color:var(--color-primary)]/20 transition-all hover:scale-[1.02] active:scale-95"
                type="button"
              >
                Complete Enrollment Now
              </button>
              <div className="flex justify-center gap-8 pt-4 opacity-40 grayscale">
                <span className="material-symbols-outlined text-4xl">lock</span>
                <span className="material-symbols-outlined text-4xl">verified</span>
                <span className="material-symbols-outlined text-4xl">payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
