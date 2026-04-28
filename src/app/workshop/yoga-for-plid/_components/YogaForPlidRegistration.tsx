import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const OFFERS = [
  {
    id: "offer1",
    title: "PLID Home Recovery Plan",
    price: "$19",
    body: "Step-by-step PDF guide + 5 instructional videos. (Value $99)",
  },
  {
    id: "offer2",
    title: "Guided Yoga Routine + Diet Guide",
    price: "$9",
    body: "15-min daily routine + Anti-inflammatory recipes.",
  },
] as const;

export function YogaForPlidRegistration() {
  return (
    <ScrollReveal
      className="bg-[rgb(var(--color-primary-rgb)/0.05)] px-8 py-20"
      as="section"
      id="register"
    >
      <div className="mx-auto grid max-w-[1280px] items-start gap-16 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Secure Your Spot in the Free Workshop
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            Join thousands of others who have reclaimed their lives from back pain. Registration
            takes less than 30 seconds.
          </p>

          <div className="premium-shadow rounded-xl border border-[rgb(var(--color-primary-rgb)/0.10)] bg-white p-4">
            <div className="flex items-center gap-4 font-bold text-[var(--color-primary)]">
              <span className="material-symbols-outlined">schedule</span>
              <span>Next Session: This Saturday at 10:00 AM EST</span>
            </div>
          </div>
        </div>

        <div className="premium-shadow rounded-2xl border border-[var(--color-outline-variant)] bg-white p-8 shadow-2xl md:p-10">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold">Your Full Name</label>
              <input
                className="w-full rounded-lg border-2 border-transparent bg-[var(--color-surface-container-low)] px-4 py-3 outline-none transition-all focus:border-[var(--color-primary)]"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Phone Number</label>
              <input
                className="w-full rounded-lg border-2 border-transparent bg-[var(--color-surface-container-low)] px-4 py-3 outline-none transition-all focus:border-[var(--color-primary)]"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Email</label>
              <input
                className="w-full rounded-lg border-2 border-transparent bg-[var(--color-surface-container-low)] px-4 py-3 outline-none transition-all focus:border-[var(--color-primary)]"
                placeholder="example@gmail.com"
                type="email"
              />
            </div>

            <button
              className="w-full rounded-full bg-[var(--color-tertiary-container)] py-4 text-lg font-bold text-[var(--color-on-tertiary)] shadow-lg shadow-[rgb(var(--color-tertiary-container-rgb)/0.30)] transition-transform active:scale-[0.98]"
              type="button"
            >
              Reserve My Free Seat
            </button>

            <div className="mt-8 space-y-4 border-t border-[rgb(var(--color-outline-variant-rgb)/0.30)] pt-8">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)]">
                Exclusive One-Time Offers
              </p>

              {OFFERS.map((o) => (
                <div
                  key={o.id}
                  className="flex items-start gap-4 rounded-xl border border-[var(--color-secondary-container)] bg-[rgb(211_226_237/0.20)] p-4"
                >
                  <input
                    className="mt-1 h-5 w-5 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    type="checkbox"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-bold">{o.title}</p>
                      <span className="font-bold text-[var(--color-primary)]">{o.price}</span>
                    </div>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">{o.body}</p>
                  </div>
                </div>
              ))}

              <p className="text-center text-[10px] text-[var(--color-on-surface-variant)]">
                Secure checkout powered by Stripe. SSL Encrypted.
              </p>
            </div>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}

