import { Plid30DaysHealingSectionCta } from "./Plid30DaysHealingSectionCta";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const problemCardClass =
  "group rounded-xl border-l-4 border-secondary bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10";

const PROBLEM_CARDS = [
  {
    id: "chronic-pain",
    icon: "error_outline",
    title: "কোমরের ব্যথা কি ধীরে ধীরে আপনাকে অসহায় করে দিচ্ছে?",
    body: "সুয়ে থাকা, বসা, দাঁড়ানো বা হাঁটার সময় কোমরে টান, চাপ বা ব্যথা অনুভব করা এখন আপনার জন্য স্বাভাবিক হয়ে গেছে। অনেক সময় এই ব্যথা পা পর্যন্ত ছড়িয়ে পড়ে, যা sciatic nerve-এর উপর চাপের ইঙ্গিত দেয়। এটি শুধু একটি সাধারণ ব্যথা নয় বরং আপনার spine-এর উপর দীর্ঘদিন ধরে অতিরিক্ত চাপ পড়ার ফল।",
  },
  {
    id: "physical-limitation",
    icon: "disabled_by_default",
    title: "আগের মতো সহজ জীবন যাপন কঠিন হয়ে যাচ্ছে?",
    body: "যেসব কাজ আপনি আগে সহজে করতেন বসা, ওঠা, ঝুঁকে কিছু তোলা এখন সেগুলো করতে গেলে অস্বস্তি বা ভয় লাগে। শরীর ধীরে ধীরে শক্ত হয়ে যাচ্ছে, মুভমেন্ট কমে যাচ্ছে, এবং আপনি অজান্তেই নিজের স্বাভাবিক জীবনযাপন সীমিত করে ফেলছেন।",
  },
  {
    id: "medication-dependence",
    icon: "medication",
    title: "ব্যথা কমানোর জন্য ওষুধের উপর নির্ভর হয়ে পড়ছেন?",
    body: "সাময়িক স্বস্তির জন্য পেইন কিলার নেওয়ার পর কিছু সময় ভালো লাগলেও, মূল সমস্যাটি থেকে যায়। ফলে কিছুদিন পর আবার একই ব্যথা ফিরে আসে। দীর্ঘদিন এভাবে চলতে থাকলে শরীরের অন্যান্য অঙ্গের উপরও এর সাইডইফেক্ট প্রভাব পড়তে পারে।",
  },
  {
    id: "daily-struggle",
    icon: "today",
    title: "প্রতিদিনের কাজগুলো কি সংগ্রামে পরিণত হয়েছে?",
    body: "ঘুম থেকে ওঠা, কাজে বসা, হাঁটা বা পরিবারের সাথে সময় কাটানো এই সাধারণ কাজগুলোতেও এখন ব্যথা আপনাকে বারবার থামিয়ে দিচ্ছে। ধীরে ধীরে আপনি আগের স্বাভাবিক জীবন থেকে দূরে সরে যাচ্ছেন এবং প্রতিটি দিন যেন একটি চ্যালেঞ্জ হয়ে দাঁড়াচ্ছে।",
  },
] as const;

export function Plid30DaysHealingProblem() {
  return (
    <>
    <ScrollReveal className="bg-surface-container-low py-24" id="pain">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-extrabold">
        এই লক্ষণগুলো কি ধীরে ধীরে আপনার স্বাভাবিক জীবনকে সীমাবদ্ধ করে দিচ্ছে?
        </h3>
        <p className="mb-16 max-w-2xl mx-auto text-base lg:text-lg text-on-surface/70">
        প্রতিদিন কাজে যখন কোমরে ব্যথা অনুভব করেন, পায়ের ঝিঁঝিঁ, অবশ, ব্যথা, জ্বালাপোড়া নিয়ে আপনার জীবন হয়ে উঠছে কষ্টকর। সঠিক চিকিৎসা, গাইডলাইন ও যত্ন না নিলে এই সমস্যা ধীরে ধীরে আপনার দৈনন্দিন জীবনকে কঠিন করে তুলবে।
        </p>
        <div className="grid gap-6 text-left sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {PROBLEM_CARDS.map(({ id, icon, title, body }) => (
            <div key={id} className={problemCardClass}>
              <span className="material-symbols-outlined mb-4 block text-4xl text-secondary transition-transform duration-300 ease-out group-hover:scale-110">
                {icon}
              </span>
              <h4 className="mb-3 text-xl font-bold">{title}</h4>
              <p className="text-sm leading-relaxed opacity-70 transition-opacity duration-300 group-hover:opacity-90">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    <Plid30DaysHealingSectionCta  />
    </ScrollReveal>
    </>
  );
}
