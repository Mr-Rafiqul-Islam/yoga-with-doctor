import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAYMENT_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpA5sLBLFOcY6A2u1WoPfhx-IwPYcqw379amcd-iMkynq1Vsssq41BbK2TEsnOjMmXs0tuc8pTWCtmFk4HD2v1kPutbVllymcvZC86mGE0g1Dua7G4ViDGS0VJoHIeGc0JBkhrowqzW6RYALHrf4Fi9XZ6v9wOHQm-jLijmZs9U3nsRdkdp6HpwHvRtxl4KXYzhuvn5b8f-vJa3s2z4PsJRH8dh5icB7zAcMjqxR6lN6CK1B7srEDMduKDZ_4JL36sw8Gqkk1_rCKq",
    alt: "Visa",
    className: "h-6 w-auto",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5iTgXoYAFHQR3H_CTevkb9BKhpmrAj_vps0LRJ8EOtpXeNHzxMDpUgL7a1lENRapqib8DhvT5Ir_f-ZG7a9u_wreLiO6X8IYOI8jgFC_kMyg4JQHtGNYtwcu4MRjR_Ig5GXx4K77pGDnQpWk2COSraKTRQkZhVfNi3v8RtNkBKekR-2XxIAJPGmF0pC8NS7Lj24zibKzU9R4YFLSZYV1hRTnlasvjpzDKts7Fj0_a-bxmsq7vQ_thgd9NB1rOuQ94H5j3PJquHxyV",
    alt: "Mastercard",
    className: "h-8 w-auto",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBodik8lBaSvxwPHJhN6CmR1Lt_lR_H52gVC9p7n7mWB6bhNxH-4eKEjUbTdZqRINuGV2w_4aPcle6P1-oQEabUbL5Yk3Gv_SKI0rifcbY9vnK0DbYjRglB59W1w1xMi-jALycZB_EiSWxzGhQOmOcPh7o_h3055K-l3xR5j_iZbjWY9B2vNeIu18tjzSbd1KWr_crABWIWdZ-WPpQieXyYJC8eebDitbOZ7PN8qtgpcksLKBmwAiSCj--NTtq_fnMZVkVGdCUHJX7W",
    alt: "PayPal",
    className: "h-6 w-auto",
  },
] as const;

const SEAL_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9btb8JlxZ03QOzPXzY9C8jzX1eRIxdPeg9CZWNPm4owPcRujzq2bEKz-qv6BnjISkuClTSfAjZ805HlBKohVLS2semeJORzyHyaEMNkKYtvW-2BbHn5Fdz0t6vw5xHMaroZ6s8ARQitXnm2VxRqlL1SNOXd1PTtgNO-kWJPYHMsgAK08edmmALwvn_-KwtWBHDaydeHRSpw-htBBFIFkaxksj3NfBxSSMbSHRpqwAP9BHFbpfEe2l8pRU4dcS9BJxVPlcu8XTQS5d";

const DOCTOR_HEAD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNuLQTATHrdpbix94zBp3eoimgd8eBw5sPXudPmdO7pIC0Vkj4gqOT6flwgm42ub_E93LoViIVWGDIjfuvfLjLyjIRYvn8Z9UOScb7I5YeResH1za3sJjxLQk9hN4JYDss_YZhsk5HtTCEOsl_A3nra0FWOvJD3X0lYhRe9kh1UFmPLEenbQKOZowVOu43KXwKh48f7IUgul_l2WFwAssffTlOoFJwIohINKNd1U3jejBpBNNZmixQASe6l4lAU1NtTDlqaHLllWaA";

const BUMPS = [
  {
    border: "border-[color:var(--yfd-secondary)]",
    bg: "bg-[color:var(--yfd-secondary)]/5",
    titleClass: "font-bold text-[color:var(--yfd-secondary)]",
    title: "YES! Add the Diabetes Diet Plan ($499 Value) for only $19!",
    desc: "Our 100-page recipe book specifically designed for metabolic health.",
    ring: "text-[color:var(--yfd-secondary)] focus:ring-[color:var(--yfd-secondary)]",
  },
  {
    border: "border-[color:var(--yfd-primary)]",
    bg: "bg-[color:var(--yfd-primary)]/5",
    titleClass: "font-bold text-[color:var(--yfd-primary)]",
    title: "YES! Add the Daily Sugar Tracking Template ($999 Value) for $7!",
    desc: "The exact spreadsheet Dr. Chen uses with her private concierge patients.",
    ring: "text-[color:var(--yfd-primary)] focus:ring-[color:var(--yfd-primary)]",
  },
] as const;

