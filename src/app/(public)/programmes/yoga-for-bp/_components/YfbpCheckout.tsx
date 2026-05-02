import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAYMENT_ICONS = [
  {
    alt: "Visa",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuNPFhlyyUXxqme1J1w0wOlmAxh4dijfY2pCjYYxwNv9h2kMwH2wMB5tTP8d3YbkAcrGC4h1BT7BkEQAtUHIjq6GjK6fropH389HhZaSphNVvKa_7rlniH5JfihG2_LRKszIPyjPvoPqHjiTOmWdHrcwsXFNfSCdFgEz5RKr35vJwW6UspoPfm1A9BK-Z7gpc5jSzxq_fhVsn6gOLSLj9oBL60-AWvI0oFfxCZh9RE42jcw4h901Jb5dL3J2HIOJ4M4O4DyeNSPrZ9",
  },
  {
    alt: "Mastercard",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd-_xucfG212x_9nVY9MMLxJZrsOdwE3y-iL2PjVqTiHQEuMTC1vhVsKqL4hxxvca3uHkRaQR5tkH3LMgLYAn-iu5HrVibjIUDanAv9gWt9Gb7gAs5NFbryhU38R_pZpgkXAt4PLlk7ouadjRQ6M6cvLkyN_ck0N3pIskT7h2K463ZOmrDFQnbvFeyEGL8N-cd4Kk2Jz0RcF48pnEU8fYccqE6i3SWRs7dv4TlJoxtPpFUj59VXeV2F39pX1q_Z8ueksc8J2l1hM1A",
  },
  {
    alt: "PayPal",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTfnpUj0MEg3i5_HXtdUd255oVeSAqXDvE3ixNPG2J87_d6LwlBegkEDwxqzU8DKS7Vl4gW_9iJskOS3IuTHL3whs5g3dtcDsJxrTuFFbYWhtnD1al-1zdaOqKb3Bm9RMmjdmojjK2JWnU_BKQsrnzH9Ind96gu7iygPyRw5SlJqtPCEmId_8MqPUPwSKbzsVvLL33x_KWGF9ADNFSf6Ym0euJ4XXpy4VulmIq0cf96tyTJvXl7Flz-lglUPqCpjJWiBjKKmrIiMy4",
  },
];

const ORDER_BUMPS = [
  {
    title: "Add BP Diet Plan (+$5)",
    body: "Get the 'Heart-Smart' grocery list and meal plans today.",
  },
  {
    title: "Add Stress Relief Audio Guide (+$10)",
    body: "3 guided meditations for instant calm anywhere.",
  },
];

const TESTIMONIALS = [
  {
    name: "Robert M.",
    quote:
      '"My doctor was amazed at my last check-up. My BP is finally back in the green zone, and I feel so much lighter!"',
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIjLGGIoG6hYer7MzWhID78VqOAiOEX4ft8GWJV7lVe11fY-XCaiH-kwIYZdw6dzZiCicQWbozdWwE3vIqPVmEDdrrRhU0dVykodOx0zpFZ1oLvWiUoadLd9U2IaX9nNevAVn3IQ06WkCyGw7FDIjGqjLnsGLIK97bMsTYMpV9sATXdt4u_P59IRaXqUgac7dzBU0ZWai81i-oQjk61uI5co1prtqsUUXCIx_wJYuaWvsiZV59dLYp_p6bC_-kGg4S0e6cPAIFOvdN",
    alt: "Portrait of a middle-aged man smiling happily",
  },
  {
    name: "Linda S.",
    quote: '"I was skeptical, but the 10-minute routine is a lifesaver. It really does calm my racing heart."',
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Od95x8DkE0WzBlCWcwa1FnAEXbDf8GfhPYfjQJrfDKDqkb2UtWCTXmpF8KeKjTY-f1ieRb0JkvC1dvH-HdD8HcFDni01Rl0E3Gfh6fPoz0RmoQhCAW5ZAeOgIGbdFjkUStbOtksn4m6kjd-1NuauGOLRlZAz9qUqAgn8UGyLhLdt23prtTsrxS_qnRCjUa7EvbYuY8XxCZAHSyE7ujbrfFEBbiviRvbBxek4mbPY5BSB076rW2mILiDXMH2r3TOnStwBYdpdK4l8",
    alt: "Portrait of a calm older woman with a peaceful expression",
  },
];

