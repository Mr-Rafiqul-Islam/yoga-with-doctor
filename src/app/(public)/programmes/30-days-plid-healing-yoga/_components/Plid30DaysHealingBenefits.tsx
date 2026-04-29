import Image from "next/image";
import { funnelSectionClass, type FunnelSectionVariant } from "./funnelSectionVariant";
import { Plid30DaysHealingSectionCta } from "./Plid30DaysHealingSectionCta";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type Plid30DaysHealingBenefitsProps = {
  variant?: FunnelSectionVariant;
};

const BENEFITS: { title: string; body: string }[] = [
  {
    title: "পরিবারের সাথে সময় কাটানোর স্বস্তি ফিরে পাবেন।",
    body: "দীর্ঘদিনের ব্যথার কারণে যেসব মুহূর্ত আপনি এড়িয়ে যেতেন- এখন সেগুলোতে আবার অংশ নিতে পারবেন। সন্তানদের সাথে খেলা, পরিবারের সাথে বসে গল্প করা- এসব ছোট ছোট আনন্দগুলো আবার স্বাভাবিকভাবে ফিরে আসবে।",
  },
  {
    title: "মনের ভেতরের চিন্তা, দ্বিধা ও অস্থিরতা ধীরে ধীরে কমে যাবে।",
    body: "ক্রমাগত কোমর ব্যথা শুধু শরীর না, মনকেও প্রভাবিত করে। যখন ব্যথা কমতে শুরু করে, তখন স্বাভাবিকভাবেই মানসিক স্বস্তি ফিরে আসে, ঘুম ভালো হয়, এবং নিজের উপর আত্মবিশ্বাস আবার তৈরি হয়।",
  },
  {
    title: "অপ্রয়োজনীয় চিকিৎসা ও খরচে থেকে মুক্তি পাবেন।",
    body: "বারবার ডাক্তার দেখানো, পরীক্ষা করা বা ওষুধের উপর নির্ভরশীলতা- এসব ধীরে ধীরে কমে আসবে। আপনি বুঝতে পারবেন কীভাবে নিজের শরীরকে ঠিকভাবে ম্যানেজ করতে হয়, ফলে অপ্রয়োজনীয় খরচ ও দুশ্চিন্তা দুটোই কমে যায়।",
  },
];

export function Plid30DaysHealingBenefits({ variant = "auto" }: Plid30DaysHealingBenefitsProps) {
  return (
    <>
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
          <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-extrabold text-on-surface">
          PLID থেকে মুক্ত হয়ে আবার নিজের স্বাভাবিক জীবনে ফিরে যাওয়ার অনুভূতি- এটাই আপনার ধাঁরাও সম্ভব
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
    <Plid30DaysHealingSectionCta />
    </ScrollReveal>
    </>
  );
}
