import { ScrollReveal } from "./ScrollReveal";

export function SalesFaq() {
  return (
    <ScrollReveal className="bg-surface-container py-24" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <h3 className="lg:text-4xl text-3xl font-extrabold">সচরাচর জিজ্ঞাসিত প্রশ্নাবলী</h3>
        </div>
        <div className="space-y-4">
          <details className="group overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-lowest">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg text-base font-bold transition-colors hover:text-primary">
              <span>এটি কি পিএলআইডি রোগীদের জন্য নিরাপদ?</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="border-t border-outline-variant/5 p-6 pt-0 lg:text-base text-sm text-on-surface/70">
              হ্যাঁ, এটি সম্পূর্ণ বৈজ্ঞানিক ও নিরাপদ পদ্ধতি যা হাজার হাজার রোগীর ওপর
              পরীক্ষা করা হয়েছে।
            </div>
          </details>
          <details className="group overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-lowest">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg text-base font-bold transition-colors hover:text-primary">
              <span>সুফল পেতে কতদিন সময় লাগবে?</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="border-t border-outline-variant/5 p-6 pt-0 lg:text-base text-sm text-on-surface/70">
              অধিকাংশ রোগী ১০-১৫ দিনের মধ্যেই পরিবর্তন বুঝতে পারেন। পূর্ণ সুস্থতার
              জন্য ৩ মাস নিয়ম মেনে চলা প্রয়োজন।
            </div>
          </details>
          <details className="group overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-lowest">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg text-base font-bold transition-colors hover:text-primary">
              <span>আমার ব্যথা কি অনেক পুরনো হলেও কাজে দিবে?</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="border-t border-outline-variant/5 p-6 pt-0 lg:text-base text-sm text-on-surface/70">
              হ্যাঁ, এই সিস্টেমটি দীর্ঘস্থায়ী বা ক্রনিক ব্যথার মূল কারণ সংশোধনের
              জন্যই ডিজাইন করা হয়েছে।
            </div>
          </details>
        </div>
      </div>
    </ScrollReveal>
  );
}
