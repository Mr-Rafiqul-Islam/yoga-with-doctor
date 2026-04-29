import Image from "next/image";
import { Plid30DaysHealingSectionCta } from "./Plid30DaysHealingSectionCta";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MECHANISM_STEPS = [
  {
    id: "diagnosis",
    title: "আপনার কোমর ব্যথার আসল কারণ নির্ণয়",
    body: "প্রতিটি মানুষের PLID-এর অবস্থা এক রকম নয়। তাই প্রথম ধাপে আপনার শরীরের অবস্থা, ব্যথার ধরন এবং নার্ভ-এর উপর কোথায় চাপ পড়ছে তা বোঝানো হবে। এতে আপনি নিজের সমস্যাকে পরিষ্কারভাবে বুঝতে পারেন এবং অপ্রয়োজনীয় ভুল চিকিৎসা বা ভয় থেকে বের হয়ে আসতে পারেন। ",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrxfaDNoRg7lEjoP6eimqIwIPPUn3r6yZcq-GZimhTZirkq_4yEwSPpEPriUajTOp5iij_t_Ay2USYuYZgX-u_bNpiuXFnjkIGhYbnmHhtioJc_CFAILB2xsUKzN6CI-6qfLP1C074HB9XSXAbJtLs5tTIDqopDRPyWgSnv795IwgePQ1erjE24ap7zJ3ssVWGQ-1dHUXoMetLL7-Gq6JTb-me-dBRL9hPCxAgkbSVw0ny8M_R_A3aEpyprXj_JSrMv2m-f5E0NLU",
    imageAlt: "নির্ণয় ও বিশ্লেষণ—থেরাপিউটিক মূল্যায়ন",
  },
  {
    id: "biomechanical",
    title: "সঠিক ব্যায়াম এর মাধ্যমে PLID নিরাময়",
    body: "প্রতিদিন আপনাকে নির্দিষ্ট কিছু therapeutic yoga movement করানো হবে, যা কোমরের পেশী, ligaments এবং disc-এর উপর চাপ কমাতে সাহায্য করবে। এই ব্যায়ামগুলো এমনভাবে করা হবে যাতে আপনার PLID ব্যাথা কমিয়ে দ্রুত নিরাময় লাভ করতে পারেন।",
    imageSrc:
      "/yoga-1.JPG",
    imageAlt: "বায়োমেকানিক্যাল কারেকশন—থেরাপিউটিক অনুশীলন",
  },
  {
    id: "lifestyle",
    title: "দৈনন্দিন অভ্যাসগুলোই ব্যথা ফিরিয়ে আনে।",
    body: "অনেক সময় ভুলভাবে বসা, দাঁড়ানো, ঘুমানো বা কাজ করার অভ্যাসই PLID  সমস্যাকে বাড়িয়ে দেয়। আপনাকে lifestyle correction শেখানো হবে পরিপূর্ণ ভাবে যাতে করে আপনার প্রতিদিনের কাজগুলোই healing process-কে support করে, ক্ষতি না করে।",
    imageSrc:
      "/movement.jpg",
    imageAlt: "দৈনন্দিন অভ্যাসগুলোই ব্যথা ফিরিয়ে আনে।",
  },
  {
    id: "sustainability",
    title: "কিভাবে দীর্ঘমেয়াদে নিজেকে সুস্থ রাখবেন?",
    body: "আপনার progress নিয়মিত পর্যবেক্ষণ করা হবে এবং প্রয়োজন অনুযায়ী গাইডলাইন adjust করা হয়। এর মাধ্যমে আপনি শুধু সাময়িকভাবে ভালো হন না, বরং দীর্ঘমেয়াদে নিজের শরীরকে সুস্থ রাখার একটি sustainable system শিখে ফেলেন। ",
    imageSrc:
      "/yoga-3.JPG",
    imageAlt: "অগ্রগতি নিরীক্ষা—নিয়মিত অনুশীলন ও ফলো-আপ",
  },
] as const;

const stepCardClass = "group flex h-full min-h-0 flex-col";
const imageWrapClass =
  "relative mt-6 aspect-video w-full overflow-hidden rounded-xl bg-surface-container-high shadow-inner";
const imageClass =
  "h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105";

export function Plid30DaysHealingMechanism() {
  return (
    <>
    <ScrollReveal className="bg-surface py-24" id="methodology">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              ৩০ দিনে ঘরে বসে PLID মুক্ত জীবন পেতে পারেন এই ৪টি সহজ ধাপ ফ্লো
              করে।
            </h3>
            <p className="mb-1 mt-5 max-w-6xl text-sm md:text-base lg:text-lg text-on-surface/60">
              PLID-এর সমস্যায় অনেকেই শুধু সাময়িকভাবে ব্যথা কমানোর চেষ্টা করেন,
              কিন্তু মূল রোগ নির্সণয় না করলে এই সমস্যা বারবার ফিরে আসে। এই
              প্রোগ্রামটি এমনভাবে সাজানো হয়েছে, যেখানে আপনি ধাপে ধাপে নিজের
              শরীরকে বুঝে, সঠিক ব্যায়াম, লাইফস্টাইল পরিবর্তন এবং গাইডলাইন অনুসরণ
              করে স্বাভাবিকভাবে PLID মুক্ত জীবন-এর দিকে এগোতে পারবেন।
            </p>
          </div>
        </div>
        <div className="relative grid items-stretch gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -z-10 hidden h-px border-t-2 border-dashed border-primary-container/30 lg:block" />
          {MECHANISM_STEPS.map(
            ({ id, title, body, imageSrc, imageAlt }, index) => (
              <div key={id} className={stepCardClass}>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-on-primary transition-transform duration-300 ease-out group-hover:rotate-6">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="clinical-accent mb-4 text-2xl font-bold italic">
                  {title}
                </h4>
                <p className="leading-relaxed text-on-surface/70 text-justify">
                  {body}
                </p>
                <div className={imageWrapClass}>
                  <Image
                    fill
                    alt={imageAlt}
                    className={imageClass}
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    src={imageSrc}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    <Plid30DaysHealingSectionCta  />
    </ScrollReveal>
    </>
  );
}
