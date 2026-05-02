import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ADD_ONS = [
  {
    title: "Comprehensive Diet Plan",
    priceLabel: "Add for just $5.00",
  },
  {
    title: "Home Workout Video Library",
    priceLabel: "Add for just $10.00",
  },
] as const;

const SEAL_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAwsFdt4Y3KRiWpqanDqQJOWJrF5kwJ6Qs1qgkp1BAPR8mWgk22nkZg_J319Qla5u7YPHEmu_nwX-DYfrtI_-IsGDSbAcUHT2AUTKJf1ROhk_OJzi78UQqFDu1Sy706piB4IeWpiMroSDeJc7hDMJzfLtGvOgql-RXK0MdLyDwjvXPgn7ION-xj1wh4hK1XACA-072v6PQueIfH6l8weY2g-48GEfyMQUftPqGmCKKcoqbJWE6mdo6LPdHew19JMuuNVeDuw24ruoK2";

const PAYMENT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCt3dENxX6vpeOJ2oJMHNaPrgCKQeHNp7pLnECTJ9U8KSV7l734HeMVYUgdp8QfZII5wyia-U3i7NkPTyO4JYyB7y1gig0N_21K1c1YMg220mjUbHgNzn2edspGC8PgfZ5Xit6g4pjFOZ6xlynBIDIps0S_rRAU0ghPwphZEfmXr5MZKk7_Mx33h2UTEpuSq2suKcJLarKyolsnNRqZZ8Ck3J5lg8DcOsvIzzsrAJusuUSAM9ygmcji-dYmvHIx8SsnYunzhF9CqjqW";

export function YfwlEnrollment() {
  return (
    <ScrollReveal as="section" id="enrollment" className="px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-teal-50 bg-white shadow-2xl md:flex-row">
        <div className="flex-1 bg-emerald-50 p-12">
          <h3 className="yfwl-text-h3 mb-6 text-[color:var(--yfwl-on-surface)]">Complete Enrollment</h3>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[color:var(--yfwl-on-surface)]" htmlFor="yfwl-name">
                Full Name
              </label>
              <input
                id="yfwl-name"
                readOnly
                tabIndex={-1}
                className="w-full rounded-xl border-none bg-white p-4 shadow-sm ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--yfwl-primary)]"
                placeholder="John Doe"
                type="text"
                name="name"
                aria-readonly="true"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[color:var(--yfwl-on-surface)]" htmlFor="yfwl-email">
                Email Address
              </label>
              <input
                id="yfwl-email"
                readOnly
                tabIndex={-1}
                className="w-full rounded-xl border-none bg-white p-4 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--yfwl-primary)]"
                placeholder="john@example.com"
                type="email"
                name="email"
                aria-readonly="true"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[color:var(--yfwl-on-surface)]" htmlFor="yfwl-phone">
                Phone Number
              </label>
              <input
                id="yfwl-phone"
                readOnly
                tabIndex={-1}
                className="w-full rounded-xl border-none bg-white p-4 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--yfwl-primary)]"
                placeholder="+1 (555) 000-0000"
                type="tel"
                name="phone"
                aria-readonly="true"
              />
            </div>
            <div className="space-y-4 py-6">
              <h4 className="font-bold text-sm text-[color:var(--yfwl-primary)]">
                Special Add-ons (One Time Only)
              </h4>
              {ADD_ONS.map(({ title, priceLabel }, idx) => (
                <div
                  key={title}
                  className="flex cursor-not-allowed items-center gap-4 rounded-xl border border-emerald-100 bg-white p-4 opacity-95"
                  aria-disabled="true"
                >
                  <input
                    id={`yfwl-addon-${idx}`}
                    className="h-5 w-5 shrink-0 rounded accent-[color:var(--yfwl-primary)]"
                    type="checkbox"
                    disabled
                    tabIndex={-1}
                    aria-label={`${title} — ${priceLabel}`}
                  />
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold">{title}</div>
                    <div className="text-xs text-[color:var(--yfwl-outline)]">{priceLabel}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              disabled
              className="w-full rounded-xl bg-[color:var(--yfwl-brand-orange)] p-5 text-xl font-bold text-white shadow-lg opacity-95"
              aria-disabled="true"
            >
              Start Your Transformation Today
            </button>
          </form>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-8 bg-white p-12 text-center md:w-80">
          <Image
            src={SEAL_IMG}
            alt="Money back guarantee seal"
            width={128}
            height={128}
            className="h-32 w-32 object-contain"
          />
          <div className="space-y-2">
            <h4 className="font-bold text-[color:var(--yfwl-on-surface)]">7-Day Guarantee</h4>
            <p className="text-xs text-[color:var(--yfwl-outline)]">
              Not happy? We&apos;ll refund every penny. No questions asked. We take all the risk.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Image
              src={PAYMENT_IMG}
              alt="Payment methods"
              width={360}
              height={80}
              className="h-auto w-full opacity-50"
            />
            <p className="text-[10px] text-[color:var(--yfwl-outline)]">
              Secure 256-bit encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
