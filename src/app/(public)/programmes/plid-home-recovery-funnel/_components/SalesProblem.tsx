import { ScrollReveal } from "./ScrollReveal";

const problemCardClass =
  "group rounded-xl border-l-4 border-secondary bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10";

const PROBLEM_CARDS = [
  {
    id: "chronic-pain",
    icon: "error_outline",
    title: "দীর্ঘস্থায়ী যন্ত্রণা",
    body: "বসা বা হাঁটা চলাফেরায় অসহ্য ব্যথা যা আপনার কাজ ও জীবনকে ব্যাহত করে।",
  },
  {
    id: "physical-limitation",
    icon: "disabled_by_default",
    title: "শারীরিক সীমাবদ্ধতা",
    body: "পরিবারের সাথে সময় কাটানো বা পছন্দের কাজে যোগ দিতে না পারার মানসিক চাপ।",
  },
  {
    id: "medication-dependence",
    icon: "medication",
    title: "ব্যথানাশকের ওপর নির্ভরশীলতা",
    body: "সাময়িক উপশমের জন্য ঔষধ খেয়ে লিভার ও কিডনির মারাত্মক ক্ষতির ঝুঁকি।",
  },
  {
    id: "daily-struggle",
    icon: "today",
    title: "দৈনন্দিন জীবনের সংগ্রাম",
    body: "ঘুম থেকে ওঠা, কাজে যাওয়া, বাড়ির ছোটখাটো কাজ—প্রতিটি মুহূর্তে ব্যথা মনে করিয়ে দেয় আপনি স্বাভাবিক জীবন থেকে কতটা দূরে সরে গেছেন।",
  },
] as const;

export function SalesProblem() {
  return (
    <ScrollReveal className="bg-surface-container-low py-24" id="pain">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-secondary">
          The Daily Struggle
        </h2>
        <h3 className="mb-8 text-4xl font-extrabold md:text-5xl">
          কোমর ব্যথা কি আপনার জীবনকে স্থবির করে দিচ্ছে?
        </h3>
        <p className="mb-16 max-w-2xl mx-auto text-lg text-on-surface/70">
          Living with PLID means every step is a reminder of your limitations.
          It&apos;s not just pain—it&apos;s a loss of freedom.
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
    </ScrollReveal>
  );
}
