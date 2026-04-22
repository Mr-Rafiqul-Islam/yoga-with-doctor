import { funnelSectionClass, type FunnelSectionVariant } from "./funnelSectionVariant";
import { ScrollReveal } from "./ScrollReveal";

type SalesBenefitsProps = {
  variant?: FunnelSectionVariant;
};

export function SalesBenefits({ variant = "auto" }: SalesBenefitsProps) {
  return (
    <ScrollReveal className={`overflow-hidden py-24 ${funnelSectionClass(variant)}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative">
          <img
            className="relative z-10 rounded-[2.5rem] shadow-2xl"
            alt=""
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVqVgT_Vhm4633dep-Ezu4B8uIjruCIUplkudjmeaQn_pmSJuhSWBs2rSs8yzI8LXkSgzc1uJsWiAQvwS7Scxa9Cf8o-d_lgloX_FpFr9qS61t1xDe-px3p0PnSz9Lns6OAzJ8S8xxR3o0t8ljv19C3R5eRb62uwhyl7uBsopAhnvzJ_ZhnvfblHzOKSjLe3Uu5kzv1XN67z_N09RRLT4WpNqjQwpByeLpvMYZ23MpPNJsN9VmHT2HAAQMnTe3UaHGoltHAC26Q6o"
          />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-container/20 blur-3xl"></div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-widest text-primary">
            The Result
          </h2>
          <h3 className="mb-8 text-4xl font-extrabold text-on-surface">
            স্বাভাবিক জীবনে ফিরে আসার আনন্দ
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                <span className="material-symbols-outlined text-xl">done_all</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-on-surface">পরিবারের সাথে সময়</h4>
                <p className="text-on-surface/60">
                  ব্যথাহীনভাবে সন্তান বা নাতি-নাতনিদের সাথে খেলার সুযোগ।
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                <span className="material-symbols-outlined text-xl">done_all</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-on-surface">মানসিক প্রশান্তি</h4>
                <p className="text-on-surface/60">
                  অপারেশনের ভয় ও ঔষধের পার্শপ্রতিক্রিয়া থেকে চির মুক্তি।
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                <span className="material-symbols-outlined text-xl">done_all</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-on-surface">আর্থিক সাশ্রয়</h4>
                <p className="text-on-surface/60">
                  লক্ষাধিক টাকার সার্জারি ও আজীবনের টেস্ট খরচ বেঁচে যাওয়া।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
