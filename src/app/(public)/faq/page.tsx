import Link from "next/link";
import { FaqContent } from "@/features/faq/components";
import type { FaqSection, FaqTopic } from "@/features/faq/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "FAQ",
    description:
      "Find answers to common questions about yoga classes, subscriptions, technical support, and your wellness journey.",
    path: "/faq",
  });
}

const topics: FaqTopic[] = [
  { id: "all", label: "All Topics" },
  { id: "programs", label: "Programs" }, 
  { id: "yoga-classes", label: "Yoga Classes" },
  { id: "subscription", label: "Subscription" },
  { id: "health-safety", label: "Health & Safety" }, // Fixed string literal mismatch here
];

const faqSections: FaqSection[] = [
  {
    id: "getting-started",
    heading: "Getting Started",
    items: [
      {
        id: "choose-program-health-condition",
        topicId: "programs", // Maps to "programs" filter
        question: "How do I choose the right program for my health condition?",
        answer: "Start by identifying your primary health goal—whether it's back pain relief, migraine management, weight loss, stress reduction, posture correction, or general wellness. Each program includes a detailed description to help you find the best fit. If you're unsure, our support team can guide you toward the most appropriate program."
      },
      {
        id: "suitable-for-beginners",
        topicId: "programs",
        question: "Are these programs suitable for beginners?",
        answer: "Yes. Most of our programs are designed for beginners and include step-by-step guidance. Sessions progress gradually so you can build confidence, mobility, and strength safely at your own pace."
      },
      {
        id: "follow-from-home",
        topicId: "programs",
        question: "Can I follow the programs from home?",
        answer: "Absolutely. All programs are designed to be followed from home using clear video instructions. Most sessions require little to no special equipment."
      },
      {
        id: "expect-results-timeline",
        topicId: "programs",
        question: "How quickly can I expect results?",
        answer: "Results vary depending on your health condition, consistency, and lifestyle habits. Many members notice improvements in flexibility, mobility, pain levels, energy, or stress management within a few weeks of regular practice."
      }
    ]
  },
  {
    id: "yoga-practice",
    heading: "Yoga Practice",
    items: [
      {
        id: "previous-yoga-experience",
        topicId: "yoga-classes", // Maps to "yoga-classes" filter
        question: "Do I need previous yoga experience?",
        answer: "No. Our programs are created for complete beginners as well as experienced practitioners. Every session includes clear instructions and modifications when needed."
      },
      {
        id: "equipment-needed",
        topicId: "yoga-classes",
        question: "What equipment do I need?",
        answer: "Most sessions require only a yoga mat and comfortable clothing. Some specialized programs may suggest simple accessories such as yoga blocks, straps, or cushions, but these are usually optional."
      },
      {
        id: "pain-or-medical-condition",
        topicId: "yoga-classes",
        question: "What if I have pain or a medical condition?",
        answer: "Our programs are designed with medical guidance in mind. However, if you have severe symptoms, recent surgery, significant injuries, or a complex medical condition, consult your healthcare professional before starting any exercise program."
      }
    ]
  },
  {
    id: "membership-billing",
    heading: "Membership & Billing",
    items: [
      {
        id: "purchase-program",
        topicId: "subscription", // Maps to "subscription" filter
        question: "How do I purchase a program?",
        answer: "Simply select your preferred program, complete the secure checkout process, and gain immediate access to the course materials from your account dashboard."
      },
      {
        id: "payment-methods-accepted",
        topicId: "subscription",
        question: "What payment methods do you accept?",
        answer: "We accept major local and international payment methods including mobile banking, debit cards, credit cards, and supported online payment gateways."
      },
      {
        id: "lifetime-access",
        topicId: "subscription",
        question: "Will I have lifetime access?",
        answer: "Access depends on the specific program. Lifetime-access courses clearly mention this on the program page, while memberships remain active during the subscription period."
      },
      {
        id: "manage-cancel-subscription",
        topicId: "subscription",
        question: "How do I manage or cancel my subscription?",
        answer: "You can manage your subscription settings directly from your account dashboard. If you need assistance, our support team is always available to help."
      }
    ]
  },
  {
    id: "health-safety",
    heading: "Health & Safety",
    items: [
      {
        id: "substitute-medical-treatment",
        topicId: "health-safety", // Fixed from "safety" to match filter id
        question: "Are these programs a substitute for medical treatment?",
        answer: "No. Our educational content and yoga programs are intended to support health and wellness. They do not replace professional medical diagnosis, treatment, or emergency care."
      },
      {
        id: "therapeutic-yoga-safety",
        topicId: "health-safety", // Fixed from "safety" to match filter id
        question: "Is therapeutic yoga safe for everyone?",
        answer: "Most people can safely participate when following instructions appropriately. However, individual conditions differ, and certain exercises may not be suitable for everyone. Always practice within your comfort level."
      },
      {
        id: "prevent-future-health-problems",
        topicId: "health-safety", // Fixed from "safety" to match filter id
        question: "Can yoga help prevent future health problems?",
        answer: "Regular practice can improve flexibility, posture, strength, balance, stress management, and overall well-being, which may contribute to a healthier lifestyle and reduced risk of certain health issues."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
        {/* Header - no search bar (red marked box omitted) */}
        <header className="mb-10 text-center md:text-left">
          <span className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:bg-primary/20">
            HELP & SUPPORT CENTER
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
            Frequently Asked
            <br className="hidden md:block" />
            Questions
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Find clear answers about our programs, memberships, payments, yoga sessions, health guidance, and your healing journey with Yoga With Doctor.
          </p>
        </header>

        <FaqContent topics={topics} sections={faqSections} />

        {/* CTA card */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#1A2233] p-8 shadow-2xl md:p-12">
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl" aria-hidden />
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <span className="material-icons-outlined text-3xl text-white" aria-hidden>
                headset_mic
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Still Need Personal Guidance?
            </h2>
            <p className="mb-8 max-w-md text-gray-300">
              Our team is here to help you choose the right program, answer your questions, and support your journey toward better health.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-primary/30 sm:w-auto"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
