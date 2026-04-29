import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { REGISTRATION } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthRegistration() {
  return (
    <ScrollReveal className="px-6 py-20" as="section" id="register">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[3rem] border border-[var(--color-surface-variant)] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="space-y-6 p-8 md:p-20">
              <h2 className="text-4xl font-bold tracking-[-0.01em] text-[var(--color-on-surface)]">{REGISTRATION.title}</h2>

              <div className="flex items-center gap-4 rounded-2xl border border-[rgb(225_133_0/0.20)] bg-[rgb(225_133_0/0.10)] p-4">
                <span className="material-symbols-outlined animate-pulse text-[var(--color-tertiary)]">timer</span>
                <p className="font-label text-sm uppercase tracking-widest text-[var(--color-on-tertiary-container)]">
                  {REGISTRATION.urgencyLabel}
                </p>
              </div>

              <div className="space-y-4">
                {REGISTRATION.fields.map((field) => (
                  <div key={field.label} className="space-y-2">
                    <label className="font-label block px-1 text-sm">{field.label}</label>
                    <input
                      readOnly
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-14 w-full rounded-2xl border-none bg-[var(--color-surface-container-low)] px-6 outline-none ring-[var(--color-primary)] focus:ring-2"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border-2 border-dashed border-[rgb(51_160_253/0.30)] bg-[rgb(51_160_253/0.10)] p-6">
                <h3 className="font-label mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                  EXCLUSIVE ONE-TIME OFFERS
                </h3>
                <div className="space-y-4">
                  {REGISTRATION.offers.map((offer) => (
                    <label key={offer.title} className="flex items-center gap-4 rounded-2xl bg-white p-4">
                      <input readOnly type="checkbox" className="h-6 w-6 rounded border-[var(--color-surface-dim)]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label font-semibold">{offer.title}</span>
                          <span className="font-label font-bold text-[var(--color-secondary)]">{offer.price}</span>
                        </div>
                        <p className="text-xs text-[var(--color-on-surface-variant)]">{offer.body}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="font-label mt-4 w-full rounded-3xl bg-[var(--color-primary)] py-6 text-lg font-semibold text-white shadow-xl transition-all hover:scale-[1.02]"
              >
                {REGISTRATION.cta}
              </button>
              <p className="text-center text-xs text-[var(--color-on-surface-variant)]">{REGISTRATION.note}</p>
            </div>

            <aside className="relative hidden overflow-hidden lg:block">
              <Image src={REGISTRATION.sideImage} alt="Yoga session" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_110_28/0.80)] to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="mb-4 text-4xl font-extrabold italic">Growth is a choice. Zenith Yoga is the path.</p>
                <p className="font-label text-sm tracking-widest">ZENITH ACTIVE METHOD</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
