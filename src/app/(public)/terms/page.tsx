import Link from "next/link";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Terms & Conditions",
    description:
      "Terms governing use of Yoga With Doctor, including medical disclaimer, accounts, subscriptions, and intellectual property.",
    path: "/terms",
  });
}

const LAST_UPDATED = "May 2026";

const tocItems = [
  { id: "introduction", label: "Introduction", number: 1 },
  { id: "disclaimer", label: "Medical Disclaimer", number: 2 },
  {
    id: "eligibility",
    label: "Eligibility & User Responsibilities",
    number: 3,
  },
  { id: "accounts", label: "User Accounts & Security", number: 4 },
  { id: "programs", label: "Programs & Educational Content", number: 5 },
  { id: "subscriptions", label: "Subscriptions & Payments", number: 6 },
  { id: "refund", label: "Refund Policy", number: 7 },
  { id: "intellectual", label: "Intellectual Property Rights", number: 8 },
  { id: "liability", label: "Limitation of Liability", number: 9 },
  { id: "privacy", label: "Privacy & Data Protection", number: 10 },
  { id: "changes", label: "Changes to Services", number: 11 },
  { id: "contact", label: "Contact Information", number: 12 },
] as const;

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* Page header */}
        <header className="mb-10 text-center md:mb-12">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 flex items-center justify-center text-sm text-muted">
            <span className="material-icons-outlined mr-2 text-lg" aria-hidden>
              schedule
            </span>
            Last updated:{" "}
            <span className="ml-1 font-medium text-primary">
              {LAST_UPDATED}
            </span>
          </p>
        </header>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Table of contents */}
          <aside className="lg:col-span-3" aria-label="Table of contents">
            <nav
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:bg-surface-dark lg:sticky lg:top-28"
              aria-label="On this page"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="material-icons-outlined text-primary"
                  aria-hidden
                >
                  toc
                </span>
                <h2 className="text-lg font-bold text-foreground">
                  Table of Contents
                </h2>
              </div>
              <ol className="space-y-1">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="group flex items-center justify-between rounded-lg p-3 text-muted transition-colors hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/10"
                    >
                      <span className="text-sm font-medium">
                        {item.number}. {item.label}
                      </span>
                      <span
                        className="material-icons-outlined text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      >
                        chevron_right
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Main content */}
          <article className="space-y-16 lg:col-span-9 lg:pr-4">
            {/* 1. Introduction */}
            <section
              id="introduction"
              className="scroll-mt-28"
              aria-labelledby="section-introduction"
            >
              <h2
                id="section-introduction"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                1. Introduction
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Welcome to{" "}
                  <strong className="text-foreground">Yoga With Doctor</strong>{" "}
                  (&quot;Platform,&quot; &quot;Service,&quot; &quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;).
                </p>
                <p>
                  Yoga With Doctor is a doctor-led educational wellness platform
                  dedicated to promoting health, disease prevention, therapeutic
                  yoga, and evidence-based lifestyle education.
                </p>
                <p>
                  By accessing, browsing, purchasing, or using any part of our
                  website, applications, courses, videos, articles,
                  consultations, memberships, or related services, you agree to
                  be bound by these Terms & Conditions. If you do not agree with
                  these Terms, please discontinue use of our services.
                </p>
              </div>
            </section>

            {/* 2. Medical Disclaimer */}
            <section
              id="disclaimer"
              className="scroll-mt-28"
              aria-labelledby="section-disclaimer"
            >
              <div className="mb-8 rounded-r-2xl rounded-bl-2xl border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-950/30 dark:border-amber-600 md:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="material-icons-outlined mt-1 text-3xl text-amber-700 dark:text-amber-400"
                    aria-hidden
                  >
                    medical_services
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-amber-800 dark:text-amber-300 mb-3">
                      Medical Disclaimer
                    </h3>
                    <p className="leading-relaxed text-amber-800/90 dark:text-amber-200/90">
                      The information provided through Yoga With Doctor is
                      intended solely for educational and informational
                      purposes. Our content does not replace professional
                      medical diagnosis, treatment, emergency care, or
                      individualized healthcare advice. Always consult a
                      qualified healthcare professional before beginning any new
                      exercise, yoga, rehabilitation, dietary, or wellness
                      program.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>By using our services, you acknowledge that:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>You participate voluntarily.</li>
                  <li>You are responsible for your own health decisions.</li>
                  <li>Results may vary between individuals.</li>
                  <li>No specific outcome or recovery can be guaranteed.</li>
                  <li>
                    You assume full responsibility for any risks associated with
                    participation.
                  </li>
                </ul>
                <p className="font-medium text-foreground">
                  Stop any activity immediately and seek medical care if you
                  experience:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Severe pain</li>
                  <li>Chest pain</li>
                  <li>Difficulty breathing</li>
                  <li>Dizziness or Loss of consciousness</li>
                  <li>
                    Neurological symptoms or any other concerning symptoms
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Eligibility & User Responsibilities */}
            <section
              id="eligibility"
              className="scroll-mt-28"
              aria-labelledby="section-eligibility"
            >
              <h2
                id="section-eligibility"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                3. Eligibility & User Responsibilities
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  To use our platform, you must be at least 18 years old, or
                  have parental/guardian permission where legally applicable.
                </p>
                <p>You agree to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide accurate information.</li>
                  <li>Use the platform lawfully.</li>
                  <li>Maintain respectful communication.</li>
                  <li>Not misuse or disrupt our services.</li>
                  <li>
                    Not share or distribute copyrighted materials without
                    permission.
                  </li>
                </ul>
                <p>
                  Users are responsible for ensuring that any physical activity
                  undertaken is appropriate for their individual health status.
                </p>
              </div>
            </section>

            {/* 4. User Accounts & Security */}
            <section
              id="accounts"
              className="scroll-mt-28"
              aria-labelledby="section-accounts"
            >
              <h2
                id="section-accounts"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                4. User Accounts & Security
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  Creating an account may be required for access to certain
                  services. You are responsible for maintaining password
                  confidentiality, protecting your account credentials, and all
                  activities conducted through your account.
                </p>
                <p>
                  You agree to notify us immediately if your account is
                  compromised, unauthorized access occurs, or security concerns
                  arise. Yoga With Doctor is not responsible for losses
                  resulting from unauthorized account access caused by user
                  negligence.
                </p>
              </div>
            </section>

            {/* 5. Programs, Courses & Educational Content */}
            <section
              id="programs"
              className="scroll-mt-28"
              aria-labelledby="section-programs"
            >
              <h2
                id="section-programs"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                5. Programs, Courses & Educational Content
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  Our platform may provide online courses, recorded classes,
                  live workshops, webinars, educational articles, downloadable
                  materials, and membership programs. All content is intended
                  for educational purposes.
                </p>
                <p>
                  Program outcomes depend on many factors including consistency,
                  medical condition, lifestyle habits, physical limitations, and
                  individual circumstances. Therefore, individual results may
                  differ significantly.
                </p>
                <p>
                  We reserve the right to update content, modify lessons,
                  improve program structures, and remove outdated materials
                  without prior notice.
                </p>
              </div>
            </section>

            {/* 6. Subscriptions & Payments */}
            <section
              id="subscriptions"
              className="scroll-mt-28"
              aria-labelledby="section-subscriptions"
            >
              <h2
                id="section-subscriptions"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                6. Subscriptions & Payments
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  Certain services may require payment. Available payment
                  structures may include one-time purchases, monthly
                  subscriptions, annual memberships, or promotional offers.
                </p>
                <p>
                  By purchasing a program, you authorize the applicable payment
                  provider to process payment. Prices may change without notice;
                  however, previously completed purchases remain unaffected.
                </p>
                <p>
                  Failure to complete payment may result in restricted access,
                  suspension of services, or termination of memberships until
                  payment obligations are fulfilled.
                </p>
              </div>
            </section>

            {/* 7. Refund Policy */}
            <section
              id="refund"
              className="scroll-mt-28"
              aria-labelledby="section-refund"
            >
              <h2
                id="section-refund"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                7. Refund Policy
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>Unless otherwise stated on the product page:</p>
                <ul className="list-disc space-y-4 pl-6">
                  <li>
                    <strong className="text-foreground">
                      Digital Products & Courses:
                    </strong>{" "}
                    Due to the nature of instantly accessible digital content,
                    course purchases are generally non-refundable.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Membership Programs:
                    </strong>{" "}
                    Membership fees are generally non-refundable after the
                    billing period begins.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Exceptional Circumstances:
                    </strong>{" "}
                    Refund requests may be reviewed individually where required
                    by applicable law or in exceptional situations.
                  </li>
                </ul>
                <p>
                  All refund decisions remain at the sole discretion of Yoga
                  With Doctor.
                </p>
              </div>
            </section>

            {/* 8. Intellectual Property Rights */}
            <section
              id="intellectual"
              className="scroll-mt-28"
              aria-labelledby="section-intellectual"
            >
              <h2
                id="section-intellectual"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                8. Intellectual Property Rights
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  All content on the platform is protected by copyright and
                  intellectual property laws. This includes videos, courses,
                  documents, articles, graphics, logos, program structures,
                  educational materials, and website content.
                </p>
                <p>
                  You may not copy, reproduce, resell, redistribute, publish,
                  modify, or commercially exploit any content without prior
                  written permission. Unauthorized use may result in legal
                  action.
                </p>
              </div>
            </section>

            {/* 9. Limitation of Liability */}
            <section
              id="liability"
              className="scroll-mt-28"
              aria-labelledby="section-liability"
            >
              <h2
                id="section-liability"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                9. Limitation of Liability
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  To the fullest extent permitted by law, Yoga With Doctor, its
                  founders, instructors, employees, partners, and affiliates
                  shall not be liable for direct, indirect, incidental, or
                  consequential damages, loss of income, business interruption,
                  or health complications arising from misuse of content.
                </p>
                <p>
                  Participation in any exercise or wellness activity is
                  undertaken at the user&apos;s own risk.
                </p>
              </div>
            </section>

            {/* 10. Privacy & Data Protection */}
            <section
              id="privacy"
              className="scroll-mt-28"
              aria-labelledby="section-privacy"
            >
              <h2
                id="section-privacy"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                10. Privacy & Data Protection
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  We respect your privacy. Information collected may include
                  your name, email address, phone number, account information,
                  payment details, and platform usage data.
                </p>
                <p>
                  This information is used to provide services, improve user
                  experience, process payments, deliver educational content, and
                  respond to support requests. We do not sell personal
                  information to third parties.
                </p>
                <p>
                  Please review our Privacy Policy for complete details
                  regarding data collection and processing.
                </p>
              </div>
            </section>

            {/* 11. Changes to Services */}
            <section
              id="changes"
              className="scroll-mt-28"
              aria-labelledby="section-changes"
            >
              <h2
                id="section-changes"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                11. Changes to Services
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  We may modify, suspend, discontinue, or update any aspect of
                  the platform, including courses, features, pricing, membership
                  structures, and website functionality at any time without
                  prior notice.
                </p>
                <p>
                  Continued use of the platform following updates constitutes
                  acceptance of revised Terms & Conditions.
                </p>
              </div>
            </section>

            {/* 12. Contact Information */}
            <section
              id="contact"
              className="scroll-mt-28"
              aria-labelledby="section-contact"
            >
              <h2
                id="section-contact"
                className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6"
              >
                12. Contact Information
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  If you have questions regarding these Terms & Conditions,
                  please contact us:
                </p>
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:bg-surface-dark">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:support@yogawithdoctor.com"
                        className="text-primary text-base lg:text-xl hover:underline text-wrap"
                      >
                        support@yogawithdoctor.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-xl">📱</span>
                      <strong>WhatsApp:</strong> 01349-002180
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://yogawithdoctor.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        yogawithdoctor.com
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 border-t border-border pt-4">
                    <h4 className="font-bold text-foreground mb-2">
                      Support Hours:
                    </h4>
                    <p>
                      Saturday – Thursday
                      <br />
                      9:00 AM – 8:00 PM (Bangladesh Time)
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Final Notice & Footer CTA */}
            <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center shadow-soft dark:bg-surface-dark md:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Yoga With Doctor
              </h3>

              <p className="mx-auto mb-8 max-w-2xl font-medium text-foreground italic">
                Where Medical Science Meets Therapeutic Yoga.
                <br />
                Empowering Health Through Education, Movement & Lifestyle
                Transformation.
              </p>
              <Link
                href="/contact"
                className="mb-8 inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Support
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted">
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
