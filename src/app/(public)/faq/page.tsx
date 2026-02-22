import Link from "next/link";
import { FaqContent } from "@/features/faq/components";
import type { FaqSection, FaqTopic } from "@/features/faq/components";

export const metadata = {
  title: "Frequently Asked Questions - Yoga With Doctor",
  description:
    "Find answers to common questions about your yoga journey, subscriptions, and wellness plans.",
};

const topics: FaqTopic[] = [
  { id: "all", label: "All Topics" },
  { id: "subscription", label: "Subscription" },
  { id: "yoga-classes", label: "Yoga Classes" },
  { id: "technical-support", label: "Technical Support" },
];

const faqSections: FaqSection[] = [
  {
    id: "getting-started",
    heading: "Getting Started",
    items: [
      {
        id: "choose-plan",
        topicId: "yoga-classes",
        question: "How do I choose the right yoga plan for my level?",
        answer: {
          paragraphs: [
            "We recommend starting with our \"Body & Mind Assessment\". Based on your flexibility, strength, and goals, our AI-driven system will suggest a personalized path.",
          ],
          link: {
            href: "/courses",
            text: "Morning Sunshine Flow",
            suffix: " is an excellent starting point to learn the basics.",
          },
        },
      },
      {
        id: "download-videos",
        topicId: "technical-support",
        question: "Can I download videos for offline viewing?",
        answer:
          "Premium subscribers can download selected sessions for offline use within the app. Open a course or session and look for the download icon. Downloads are available for the duration of your subscription.",
      },
      {
        id: "equipment-required",
        topicId: "yoga-classes",
        question: "Is equipment required for the sessions?",
        answer:
          "Most sessions are designed for a mat only. Some advanced or specialty classes may suggest blocks or a strap; this is noted in the class description. You can filter classes by \"No equipment\" if needed.",
      },
    ],
  },
  {
    id: "subscription-billing",
    heading: "Subscription & Billing",
    items: [
      {
        id: "cancel-subscription",
        topicId: "subscription",
        question: "How do I cancel my subscription?",
        answer:
          "You can manage or cancel your subscription anytime from your account under Subscription. Cancellation takes effect at the end of your current billing period; you keep access until then.",
      },
      {
        id: "payment-methods",
        topicId: "subscription",
        question: "What payment methods are accepted?",
        answer:
          "We accept major credit and debit cards, and in-app purchases via Apple App Store and Google Play. Subscription management and payment methods can be updated in your dashboard.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
        {/* Header - no search bar (red marked box omitted) */}
        <header className="mb-10 text-center md:text-left">
          <span className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:bg-primary/20">
            Support
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl mb-4">
            Frequently Asked
            <br className="hidden md:block" />
            Questions
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Find answers to common questions about your yoga journey, subscriptions, and wellness plans.
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
              Still have questions?
            </h2>
            <p className="mb-8 max-w-md text-gray-300">
              Our yoga specialists are here to help you with anything you need to continue your journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-primary/30 sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
