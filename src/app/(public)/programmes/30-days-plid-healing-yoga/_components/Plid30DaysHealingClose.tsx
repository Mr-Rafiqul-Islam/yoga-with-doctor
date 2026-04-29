import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function Plid30DaysHealingClose() {
  return (
    <>
    <ScrollReveal className="relative overflow-hidden bg-surface py-20 md:py-32 text-center">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-[200%] -translate-x-1/2 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-container/10 via-transparent to-transparent"></div>
      <div className="mx-auto md:max-w-4xl max-w-xl px-6">
        <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-extrabold">
          আজই শুরু হোক PLID মুক্ত জীবনের জাত্রা।{" "}
        </h3>
        <p className="clinical-accent mb-12 lg:text-xl text-sm leading-relaxed text-on-surface/70">
          ৯০% ক্ষেত্রে অপারেশন ছাড়াই PLID মুক্ত হওয়া সম্ভব। শুধু একটি সঠিক
          সিদ্ধান্তের নিলে আপনি আপনার আগের প্রাণবন্ত জীবনে ফিরে যেতে পারেন।
        </p>
        <a
          className="inline-flex items-center gap-3 rounded-full bg-primary lg:px-12 px-8 py-4 lg:py-5 text-base lg:text-2xl font-bold text-on-primary shadow-2xl transition-transform hover:scale-105"
          href="#checkout"
        >
          Start My Healing Journey
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </ScrollReveal>
    </>
  );
}
