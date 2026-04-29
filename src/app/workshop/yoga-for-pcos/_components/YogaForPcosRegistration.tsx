import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ADDONS = [
  {
    title: "PCOS Yoga Routine Plan",
    subtitle: "Daily 20-min routine video course",
    price: "$19",
  },
  {
    title: "Hormone Balance Diet Guide",
    subtitle: "30-day meal plan + PCOS-friendly recipes",
    price: "$27",
  },
];

export default function YogaForPcosRegistration() {
  return (
    <ScrollReveal
      className="bg-[var(--color-surface-container-high)] px-6 py-[var(--pcos-section-y)]"
      as="section"
      id="register"
    >
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-[var(--color-surface-lowest)] ambient-shadow">
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-8 text-center text-[var(--color-on-primary)]">
            <h2 className="font-headline-lg">Secure Your Spot</h2>
            <p className="opacity-90">
              Seats are limited to 500 per session to ensure quality Q&amp;A.
            </p>
          </div>
          <div className="space-y-8 p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">
                  Name
                </label>
                <input
                  className="w-full rounded-xl border border-[var(--color-outline-variant)] px-4 py-3 text-[var(--color-on-surface)] outline-none ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="Full Name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">
                  WhatsApp Number
                </label>
                <input
                  className="w-full rounded-xl border border-[var(--color-outline-variant)] px-4 py-3 text-[var(--color-on-surface)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="+91 XXXX XXXX"
                  type="tel"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">
                  Email Address
                </label>
                <input
                  className="w-full rounded-xl border border-[var(--color-outline-variant)] px-4 py-3 text-[var(--color-on-surface)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="email@example.com"
                  type="email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-[rgb(var(--color-primary-rgb)/0.2)] bg-[rgb(var(--color-primary-rgb)/0.05)] p-6">
              <h3 className="font-headline-md mb-4 flex items-center gap-2 text-[var(--color-primary)]">
                <span className="material-symbols-outlined">auto_awesome</span>
                Exclusive One-Time Offer
              </h3>
              <p className="mb-6 text-sm font-medium text-[var(--color-on-surface-variant)]">
                Add these essential guides to your registration for a massive discount (90% Off today):
              </p>
              <div className="space-y-4">
                {ADDONS.map((addon) => (
                  <label
                    key={addon.title}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-lowest)] p-4 transition-colors hover:border-[var(--color-primary)]"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        className="h-5 w-5 rounded border-[var(--color-outline-variant)] text-[var(--color-primary)]"
                        type="checkbox"
                      />
                      <div>
                        <span className="block font-semibold text-[var(--color-on-surface)]">
                          {addon.title}
                        </span>
                        <span className="text-xs text-[var(--color-on-surface-variant)]">
                          {addon.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-[var(--color-primary)]">{addon.price}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="ambient-shadow w-full rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-5 text-lg font-bold text-[var(--color-on-primary)] transition-all hover:brightness-110 active:scale-[0.99]"
            >
              Reserve My Free Seat
            </button>
            <p className="text-center text-xs text-[var(--color-on-surface-variant)]">
              By registering, you agree to our Terms &amp; Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
