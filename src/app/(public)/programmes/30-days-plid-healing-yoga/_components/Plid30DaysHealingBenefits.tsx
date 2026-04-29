import Image from "next/image";
import { funnelSectionClass, type FunnelSectionVariant } from "./funnelSectionVariant";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type Plid30DaysHealingBenefitsProps = {
  variant?: FunnelSectionVariant;
};

const BENEFITS: { title: string; body: string }[] = [
  {
    title: "পরিবারের সাথে আবার সময় কাটানো",
    body: "ব্যথা ছাড়া নিজের সন্তান বা নাতি-নাতনিদের সাথে খেলাধুলা ও স্বাভাবিকভাবে সময় উপভোগ করার সুযোগ ফিরে পাওয়া।",
  },
  {
    title: "মানসিক প্রশান্তি ফিরে পাওয়া",
    body: "অপারেশনের ভয়, দীর্ঘমেয়াদি ঔষধ ও পার্শ্বপ্রতিক্রিয়ার দুশ্চিন্তা থেকে মুক্ত হয়ে স্বস্তির জীবন পাওয়া।",
  },
  {
    title: "আর্থিক চাপ থেকে মুক্তি",
    body: "লক্ষাধিক টাকার সার্জারি খরচ এবং নিয়মিত চিকিৎসা ও টেস্টের ব্যয় এড়িয়ে যাওয়া।",
  },
];

export function Plid30DaysHealingBenefits({ variant = "auto" }: Plid30DaysHealingBenefitsProps) {
  return (
    <ScrollReveal className={`overflow-hidden py-24 ${funnelSectionClass(variant)}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
              src="https://images.unsplash.com/photo-1738747725706-99c7ec96a826?w=500&q=80"
            />
          </div>
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-container/20 blur-3xl"></div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-widest text-primary">
            The Result
          </h2>
          <h3 className="mb-8 text-3xl lg:text-4xl font-extrabold text-on-surface">
            স্বাভাবিক জীবনে ফিরে আসার আনন্দ
          </h3>
          <div className="space-y-6">
            {BENEFITS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                  <span className="material-symbols-outlined text-xl">done_all</span>
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-bold text-on-surface">{item.title}</h4>
                  <p className="text-sm lg:text-base text-on-surface/60">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
