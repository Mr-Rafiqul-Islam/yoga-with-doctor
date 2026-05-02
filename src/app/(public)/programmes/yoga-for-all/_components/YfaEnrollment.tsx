import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ORDER_BUMPS = [
  {
    title: "YES! Add 7-Day Meditation Guide (+$17)",
    sub: "Enhance your yoga results with guided mindfulness for deeper sleep.",
  },
  {
    title: "YES! Add Home Yoga Mat Routine (+$12)",
    sub: "A printable poster with 12 essential poses for quick reference.",
  },
];

const NEXT_STEPS = [
  { icon: "mail" as const, text: "Instant email with login credentials" },
  { icon: "play_circle" as const, text: "Immediate access to Module 1" },
  { icon: "groups" as const, text: "Welcome link to the student community" },
];

export function YfaEnrollment() {
  return (
    <ScrollReveal className="bg-white px-6 py-16" delay={0.04} id="checkout">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="yfa-text-h3 mb-6 text-[color:var(--yfa-primary)]">Complete Your Enrollment</h3>
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold text-[color:var(--yfa-secondary)]" htmlFor="yfa-name">
                  Full Name
                </label>
                <input
                  className="w-full rounded-xl border border-[color:var(--yfa-outline-variant)] p-4 outline-none focus:border-transparent focus:ring-2 focus:ring-[color:var(--yfa-primary)]"
                  id="yfa-name"
                  name="fullName"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-[color:var(--yfa-secondary)]" htmlFor="yfa-email">
                  Email Address
                </label>
                <input
                  className="w-full rounded-xl border border-[color:var(--yfa-outline-variant)] p-4 outline-none focus:border-transparent focus:ring-2 focus:ring-[color:var(--yfa-primary)]"
                  id="yfa-email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-[color:var(--yfa-secondary)]" htmlFor="yfa-phone">
                  Phone Number
                </label>
                <input
                  className="w-full rounded-xl border border-[color:var(--yfa-outline-variant)] p-4 outline-none focus:border-transparent focus:ring-2 focus:ring-[color:var(--yfa-primary)]"
                  id="yfa-phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
              <div className="space-y-4 pt-4">
                {ORDER_BUMPS.map(({ title, sub }) => (
                  <label
                    key={title}
                    className="flex cursor-pointer items-start gap-4 rounded-xl border-2 border-dashed border-[color:var(--yfa-tertiary-container)] bg-[color:var(--yfa-tertiary-fixed)]/20 p-4"
                  >
                    <input className="mt-1 h-5 w-5 rounded text-[color:var(--yfa-tertiary)] focus:ring-[color:var(--yfa-tertiary)]" type="checkbox" />
                    <div>
                      <p className="font-bold text-[color:var(--yfa-tertiary)]">{title}</p>
                      <p className="text-xs text-[color:var(--yfa-secondary)]">{sub}</p>
                    </div>
                  </label>
                ))}
              </div>
              <button
                className="w-full rounded-2xl bg-[color:var(--yfa-tertiary)] py-6 text-xl font-bold text-white shadow-xl shadow-[color:var(--yfa-tertiary)]/20"
                type="button"
              >
                Complete My Order
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-[color:var(--yfa-primary)]/10 bg-[color:var(--yfa-surface-container-low)] p-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-5xl text-[color:var(--yfa-primary)]">
                  verified_user
                </span>
                <h4 className="yfa-text-h3 !text-xl">100% Peace of Mind Guarantee</h4>
              </div>
              <p className="text-sm leading-relaxed text-[color:var(--yfa-secondary)]">
                Try the Yoga For All course for 7 full days. If you don&apos;t feel more relaxed, more flexible, and
                more in control of your health, just send us a quick email. We&apos;ll refund every penny, no questions
                asked.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-[color:var(--yfa-primary-fixed)] p-8">
              <h4 className="mb-4 font-bold text-[color:var(--yfa-on-surface)]">What happens next?</h4>
              <ul className="space-y-4 text-sm text-[color:var(--yfa-secondary)]">
                {NEXT_STEPS.map(({ icon, text }) => (
                  <li key={text} className="flex gap-3">
                    <span className="material-symbols-outlined text-[color:var(--yfa-primary)]">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
