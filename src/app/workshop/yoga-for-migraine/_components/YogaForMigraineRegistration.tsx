import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForMigraineRegistration() {
  return (
    <ScrollReveal className="bg-surface-container-low py-20" id="register">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-outline-variant bg-white p-8 shadow-2xl md:p-10">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-error-container px-4 py-2 text-xs font-bold text-on-error-container">
              <span className="material-symbols-outlined text-sm">alarm</span>
              LIMITED SEATS: CLASS STARTS IN 02:44:12
            </div>
            <h2 className="mb-2 text-3xl font-semibold leading-tight md:text-4xl">
              Claim Your Free Spot
            </h2>
            <p className="text-secondary">Join 400+ others registered for this week&apos;s cohort.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary">Full Name</label>
                <input
                  type="text"
                  placeholder="Abu Hurayrah"
                  className="w-full rounded-lg border border-outline-variant bg-slate-50 px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary">Phone (WhatsApp)</label>
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-lg border border-outline-variant bg-slate-50 px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-secondary">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg border border-outline-variant bg-slate-50 px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <input
                    id="oso"
                    type="checkbox"
                    className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                </div>
                <label htmlFor="oso" className="flex-1 cursor-pointer">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="font-bold text-on-surface">
                      ONE-TIME OFFER: Personal Migraine Audit
                    </span>
                    <span className="font-bold text-primary">
                      $19{" "}
                      <span className="text-xs font-normal text-secondary line-through">$99</span>
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary">
                    Get a 15-minute personalized trigger analysis with a senior therapist immediately
                    after the workshop. Only available now.
                  </p>
                  <span className="mt-2 inline-block rounded bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
                    80% DISCOUNT APPLIED
                  </span>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-[#e86c6e] py-4 text-xl font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
            >
              REGISTER FOR FREE NOW
            </button>
            <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-secondary">
              Secure Registration • No Credit Card Required for Workshop
            </p>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}

