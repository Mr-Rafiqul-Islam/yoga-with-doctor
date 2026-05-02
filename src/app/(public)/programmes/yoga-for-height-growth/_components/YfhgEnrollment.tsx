import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BUMPS = [
  {
    id: "yfhg-bump-1",
    border: "border-[color:var(--color-primary)]",
    bg: "bg-[color:var(--color-primary)]/5",
    title: "Add Height Nutrition Guide (+$5)",
    subtitle: "The 7 foods that boost growth hormones naturally.",
  },
  {
    id: "yfhg-bump-2",
    border: "border-[color:var(--color-secondary)]",
    bg: "bg-[color:var(--color-secondary)]/5",
    title: "Advanced Posture Plan (+$10)",
    subtitle: "Secret hacks for standing taller in photos and public.",
  },
] as const;

export function YfhgEnrollment() {
  return (
    <ScrollReveal
      className="scroll-mt-28 bg-[color:var(--color-surface-container-low)] px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]"
      id="checkout"
    >
      <div className="mx-auto grid max-w-5xl gap-[var(--yfhg-space-lg)] overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-2xl md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h2 className="yfhg-headline-lg mb-8 text-[color:var(--color-on-background)]">Enrollment Details</h2>
          <div aria-label="Enrollment fields" className="space-y-6" role="group">
            <div>
              <label className="yfhg-font-label mb-2 block text-sm font-bold" htmlFor="yfhg-name">
                Full Name
              </label>
              <input
                readOnly
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/25"
                id="yfhg-name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div>
              <label className="yfhg-font-label mb-2 block text-sm font-bold" htmlFor="yfhg-email">
                Email Address
              </label>
              <input
                readOnly
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/25"
                id="yfhg-email"
                placeholder="email@example.com"
                type="email"
              />
            </div>
            <div>
              <label className="yfhg-font-label mb-2 block text-sm font-bold" htmlFor="yfhg-phone">
                Phone Number
              </label>
              <input
                readOnly
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/25"
                id="yfhg-phone"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            <div className="space-y-4 pt-4">
              {BUMPS.map((b) => (
                <div
                  key={b.id}
                  className={`flex items-center rounded-2xl border p-4 ${b.border} ${b.bg}`}
                >
                  <input
                    aria-label={b.title}
                    className="h-6 w-6 shrink-0 rounded border-slate-300 text-[color:var(--color-primary)] focus:ring-[color:var(--color-primary)]"
                    disabled
                    id={b.id}
                    type="checkbox"
                  />
                  <label className="ml-4 cursor-default" htmlFor={b.id}>
                    <span className="yfhg-font-label block text-sm font-bold">{b.title}</span>
                    <span className="text-xs text-[color:var(--color-on-surface-variant)]">{b.subtitle}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[color:var(--color-surface-container)] p-8 text-center md:p-12">
          <div className="mb-8">
            <span className="mb-4 inline-block rounded-full bg-[color:var(--color-primary)] p-4 text-white">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
            </span>
            <h3 className="yfhg-headline-md mb-2 text-[color:var(--color-on-background)]">Secure Checkout</h3>
            <p className="text-[color:var(--color-on-surface-variant)]">100% Encrypted SSL Connection</p>
          </div>
          <div className="mb-8 space-y-4">
            <div className="flex justify-between yfhg-font-label font-bold">
              <span>Total Investment:</span>
              <span className="text-2xl">$47.00</span>
            </div>
            <button
              className="yfhg-display w-full rounded-2xl bg-[color:var(--color-tertiary-container)] py-6 text-2xl font-black text-white shadow-[0_4px_0_0_#8b5000] transition-all active:translate-y-0.5"
              type="button"
            >
              START GROWTH NOW
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4 text-left">
              <span className="material-symbols-outlined shrink-0 text-4xl text-[color:var(--color-error)]">
                verified
              </span>
              <div>
                <p className="yfhg-font-label text-sm font-bold">7-Day Money-Back Guarantee</p>
                <p className="text-xs text-[color:var(--color-on-surface-variant)]">
                  Zero risk. If you don&apos;t feel taller, we refund you 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
