import Link from "next/link";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Privacy Policy | Yoga With Doctor",
    description:
      "How Yoga With Doctor collects, uses, and protects your personal data. Transparency and your rights, explained.",
    path: "/privacy",
  });
}

const LAST_UPDATED = "May 2026";

const tocItems = [
  { id: "introduction", label: "Introduction", number: 1 },
  { id: "information-we-collect", label: "Information We Collect", number: 2 },
  { id: "how-we-use-your-information", label: "How We Use Your Information", number: 3 },
  { id: "health-information", label: "Health Information & Wellness Data", number: 4 },
  { id: "cookies", label: "Cookies & Tracking Technologies", number: 5 },
  { id: "data-sharing", label: "Data Sharing & Third Parties", number: 6 },
  { id: "data-security", label: "Data Security", number: 7 },
  { id: "data-retention", label: "Data Retention", number: 8 },
  { id: "privacy-rights", label: "Your Privacy Rights", number: 9 },
  { id: "childrens-privacy", label: "Children's Privacy", number: 10 },
  { id: "international-transfers", label: "International Data Transfers", number: 11 },
  { id: "updates-to-policy", label: "Updates To This Policy", number: 12 },
  { id: "contact-information", label: "Contact Information", number: 13 },
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* Page header */}
        <header className="mb-10 text-center md:mb-12">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            At Yoga With Doctor, we believe that trust is the foundation of healing. Protecting your personal information is one of our highest priorities.
          </p>
        </header>

        {/* Two-column layout: TOC (desktop) + content */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Table of contents - sticky on desktop, visible on mobile above or as sidebar */}
          <aside
            className="lg:col-span-4 xl:col-span-3"
            aria-label="Table of contents"
          >
            <nav
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:bg-surface-dark lg:sticky lg:top-28"
              aria-label="On this page"
            >
              <h2 className="mb-6 text-xs font-bold uppercase tracking-wider text-muted">
                Table of Contents
              </h2>
              <ol className="space-y-4">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="group flex items-center text-left"
                    >
                      <span
                        className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/20 dark:group-hover:bg-primary"
                        aria-hidden
                      >
                        {item.number}
                      </span>
                      <span className="text-sm font-medium text-muted transition-colors group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Main policy content */}
          <div className="lg:col-span-8 xl:col-span-9 lg:pr-4">
            {/* Policy title and date */}
            <div className="mb-10 border-b border-border pb-6">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Your Privacy Matters
              </h2>
              <p className="mt-4 flex items-center text-sm text-muted">
                <span className="material-icons-outlined mr-2 text-lg" aria-hidden>
                  schedule
                </span>
                Last updated: {LAST_UPDATED}
              </p>
            </div>

            {/* 1. Introduction */}
            <section
              id="introduction"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-introduction"
            >
              <h3 id="section-introduction" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                1. Introduction
              </h3>
              <p className="font-display text-xl italic leading-relaxed text-muted md:text-2xl mb-6">
                Yoga With Doctor is committed to protecting your privacy while providing educational wellness services, therapeutic yoga programs, health content, memberships, and digital learning experiences.
              </p>
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                <p>We collect only the information necessary to deliver our services, improve user experience, and provide relevant health education.</p>
                <p><strong>We do not sell personal information to advertisers or unrelated third parties.</strong></p>
                <p>By using our website, applications, courses, memberships, consultations, and related services, you agree to the practices described in this Privacy Policy.</p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section
              id="information-we-collect"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-information-we-collect"
            >
              <h3 id="section-information-we-collect" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                2. Information We Collect
              </h3>
              <p className="mb-6 leading-relaxed text-muted">
                We may collect the following categories of information:
              </p>
              <ul className="space-y-6" role="list">
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground block mb-1">Personal Information</strong> 
                    Including full name, email address, phone number, date of birth (if provided), gender (optional), country or location, and profile information.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground block mb-1">Account Information</strong> 
                    Including username, login credentials, membership status, course enrollment history, and learning progress.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground block mb-1">Payment Information</strong> 
                    Payments are processed through secure third-party payment providers. We may receive limited payment-related information such as transaction ID, payment status, and purchase records. <em>We do not store complete credit card or payment card details on our servers.</em>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground block mb-1">Wellness & Health Information</strong> 
                    You may voluntarily provide health goals, lifestyle information, exercise history, wellness preferences, recovery goals, pain-related information, and program assessments. This information helps us personalize your learning experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground block mb-1">Technical Information</strong> 
                    Automatically collected data may include IP address, browser type, device information, operating system, website activity, pages visited, and session duration.
                  </span>
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section
              id="how-we-use-your-information"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-how-we-use"
            >
              <h3 id="section-how-we-use" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                3. How We Use Your Information
              </h3>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Deliver Our Services</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted">
                    <li>Create and manage accounts</li>
                    <li>Provide course access</li>
                    <li>Deliver memberships</li>
                    <li>Track learning progress</li>
                    <li>Process transactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Improve User Experience</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted">
                    <li>Personalize recommendations</li>
                    <li>Improve content quality</li>
                    <li>Optimize platform performance</li>
                    <li>Enhance user navigation</li>
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="font-semibold text-foreground mb-3">Communication</h4>
                  <p className="text-muted mb-3">We may contact you regarding:</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
                    <li>Account updates and security alerts</li>
                    <li>Course notifications and educational updates</li>
                    <li>Membership information</li>
                    <li>Customer support</li>
                  </ul>
                  <p className="text-sm italic text-muted">You may unsubscribe from promotional communications at any time.</p>
                </div>
              </div>
            </section>

            {/* 4. Health Information & Wellness Data */}
            <section
              id="health-information"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-health-info"
            >
              <h3 id="section-health-info" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                4. Health Information & Wellness Data
              </h3>
              <div className="space-y-4 leading-relaxed text-muted">
                <p>
                  Certain programs may allow users to voluntarily provide health-related information. This information is used solely for educational guidance, program customization, and user experience improvement.
                </p>
              </div>
              <div className="mt-8 border-l-4 border-primary rounded-r-2xl bg-primary/5 p-6 dark:bg-primary/10">
                <p className="text-sm text-foreground/90 md:text-base">
                  <strong className="font-bold text-primary block mb-2">Important Medical Disclaimer:</strong>
                  Yoga With Doctor does not provide personalized medical diagnosis through automated systems. Health information shared on the platform does not create a doctor-patient relationship unless explicitly stated through a separate clinical consultation service.
                </p>
              </div>
            </section>

            {/* 5. Cookies & Tracking Technologies */}
            <section
              id="cookies"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-cookies"
            >
              <h3 id="section-cookies" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                5. Cookies & Tracking Technologies
              </h3>
              <p className="leading-relaxed text-muted mb-4">
                We may use cookies and similar technologies to remember login sessions, save user preferences, analyze website performance, improve user experience, and measure engagement.
              </p>
              <p className="leading-relaxed text-muted">
                Users can modify cookie settings through their browser preferences. Disabling cookies may affect certain platform features.
              </p>
            </section>

            {/* 6. Data Sharing & Third Parties */}
            <section
              id="data-sharing"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-data-sharing"
            >
              <h3 id="section-data-sharing" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                6. Data Sharing & Third Parties
              </h3>
              <p className="leading-relaxed text-muted mb-6">
                We may share information with trusted service providers only when necessary to operate our platform. All service providers are required to maintain confidentiality and protect user data. Examples include:
              </p>
              <ul className="space-y-4 mb-8" role="list">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Payment Processors:</strong> For secure payment handling.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Email Service Providers:</strong> For transactional and educational communications.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Analytics Providers:</strong> To understand platform performance and user engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Technical Infrastructure Providers:</strong> For hosting, security, and system maintenance.</span>
                </li>
              </ul>
              <div className="inline-block rounded-xl border border-primary/20 bg-primary/5 px-6 py-4">
                <h4 className="font-bold text-primary mb-1">We Do Not Sell Personal Data</h4>
                <p className="text-sm text-foreground/80">Yoga With Doctor does not sell user information to advertisers, brokers, or unrelated third parties.</p>
              </div>
            </section>

            {/* 7. Data Security */}
            <section
              id="data-security"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-data-security"
            >
              <h3 id="section-data-security" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                7. Data Security
              </h3>
              <p className="leading-relaxed text-muted mb-4">
                We implement appropriate administrative, technical, and organizational measures to protect personal information. Security measures may include:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-muted mb-6 pl-5 list-disc">
                <li>SSL encryption</li>
                <li>Secure servers</li>
                <li>Access controls</li>
                <li>Authentication systems</li>
                <li>Data monitoring</li>
                <li>Security audits</li>
              </ul>
              <p className="leading-relaxed text-muted text-sm italic">
                While we strive to protect your information, no internet transmission method can be guaranteed 100% secure.
              </p>
            </section>

            {/* 8. Data Retention */}
            <section
              id="data-retention"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-data-retention"
            >
              <h3 id="section-data-retention" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                8. Data Retention
              </h3>
              <p className="leading-relaxed text-muted mb-4">
                We retain information only as long as necessary for service delivery, legal compliance, security purposes, record keeping, and business operations.
              </p>
              <p className="leading-relaxed text-muted">
                When information is no longer required, it is securely deleted or anonymized.
              </p>
            </section>

            {/* 9. Your Privacy Rights */}
            <section
              id="privacy-rights"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-privacy-rights"
            >
              <h3 id="section-privacy-rights" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                9. Your Privacy Rights
              </h3>
              <p className="leading-relaxed text-muted mb-6">
                Depending on applicable laws, you may have the right to:
              </p>
              <ul className="space-y-4 mb-6" role="list">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Access Your Data:</strong> Request information about personal data we hold.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Correct Information:</strong> Update inaccurate or incomplete information.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Delete Information:</strong> Request deletion of eligible personal data.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Restrict Processing:</strong> Request limitations on certain data processing activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent where processing is based on consent.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span className="text-muted"><strong className="text-foreground">Data Portability:</strong> Request a copy of your personal information in a portable format where applicable.</span>
                </li>
              </ul>
              <p className="leading-relaxed text-muted">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section
              id="childrens-privacy"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-childrens-privacy"
            >
              <h3 id="section-childrens-privacy" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                10. Children&apos;s Privacy
              </h3>
              <p className="leading-relaxed text-muted mb-4">
                Yoga With Doctor is not intended for children under 13 years of age without parental involvement. We do not knowingly collect personal information from children without appropriate authorization.
              </p>
              <p className="leading-relaxed text-muted">
                Parents who believe a child has provided personal information may contact us for removal requests.
              </p>
            </section>

            {/* 11. International Data Transfers */}
            <section
              id="international-transfers"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-international-transfers"
            >
              <h3 id="section-international-transfers" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                11. International Data Transfers
              </h3>
              <p className="leading-relaxed text-muted mb-4">
                Your information may be processed and stored in different countries where our technology partners or service providers operate.
              </p>
              <p className="leading-relaxed text-muted">
                By using our services, you consent to such transfers where permitted by applicable law. We take reasonable measures to ensure adequate data protection standards.
              </p>
            </section>

            {/* 12. Updates To This Policy */}
            <section
              id="updates-to-policy"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-updates-to-policy"
            >
              <h3 id="section-updates-to-policy" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                12. Updates To This Policy
              </h3>
              <p className="leading-relaxed text-muted mb-4">
                We may update this Privacy Policy periodically to reflect service improvements, legal requirements, technology changes, or security enhancements.
              </p>
              <p className="leading-relaxed text-muted">
                The updated version will always be posted on this page with the revised date. Continued use of our services after updates constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* 13. Contact Information */}
            <section
              id="contact-information"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-contact-information"
            >
              <h3 id="section-contact-information" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                13. Contact Information
              </h3>
              <p className="leading-relaxed text-muted mb-6">
                If you have questions about this Privacy Policy or how your information is handled, please contact us:
              </p>
              
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 dark:bg-surface-dark mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Yoga With Doctor</h4>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-center">
                    <span className="material-icons-outlined mr-3 text-primary">email</span>
                    <strong>Email:</strong>&nbsp;<a href="mailto:privacy@yogawithdoctor.com" className="hover:text-primary transition-colors">privacy@yogawithdoctor.com</a>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons-outlined mr-3 text-primary">phone</span>
                    <strong>WhatsApp:</strong>&nbsp;01349-002180
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons-outlined mr-3 text-primary">language</span>
                    <strong>Website:</strong>&nbsp;<a href="https://www.yogawithdoctor.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">www.yogawithdoctor.com</a>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons-outlined mr-3 text-primary">schedule</span>
                    <span><strong>Support Hours:</strong> Saturday – Thursday | 9:00 AM – 8:00 PM (Bangladesh Time)</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center bg-primary text-white rounded-2xl p-8">
                <h4 className="font-display text-2xl font-bold mb-2">Our Privacy Commitment</h4>
                <p className="text-white/90 text-lg mb-6 max-w-lg mx-auto">
                  We collect only what we need. We protect what you share. We never sell your personal information.
                </p>
                <div className="pt-6 border-t border-white/20">
                  <p className="font-bold text-lg">Yoga With Doctor</p>
                  <p className="text-sm text-white/80 mt-1">Where Medical Science Meets Therapeutic Yoga</p>
                  <p className="text-sm text-white/80">Empowering Health Through Education, Movement & Lifestyle Transformation</p>
                </div>
              </div>
            </section>

            {/* Footer CTA */}
            <div className="border-t border-border pt-10 text-center md:mt-8 md:pt-10">
              <p className="mb-6 text-muted">Have questions about our policy?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Support Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}