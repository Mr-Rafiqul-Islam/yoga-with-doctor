import Image from "next/image";
import { Plid30DaysHealingSectionCta } from "./Plid30DaysHealingSectionCta";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AUTHORITY_CREDENTIALS = [
  "পেইন মেডিসিন স্পেশাল ট্রেনিং, ইন্ডিয়া",
  "বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয়, ঢাকা",
  "শহীদ সোহরাওয়ার্দি হাসপাতাল, ঢাকা",
  "রংপুর মেডিকেল কলেজ",
  "স্কয়ার ফার্মাসিউটিক্যালস লি",
] as const;

const EXPERTISE = [
  {
    title: "স্পাইন সার্জারীতে ১২ বছরের অভিজ্ঞতা",
    desc: "১ লাখের বেশী PLID রোগির সরাসরি কনসালটেশন",
  },
  {
    title: "PLID অপারেশন",
    desc: "১০০০ এর বেশি PLID অপারেশন",
  },
  {
    title: "এপিডুরাল স্টেরয়েড ইনজেকশন",
    desc: "১০,০০০ এর বেশি",
  },
  {
    title: "PLID রোগির অনলাইন সাপোর্ট",
    desc: "৩০ লাখের বেশি",
  },
] as const;

export function Plid30DaysHealingAuthority() {
  return (
    <>
    <ScrollReveal className="bg-surface-container-high py-24" id="drshah">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 rounded-4xl bg-surface-container-lowest p-6 shadow-xl shadow-primary/5 md:flex-row md:p-16">
          <div className="w-full md:w-2/5">
            <Image
              className="h-auto w-full rounded-2xl shadow-lg"
              width={1066}
              height={1600}
              alt="Dr. Shah Alam"
              sizes="(max-width: 767px) 100vw, 40vw"
              src="/Dr. Shah Alam-2.jpeg"
            />
            <div className="clinical-accent mt-8 flex justify-center text-2xl italic text-primary">
              Dr. Shah Alam
            </div>
            <p className="text-on-surface/80 text-center">
              MBBS, D.Ortho (BMU)
              <br />
              অর্থোপেডিক্স বিশেষজ্ঞ | স্পাইন সার্জন | ইয়োগা ইনসট্রাকটর
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="mb-4 text-lg text-center md:text-left font-bold uppercase tracking-widest text-primary-container">
            Meet Your Doctor and Yoga Instructor
            </h2>
            <h3 className="mb-6 text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-extrabold">
            আপনার PLID মুক্ত জীবনের পথে অভিজ্ঞ গাইড
            </h3>
            <div className="space-y-6 leading-relaxed text-on-surface/80">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Expertise
                </p>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {EXPERTISE.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3"
                    >
                      <p className="font-bold text-on-surface">{item.title}</p>
                      <p className="mt-1 text-sm font-accent leading-snug text-on-surface/75">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="clinical-accent border-l-4 border-primary py-2 pl-6 text-xl italic">
                &quot;আমি চাই বাংলাদেশের ৩০ লক্ষ মানুষ PLID মুক্ত হোক সঠিক গাইডলাইনের মাধ্যমে -ভয়, অপারেশন বা দীর্ঘমেয়াদি ওষুধ
                ছাড়াই।&quot;
              </p>
              <p className="mb-4 mt-10 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Experienced at
              </p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {AUTHORITY_CREDENTIALS.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span
                      className="material-symbols-outlined shrink-0 text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    <Plid30DaysHealingSectionCta />
    </ScrollReveal>
    </>
  );
}
