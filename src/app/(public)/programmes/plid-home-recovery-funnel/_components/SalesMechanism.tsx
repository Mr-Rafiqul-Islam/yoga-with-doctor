import { ScrollReveal } from "./ScrollReveal";

const MECHANISM_STEPS = [
  {
    id: "diagnosis",
    title: "সমস্যার সঠিক বিশ্লেষণ",
    body: "প্রথম ধাপে আপনার কোমর ব্যথা বা PLID-এর মূল কারণ বুঝে আপনার অবস্থার ভিত্তিতে সঠিক এক্সারসাইজ ও থেরাপি নির্ধারণের গাইডলাইন দেওয়া হয়, যাতে আপনি ধাপে ধাপে নিজের যত্ন শুরু করতে পারেন। ",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrxfaDNoRg7lEjoP6eimqIwIPPUn3r6yZcq-GZimhTZirkq_4yEwSPpEPriUajTOp5iij_t_Ay2USYuYZgX-u_bNpiuXFnjkIGhYbnmHhtioJc_CFAILB2xsUKzN6CI-6qfLP1C074HB9XSXAbJtLs5tTIDqopDRPyWgSnv795IwgePQ1erjE24ap7zJ3ssVWGQ-1dHUXoMetLL7-Gq6JTb-me-dBRL9hPCxAgkbSVw0ny8M_R_A3aEpyprXj_JSrMv2m-f5E0NLU",
    imageAlt: "নির্ণয় ও বিশ্লেষণ—থেরাপিউটিক মূল্যায়ন",
  },
  {
    id: "biomechanical",
    title: "বায়োমেকানিক্যাল কারেকশন",
    body: "দ্বিতীয় ধাপে দিনে মাত্র ১৫ মিনিটের নির্দিষ্ট থেরাপিউটিক মুভমেন্টের মাধ্যমে কোমর ও ডিস্কের চাপ ধীরে ধীরে কমিয়ে শরীরের সঠিক অ্যালাইনমেন্ট ফিরিয়ে আনা —যার লক্ষ্য শুধু ব্যথা কমানো নয়, বরং মূল সমস্যার সমাধান। ",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPy1lpYnpYR5I_6HrsQY_gI0G1wiH2LC73b5v8XHc-tGjjcvExRFvvwrxvVY5C3TjCyZs3RSZaFm9MiKXG_z5iK3Im_Ouxuc2mAnqVZvahwUAFCRJ6K_XvomwdVvWdXgZ0ES_F032rKnmNRUIxhlxwYfWHCgNI-WncGyM7Fgu-sJm1NpxuU40xouM6mK5jyGEqf1lxqrRyUwi-UEvsFE3-SPZ9AVqR_82ABqUyEkwZ1g8Urapt5KWoPGWnB7b19XyRSXybsBcVdw",
    imageAlt: "বায়োমেকানিক্যাল কারেকশন—থেরাপিউটিক অনুশীলন",
  },
  {
    id: "lifestyle",
    title: "লাইফস্টাইল রি-ডিজাইন",
    body: "তৃতীয় ধাপে বসা, শোয়া, হাঁটা ও কাজ করার সঠিক নিয়ম শেখানো হয় এবং প্রয়োজনীয় গাইডলাইন দেওয়া হয়, যাতে ভুল লাইফস্টাইল ঠিক করে ভবিষ্যতে ব্যথা ফিরে আসা প্রতিরোধ করা যায়।",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqlDrbUbh482_8pZKOZn_c3D63ham_29tfCdVGGIPgDv8CjpPS4JFDf9yzAiqhPkXrQCUsSZ-Sg7lVHJ5yuuhkcul0Jc4EwZLcxpUTt-c38PX4KpXvQsRV6UAIvOJsd-rTAEgZTxduCONfm5N502D2n-_6HTXYampLu7Q3UXNhcFesO7dD0fS0Fj537EsGFvAaf9j3T-1Ahr18V6vgtWq00RHhdi-msY9Dxzeo4hfxSIIN90aVMhDLiv8TuZ5E53DL2zTxweisRG4",
    imageAlt: "লাইফস্টাইল ইন্টিগ্রেশন—সঠিক ভঙ্গি ও দৈনন্দিন নিয়ম",
  },
  {
    id: "sustainability",
    title: "অগ্রগতি ট্র্যাকিং ও স্থায়ী সুস্থতা",
    body: "চতুর্থ ধাপে নিয়মিত অগ্রগতি পর্যবেক্ষণ ও প্রয়োজন অনুযায়ী গাইডলাইন আপডেট করা হয়—যাতে আপনি ধাপে ধাপে স্থায়ী সুস্থতার দিকে এগোতে পারেন এবং পুরো যাত্রায় বিশেষজ্ঞ সাপোর্ট পান।",
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
            ঘরে বসে ব্যথামুক্ত জীবন পেতে ফলো করুন এই ৪টি সহজ ধাপ।
       
            </h3>
            <p className="mb-1 mt-5 max-w-6xl text-on-surface/60">
            PLID বা কোমর ব্যথার সমাধান শুধু ব্যথা কমানো নয়, বরং এর মূল কারণ সঠিকভাবে বুঝে সমাধান করা। অনেক রোগী ভিন্ন ভিন্ন ডাক্তারের পরামর্শে বিভ্রান্ত হয়ে পড়েন—কেউ অপারেশন, কেউ ইনজেকশন বা অন্য চিকিৎসা সাজেস্ট করেন। এই বিষয়টি মাথায় রেখে আমাদের ৪-স্টেপ প্রোগ্রামটি এমনভাবে ডিজাইন করা হয়েছে, যেখানে আপনি ঘরে বসেই নিজের অবস্থার ভিত্তিতে ধাপে ধাপে গাইডলাইন ফলো করে প্রাথমিক যত্ন নিতে পারবেন। পাশাপাশি সার্জারি, ইনজেকশন, ইয়োগা বা লাইফস্টাইল কারেকশন—আপনার জন্য কোনটি উপযুক্ত হতে পারে, সেটি বোঝার জন্য একটি স্ট্রাকচার্ড গাইডলাইনও পাবেন।

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
              <p className="leading-relaxed text-on-surface/70 text-justify">{body}</p>
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