export function YfdCheckout() {
  return (
    <ScrollReveal
      id="pricing"
      className="scroll-mt-24 px-5 py-12 md:py-16 bg-[color:var(--yfd-surface-container-high)]"
      delay={0.45}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="yfd-text-headline-xl mb-4 text-[color:var(--yfd-primary)]">Final Enrollment Step</h2>
          <p className="yfd-text-body-lg text-[color:var(--yfd-on-surface-variant)]">
            Lock in your 95% discount before the timer hits zero.
          </p>
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="yfd-shadow-soft rounded-3xl bg-white p-8 md:p-10">
            <h3 className="yfd-text-headline-md mb-8">Secure Checkout</h3>
            <form className="space-y-6">
              <div>
                <label className="yfd-text-label-sm mb-2 block text-[color:var(--yfd-primary)]">Full Name</label>
                <input
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none ring-[color:var(--yfd-primary)] focus:border-[color:var(--yfd-primary)] focus:ring-2"
                  placeholder="John Doe"
                  type="text"
                  readOnly
                  tabIndex={-1}
                  aria-readonly="true"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="yfd-text-label-sm mb-2 block text-[color:var(--yfd-primary)]">Email Address</label>
                  <input
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[color:var(--yfd-primary)] focus:ring-2 focus:ring-[color:var(--yfd-primary)]"
                    placeholder="john@example.com"
                    type="email"
                    readOnly
                    tabIndex={-1}
                    aria-readonly="true"
                  />
                </div>
                <div>
                  <label className="yfd-text-label-sm mb-2 block text-[color:var(--yfd-primary)]">Phone Number</label>
                  <input
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[color:var(--yfd-primary)] focus:ring-2 focus:ring-[color:var(--yfd-primary)]"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    readOnly
                    tabIndex={-1}
                    aria-readonly="true"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-4">
                {BUMPS.map((b) => (
                  <label
                    key={b.title}
                    className={`flex cursor-default items-start gap-4 rounded-xl border-2 border-dashed p-4 ${b.border} ${b.bg}`}
                  >
                    <input
                      type="checkbox"
                      className={`mt-1 rounded focus:ring-2 ${b.ring}`}
                      disabled
                      aria-disabled="true"
                    />
                    <div>
                      <p className={b.titleClass}>{b.title}</p>
                      <p className="mt-1 text-xs text-[color:var(--yfd-on-surface-variant)]">{b.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              <button
                type="button"
                className="mt-8 w-full rounded-xl bg-[color:var(--yfd-secondary)] py-6 text-xl font-bold text-[color:var(--yfd-on-secondary)] shadow-lg transition-colors hover:bg-[color:var(--yfd-secondary-fixed-dim)]"
              >
                COMPLETE MY ORDER ($47)
              </button>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-60 grayscale">
                {PAYMENT_IMAGES.map((p) => (
                  <Image key={p.alt} src={p.src} alt={p.alt} width={120} height={40} className={p.className} />
                ))}
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-6 rounded-3xl border border-slate-100 bg-white p-8">
              <Image
                src={SEAL_IMG}
                alt="Gold circular guarantee seal"
                width={128}
                height={128}
                className="size-32 shrink-0 object-contain"
              />
              <div>
                <h4 className="yfd-text-headline-md mb-2">100% Risk-Free Guarantee</h4>
                <p className="leading-relaxed text-[color:var(--yfd-on-surface-variant)]">
                  If you don&apos;t feel a significant improvement in your energy levels or see a positive shift in your
                  daily numbers within 7 days, we&apos;ll refund every penny. No questions asked. We&apos;re that
                  confident because we see it work every day.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-[color:var(--yfd-primary)] p-8 text-[color:var(--yfd-on-primary)]">
              <h4 className="yfd-text-headline-md mb-4 italic">&quot;I&apos;m with you every step of the way.&quot;</h4>
              <p className="opacity-80">
                This isn&apos;t just a video course. It&apos;s a clinical partnership. When you join, you get access to
                our medical support team and me personally. Let&apos;s start this journey together.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={DOCTOR_HEAD}
                  alt="Dr. Sarah Chen"
                  width={48}
                  height={48}
                  className="size-12 rounded-full border-2 border-white object-cover"
                />
                <p style={{ fontFamily: "var(--yfd-font-heading), Newsreader, serif" }}>Dr. Sarah Chen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
