import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const offers = [
  {
    title: "Shoulder Mobility Routine (Video)",
    price: "$19",
    description: "A 15-min daily follow-along routine.",
  },
  {
    title: "7-Day Recovery Meal Plan (PDF)",
    price: "$27",
    description: "Anti-inflammatory recipes for joint health.",
  },
];

const paymentIcons = [
  {
    alt: "Paypal",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0J54HVoajOVguSd6GU6fPA3z4OAZ2IBjthyHN68PYxFMYAEz3G6dSL491taBXOH7ny4RUmlopkPCN56i58q3dx1Rlgjv_KoNby-OPcZxckzNXRivhwsnX3QacXLhUp-6luUv6ECp3v5sJctWDLX2BZ-LshFCnyGaZQyhnht-lBgbpa_c-qN1JfctBbo2wCPWhLNgDPnx3NehUKOj3LX038cSRBPqCXRncv2y4aT3Bj369Bq-dhmWMEhKDe2LWn8LXg4LXjZ3L9OyX",
    className: "h-6",
  },
  {
    alt: "Mastercard",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAleGxYEedVIqKQ5aeHohAETjZM7tUODKW_7A7hB56JeFpputZcPCf5J7zdRGz4hBzBbQ8pnU4UejbAlxT1bpO1OqJkK6o1fbYVn-CnfXYRPby9u2nAhrdwCtHCcYm0w--nrP6-095Ot_gDUfrSyyp1m-BqWLY_8xeFtwu3HlkfaqHX9Ish1HsqjMpFXkQ4WjniBkC_fqJ_0_7AU4zwqtIHvuNt52uBsb0VM6_N-nhn0MYyUwEXfgV17cJ1-2Fgnq8AdKRgAazY5x8",
    className: "h-6",
  },
  {
    alt: "Visa",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv9moU0KMH4LVygkq1jd3AzmoD40nCQTiftlK0ZzWq4jFExOCTUf_1TZ5xn34HUFmyrOn4_eJ9D_8lHTOz8AoyJUdrlw2w6Dal_rl9LF-4DyA4kxboFOzcSti63D4aDMneeRNTWvyp6luICkttqEqrMNnTx91D3mFj_C-Kxamb0rG1rV-2MxNUuCtVpb5nPco4fyBCfxwwU-9RAAA2QEqmjqgLniwZP70lr_8vZDqgKzNHakGxO-sp5f1ijPIldJWQaXW0eS2SJVVh",
    className: "h-4",
  },
];

export function YogaForFrozenShoulderRegistration() {
  return (
    <ScrollReveal id="register" className="bg-[var(--color-surface-bright)] px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-12">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-[var(--color-on-surface)] md:text-4xl">Secure Your Free Spot</h2>
          <p className="text-[var(--color-on-surface-variant)]">Limited to 100 participants to ensure quality Q&amp;A time.</p>
          <div className="mt-4 flex items-center justify-center gap-2 font-bold text-[var(--color-error)]">
            <span className="material-symbols-outlined">timer</span>
            <span>Only 12 seats remaining!</span>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border-0 bg-[var(--color-surface-container)] p-4"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">WhatsApp Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border-0 bg-[var(--color-surface-container)] p-4"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border-0 bg-[var(--color-surface-container)] p-4"
            />
          </div>

          <div className="mt-8 rounded-2xl border-2 border-dashed border-[var(--color-primary-container)] bg-[rgb(var(--color-secondary-container-rgb)/0.3)] p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-[var(--color-primary)]">celebration</span>
              <h3 className="text-lg font-bold text-[var(--color-primary)]">Special One-Time Offer</h3>
            </div>
            <p className="mb-6 text-sm text-[var(--color-on-secondary-container)]">
              Get these recovery tools at 70% off when you register for the free workshop today.
            </p>

            <div className="space-y-4">
              {offers.map((offer) => (
                <label key={offer.title} className="flex cursor-pointer items-center gap-4 rounded-xl bg-white p-4 transition hover:shadow-md">
                  <input type="checkbox" className="h-6 w-6 rounded border-[var(--color-outline)]" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-bold text-[var(--color-on-surface)]">{offer.title}</span>
                      <span className="font-bold text-[var(--color-primary)]">{offer.price}</span>
                    </div>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">{offer.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="cta-shadow mt-2 w-full rounded-full bg-[var(--color-tertiary-container)] py-5 text-xl font-bold text-white transition hover:brightness-105"
          >
            Register &amp; Save My Spot
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-4 opacity-60 grayscale">
          {paymentIcons.map((icon) => (
            <img key={icon.alt} alt={icon.alt} src={icon.src} className={icon.className} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
