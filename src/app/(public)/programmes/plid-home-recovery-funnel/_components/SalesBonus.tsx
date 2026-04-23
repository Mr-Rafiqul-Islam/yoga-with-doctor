import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function SalesBonus() {
  return (
    <ScrollReveal className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 rounded-3xl bg-surface-container-high p-6 lg:p-10 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl lg:text-3xl text-center md:text-left font-extrabold">
              Exclusive Bonuses for Today
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <span className="material-symbols-outlined text-secondary">
                    card_membership
                  </span>
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-bold">Lifetime Support</h4>
                  <p className="text-sm lg:text-base opacity-70">
                    আমাদের বিশেষ ফেসবুক সাপোর্ট গ্রুপে সরাসরি প্রশ্নের সুযোগ।
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <span className="material-symbols-outlined text-secondary">
                    update
                  </span>
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-bold">Future Updates</h4>
                  <p className="text-sm lg:text-base opacity-70">
                    চিকিৎসা বিজ্ঞানের নতুন গবেষণার ভিত্তিতে সকল আপডেট ফ্রি
                    পাবেন।
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&q=80"
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
