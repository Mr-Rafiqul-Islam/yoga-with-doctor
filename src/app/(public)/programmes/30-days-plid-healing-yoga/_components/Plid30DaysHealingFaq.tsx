import { Plid30DaysHealingSectionCta } from "./Plid30DaysHealingSectionCta";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    id: "all-plid-types",
    question: "এই প্রোগ্রাম কি সব ধরনের PLID রোগীর জন্য উপযোগী?",
    answer:
      "অধিকাংশ ক্ষেত্রে হালকা থেকে মাঝারি PLID সমস্যায় এই প্রোগ্রাম কার্যকর হয়। তবে প্রতিটি মানুষের অবস্থার ভিন্নতা থাকে, তাই প্রোগ্রামের ভেতরে আপনার অবস্থার অনুযায়ী কীভাবে safe ভাবে ব্যায়াম করবেন, সেটি গাইড করা হবে। গুরুতর ক্ষেত্রে অবশ্যই সরাসরি আমাদের চিকিৎসা ও পরামর্শ নিতে পারবেন।",
  },
  {
    id: "pain-safe",
    question: "ব্যথা থাকলে কি এই প্রোগ্রামের ব্যায়াম করা নিরাপদ?",
    answer:
      "হ্যাঁ, এই প্রোগ্রাম এমনভাবে ডিজাইন করা হয়েছে যাতে ব্যথা বাড়ানো নয়—বরং ধীরে ধীরে কমানো যায়। প্রতিটি ইয়োগা ধাপে ধাপে শেখানো হবে এবং কোনটা করবেন, কোনটা এড়িয়ে চলবেন—সব পরিষ্কারভাবে গাইড করা হবে।",
  },
  {
    id: "daily-time",
    question: "প্রতিদিন কত সময় দিতে হবে?",
    answer:
      "প্রতিদিন গড়ে ৪৫-৫৫ মিনিট সময় দিলেই যথেষ্ট। নিয়মিত এবং সঠিকভাবে follow করাই এখানে সবচেয়ে গুরুত্বপূর্ণ, সময় বেশি দেওয়া নয়।",
  },
  {
    id: "avoid-surgery",
    question: "এই প্রোগ্রাম করলে কি অপারেশন এড়ানো সম্ভব?",
    answer:
      "অনেক ক্ষেত্রে সঠিক ইয়োগা, lifestyle correction এবং গাইডলাইন অনুসরণ করলে অপারেশন ছাড়াই ভালো থাকা সম্ভব হয়। তবে এটি সম্পূর্ণ আপনার condition-এর উপর নির্ভর করে। এই প্রোগ্রামের লক্ষ্য হলো আপনাকে এমন একটি পথ দেখানো, যাতে আপনি informed decision নিতে পারেন।",
  },
  {
    id: "older-age",
    question: "আমার বয়স বেশি—আমি কি এই প্রোগ্রাম করতে পারবো?",
    answer:
      "হ্যাঁ, এই প্রোগ্রামটি এমনভাবে তৈরি করা হয়েছে যাতে বিভিন্ন বয়সের মানুষ নিরাপদভাবে করতে পারেন। প্রতিটি ইয়োগা ধাপে ধাপে এবং নিজের সামর্থ্য অনুযায়ী adjust করে করা যাবে। বয়সের কারণে নয়—সঠিক পদ্ধতির অভাবেই সমস্যা বেশি হয়।",
  },
  {
    id: "different-from-exercise",
    question: "আমি আগে অনেক ব্যায়াম করেছি, কিন্তু উপকার পাইনি—এটা কি আলাদা?",
    answer:
      "অনেক সময় আমরা এলোমেলোভাবে ইয়োগা করি বা সঠিক technique জানি না। এই প্রোগ্রামটি একটি structured system, যেখানে কোন stage-এ কোন ইয়োগা করতে হবে, কেন করতে হবে—সব পরিষ্কারভাবে গাইড করা হয়। এই কারণেই এটি সাধারণ exercise থেকে আলাদা।",
  },
  {
    id: "chronic-pain",
    question: "আমার ব্যথা অনেকদিনের—এখন কি ভালো হওয়া সম্ভব?",
    answer:
      "দীর্ঘদিনের ব্যথা মানে শরীরের কিছু imbalance তৈরি হয়েছে, যা ঠিক করতে সময় লাগে। তবে সঠিকভাবে follow করলে ধীরে ধীরে improvement সম্ভব। এখানে লক্ষ্য হচ্ছে শরীরকে ধীরে ধীরে natural healing-এর দিকে নিয়ে যাওয়া।",
  },
  {
    id: "equipment",
    question: "এই প্রোগ্রাম করতে কোনো বিশেষ সরঞ্জাম লাগবে কি?",
    answer:
      "না, কোনো জটিল বা ব্যয়বহুল equipment প্রয়োজন নেই। সাধারণ একটি yoga mat থাকলেই আপনি শুরু করতে পারবেন। পুরো প্রোগ্রামটি ঘরে বসেই করার মতো করে ডিজাইন করা হয়েছে।",
  },
  {
    id: "consistency",
    question: "আমি যদি নিয়মিত follow করতে না পারি, তাহলে কি ফল পাবো?",
    answer:
      "এই প্রোগ্রামের সবচেয়ে গুরুত্বপূর্ণ অংশ হলো consistency। আপনি যত নিয়মিতভাবে follow করবেন, তত দ্রুত improvement দেখতে পাবেন। তাই সময় কম হলেও প্রতিদিন অল্প করে নিয়মিত করা—এটাই সবচেয়ে কার্যকর।",
  },
] as const;

export function Plid30DaysHealingFaq() {
  return (
    <>
      <ScrollReveal className="bg-surface-container py-24" id="faq">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-16 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              সচরাচর জিজ্ঞাসিত প্রশ্নাবলী
            </h3>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map(({ id, question, answer }) => (
              <details
                key={id}
                className="group overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-lowest"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 lg:text-lg text-base font-bold transition-colors hover:text-primary">
                  <span>{question}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="border-t border-outline-variant/5 p-6 pt-0 lg:text-base text-sm text-on-surface/70">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
        <Plid30DaysHealingSectionCta />
      </ScrollReveal>
    </>
  );
}
