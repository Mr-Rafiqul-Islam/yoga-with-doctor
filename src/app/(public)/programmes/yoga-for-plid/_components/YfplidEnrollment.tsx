import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BUMPS = [
  {
    title: "Yes! Add PLID Pain Relief Guide (+$49)",
    body: "Instant digital PDF with 50 specific ergonomic tips for your home and office.",
  },
  {
    title: "Yes! Daily Spine Exercise Plan (+$99)",
    body: "A physical calendar and exercise log sent to your email to track your 30-day progress.",
  },
];

export function YfplidEnrollment() {
  return (
    <ScrollReveal className="px-6 py-16" id="enrollment">
      <div className="mx-auto max-w-7xl rounded-3xl border border-teal-50 bg-white p-8 yfplid-shadow-soft md:p-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="yfplid-text-h2 text-[color:var(--yfplid-primary)]">Secure Enrollment</h2>
            <p className="yfplid-text-body-lg">
              Complete your details to get instant access to the digital course and community.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-[color:rgba(0,122,126,0.05)] p-4">
                <span className="material-symbols-outlined text-[color:var(--yfplid-primary)]" aria-hidden>
                  verified_user
                </span>
                <span className="text-sm font-semibold">
                  SSL Secured 256-bit Payment Encryption
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-[color:rgba(0,122,126,0.05)] p-4">
                <span className="material-symbols-outlined text-[color:var(--yfplid-primary)]" aria-hidden>
                  verified
                </span>
                <span className="text-sm font-semibold">
                  7-Day &quot;No Questions Asked&quot; Money Back Guarantee
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[color:var(--yfplid-secondary)]" htmlFor="yfplid-name">
                Full Name
              </label>
              <input
                id="yfplid-name"
                name="fullName"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                className="w-full rounded-xl border border-[color:var(--yfplid-outline-variant)] bg-[color:var(--yfplid-surface-container-low)] p-4 outline-none focus:border-[color:var(--yfplid-primary)] focus:ring-2 focus:ring-[color:var(--yfplid-primary)]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[color:var(--yfplid-secondary)]" htmlFor="yfplid-email">
                Email Address
              </label>
              <input
                id="yfplid-email"
                name="email"
                type="email"
                placeholder="email@example.com"
                autoComplete="email"
                className="w-full rounded-xl border border-[color:var(--yfplid-outline-variant)] bg-[color:var(--yfplid-surface-container-low)] p-4 outline-none focus:border-[color:var(--yfplid-primary)] focus:ring-2 focus:ring-[color:var(--yfplid-primary)]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[color:var(--yfplid-secondary)]" htmlFor="yfplid-phone">
                Phone Number
              </label>
              <input
                id="yfplid-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
                className="w-full rounded-xl border border-[color:var(--yfplid-outline-variant)] bg-[color:var(--yfplid-surface-container-low)] p-4 outline-none focus:border-[color:var(--yfplid-primary)] focus:ring-2 focus:ring-[color:var(--yfplid-primary)]"
              />
            </div>
            <div className="space-y-4 rounded-xl border-2 border-dashed border-[color:var(--yfplid-tertiary-container)] bg-[color:rgba(160,92,50,0.1)] p-6">
              {BUMPS.map(({ title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-[color:var(--yfplid-tertiary-container)] text-[color:var(--yfplid-tertiary-container)] focus:ring-[color:var(--yfplid-tertiary-container)]"
                    aria-label={title}
                  />
                  <div>
                    <p className="font-bold text-[color:var(--yfplid-tertiary-container)]">{title}</p>
                    <p className="text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="w-full rounded-2xl bg-[color:var(--yfplid-tertiary-container)] py-6 text-xl font-bold uppercase tracking-wide text-white shadow-lg transition-opacity hover:opacity-90"
            >
              Complete My Order
            </button>
            <p className="text-center text-xs text-[color:var(--yfplid-secondary)]">
              By clicking above, you agree to our terms of service and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
