import { ScrollReveal } from "./ScrollReveal";

const MECHANISM_STEPS = [
  {
    id: "diagnosis",
    title: "নির্ণয় ও বিশ্লেষণ",
    body: "আপনার সমস্যার প্রকৃত ধরন বুঝে সঠিক এক্সারসাইজ চার্ট নির্বাচন।",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrxfaDNoRg7lEjoP6eimqIwIPPUn3r6yZcq-GZimhTZirkq_4yEwSPpEPriUajTOp5iij_t_Ay2USYuYZgX-u_bNpiuXFnjkIGhYbnmHhtioJc_CFAILB2xsUKzN6CI-6qfLP1C074HB9XSXAbJtLs5tTIDqopDRPyWgSnv795IwgePQ1erjE24ap7zJ3ssVWGQ-1dHUXoMetLL7-Gq6JTb-me-dBRL9hPCxAgkbSVw0ny8M_R_A3aEpyprXj_JSrMv2m-f5E0NLU",
    imageAlt: "নির্ণয় ও বিশ্লেষণ—থেরাপিউটিক মূল্যায়ন",
  },
  {
    id: "biomechanical",
    title: "বায়োমেকানিক্যাল কারেকশন",
    body: "প্রতিদিন মাত্র ১৫ মিনিটের নির্দিষ্ট থেরাপিউটিক মুভমেন্টের মাধ্যমে ডিস্কের চাপ কমানো।",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPy1lpYnpYR5I_6HrsQY_gI0G1wiH2LC73b5v8XHc-tGjjcvExRFvvwrxvVY5C3TjCyZs3RSZaFm9MiKXG_z5iK3Im_Ouxuc2mAnqVZvahwUAFCRJ6K_XvomwdVvWdXgZ0ES_F032rKnmNRUIxhlxwYfWHCgNI-WncGyM7Fgu-sJm1NpxuU40xouM6mK5jyGEqf1lxqrRyUwi-UEvsFE3-SPZ9AVqR_82ABqUyEkwZ1g8Urapt5KWoPGWnB7b19XyRSXybsBcVdw",
    imageAlt: "বায়োমেকানিক্যাল কারেকশন—থেরাপিউটিক অনুশীলন",
  },
  {
    id: "lifestyle",
    title: "লাইফস্টাইল ইন্টিগ্রেশন",
    body: "ভবিষ্যতে ব্যথা ফিরে আসা রোধ করতে সঠিক বসা ও শোয়ার নিয়ম আয়ত্ত করা।",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqlDrbUbh482_8pZKOZn_c3D63ham_29tfCdVGGIPgDv8CjpPS4JFDf9yzAiqhPkXrQCUsSZ-Sg7lVHJ5yuuhkcul0Jc4EwZLcxpUTt-c38PX4KpXvQsRV6UAIvOJsd-rTAEgZTxduCONfm5N502D2n-_6HTXYampLu7Q3UXNhcFesO7dD0fS0Fj537EsGFvAaf9j3T-1Ahr18V6vgtWq00RHhdi-msY9Dxzeo4hfxSIIN90aVMhDLiv8TuZ5E53DL2zTxweisRG4",
    imageAlt: "লাইফস্টাইল ইন্টিগ্রেশন—সঠিক ভঙ্গি ও দৈনন্দিন নিয়ম",
  },
  {
    id: "sustainability",
    title: "নিরীক্ষা স্থায়ীত্ব",
    body: "নির্দিষ্ট বিরতিতে অগ্রগতি যাচাই ও প্রয়োজনে প্ল্যান সমন্বয় করে দীর্ঘমেয়াদে সুস্থ থাকা।",
    imageSrc:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=960&q=80",
    imageAlt: "অগ্রগতি নিরীক্ষা—নিয়মিত অনুশীলন ও ফলো-আপ",
  },
] as const;

const stepCardClass = "group flex h-full min-h-0 flex-col";
const imageWrapClass =
  "mt-6 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-surface-container-high shadow-inner";
const imageClass =
  "h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105";

export function SalesMechanism() {
  return (
    <ScrollReveal className="bg-surface py-24" id="methodology">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-primary">
              The Solution
            </h2>
            <h3 className="text-4xl font-extrabold md:text-5xl">
              4-Step Home Treatment System
            </h3>
            <p className="my-2 max-w-md text-on-surface/60">
              Our system targets the root cause of disc prolapse by using
              biomechanical correction techniques at home.
            </p>
          </div>
        </div>
        <div className="relative grid items-stretch gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -z-10 hidden h-px border-t-2 border-dashed border-primary-container/30 lg:block" />
          {MECHANISM_STEPS.map(({ id, title, body, imageSrc, imageAlt }, index) => (
            <div key={id} className={stepCardClass}>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-on-primary transition-transform duration-300 ease-out group-hover:rotate-6">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h4 className="clinical-accent mb-4 text-2xl font-bold italic">{title}</h4>
              <p className="leading-relaxed text-on-surface/70">{body}</p>
              <div className={imageWrapClass}>
                <img className={imageClass} alt={imageAlt} src={imageSrc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