export function YfbpCheckout() {
  return (
    <ScrollReveal className="px-6 py-24" delay={0.06} id="checkout">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="yfbp-text-h2 text-[color:var(--yfbp-on-background)]">Secure Checkout</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[color:var(--yfbp-on-background)]">
                Full Name
              </label>
              <input
                readOnly
                aria-readonly="true"
                className="w-full rounded-xl border-none bg-[color:var(--yfbp-surface-container-high)] p-4 outline-none ring-[color:var(--yfbp-primary)] placeholder:text-slate-400 focus:ring-2"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[color:var(--yfbp-on-background)]">
                Email Address
              </label>
              <input
                readOnly
                aria-readonly="true"
                className="w-full rounded-xl border-none bg-[color:var(--yfbp-surface-container-high)] p-4 outline-none ring-[color:var(--yfbp-primary)] placeholder:text-slate-400 focus:ring-2"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[color:var(--yfbp-on-background)]">
                Phone Number
              </label>
              <input
                readOnly
                aria-readonly="true"
                className="w-full rounded-xl border-none bg-[color:var(--yfbp-surface-container-high)] p-4 outline-none ring-[color:var(--yfbp-primary)] placeholder:text-slate-400 focus:ring-2"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>

            <div className="mt-8 space-y-4">
              {ORDER_BUMPS.map(({ title, body }) => (
                <div
                  key={title}
                  className="flex cursor-default items-start gap-4 rounded-2xl border-2 border-dashed border-[color:var(--yfbp-primary)] bg-[color:color-mix(in_srgb,var(--yfbp-primary)_5%,transparent)] p-4"
                >
                  <input className="mt-1 h-5 w-5 rounded accent-[color:var(--yfbp-primary)]" disabled type="checkbox" />
                  <div>
                    <div className="font-bold text-[color:var(--yfbp-on-background)]">{title}</div>
                    <p className="text-sm opacity-70 text-[color:var(--yfbp-on-surface-variant)]">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--yfbp-tertiary-container)] py-5 text-xl font-bold text-[color:var(--yfbp-on-tertiary)] shadow-lg transition-colors hover:bg-orange-600"
              type="button"
            >
              Complete Order
              <span className="material-symbols-outlined">lock</span>
            </button>

            <div className="flex justify-center gap-4 py-4 opacity-50 grayscale">
              {PAYMENT_ICONS.map(({ alt, src }) => (
                <Image key={alt} alt={alt} className="h-6 w-auto" height={24} src={src} width={48} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 rounded-3xl bg-[color:var(--yfbp-surface-container-low)] p-10">
          <div className="flex items-center gap-4 rounded-2xl border border-teal-50 bg-white p-6 shadow-sm">
            <div className="rounded-full bg-[color:color-mix(in_srgb,var(--yfbp-primary)_10%,transparent)] p-4 text-[color:var(--yfbp-primary)]">
              <span className="material-symbols-outlined text-4xl">verified</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[color:var(--yfbp-on-background)]">7-Day Money Back Guarantee</h4>
              <p className="text-sm opacity-70 text-[color:var(--yfbp-on-surface-variant)]">
                If you don&apos;t feel calmer and more in control within 7 days, we&apos;ll refund every penny. No
                questions asked.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="yfbp-text-h3 text-[color:var(--yfbp-on-background)]">Join 12,000+ Others</h3>
            <div className="flex flex-col gap-4">
              {TESTIMONIALS.map(({ name, quote, avatar, alt }) => (
                <div key={name} className="flex items-start gap-4">
                  <Image alt={alt} className="size-12 rounded-full object-cover" height={48} src={avatar} width={48} />
                  <div className="flex-1 rounded-2xl rounded-tl-none border border-teal-50 bg-white p-4 shadow-sm">
                    <div className="mb-1 text-sm font-bold text-[color:var(--yfbp-on-background)]">{name}</div>
                    <p className="text-sm italic text-[color:var(--yfbp-on-surface-variant)]">{quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
