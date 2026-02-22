import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - Yoga With Doctor",
  description:
    "Terms and Conditions governing your use of Yoga With Doctor. Covers medical disclaimer, accounts, subscriptions, and intellectual property.",
};

const LAST_UPDATED = "October 24, 2023";

const tocItems = [
  { id: "introduction", label: "Introduction", number: 1 },
  { id: "disclaimer", label: "Medical Disclaimer", number: 2 },
  { id: "accounts", label: "User Accounts & Security", number: 3 },
  { id: "subscriptions", label: "Subscriptions & Payments", number: 4 },
  { id: "intellectual", label: "Intellectual Property", number: 5 },
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
            Last updated: <span className="ml-1 font-medium text-primary">{LAST_UPDATED}</span>
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
                <span className="material-icons-outlined text-primary" aria-hidden>
                  toc
                </span>
                <h2 className="text-lg font-bold text-foreground">Table of Contents</h2>
              </div>
              <ol className="space-y-1">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="group flex items-center justify-between rounded-lg p-3 text-muted transition-colors hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/10"
                    >
                      <span className="text-sm font-medium">{item.number}. {item.label}</span>
                      <span className="material-icons-outlined text-xs opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
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
              <h2 id="section-introduction" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                1. Introduction
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                Welcome to <strong className="text-foreground">Yoga With Doctor</strong>. These Terms and Conditions govern your use of our mobile application and related services. By accessing or using our App, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not use our Service.
              </p>
            </section>

            {/* 2. Medical Disclaimer */}
            <section
              id="disclaimer"
              className="scroll-mt-28"
              aria-labelledby="section-disclaimer"
            >
              <div className="mb-8 rounded-r-2xl rounded-bl-2xl border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-950/30 dark:border-amber-600 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="material-icons-outlined mt-1 text-3xl text-amber-700 dark:text-amber-400" aria-hidden>
                    medical_services
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-amber-800 dark:text-amber-300 mb-3">
                      Medical Disclaimer
                    </h3>
                    <p className="leading-relaxed text-amber-800/90 dark:text-amber-200/90">
                      The content provided in this app is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-muted">
                <strong className="text-foreground">Yoga With Doctor</strong> is designed for educational and informational purposes only. While our content is reviewed by medical professionals, participation in any exercise or yoga program carries the risk of physical injury. By using this App, you agree that you do so at your own risk.
              </p>
              <ul className="list-none space-y-3 pl-0" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="text-muted">Consult your physician before starting any new exercise routine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="text-muted">Stop immediately if you experience pain or discomfort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="text-muted">We are not liable for any injuries sustained while using our app.</span>
                </li>
              </ul>
            </section>

            {/* 3. User Accounts & Security */}
            <section
              id="accounts"
              className="scroll-mt-28"
              aria-labelledby="section-accounts"
            >
              <h2 id="section-accounts" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                3. User Accounts & Security
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  To access certain features like our &ldquo;Premium Collection&rdquo; or &ldquo;Mindfulness Mastery&rdquo; courses, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password.
                </p>
                <p>
                  You agree to accept responsibility for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* 4. Subscriptions & Payments */}
            <section
              id="subscriptions"
              className="scroll-mt-28"
              aria-labelledby="section-subscriptions"
            >
              <h2 id="section-subscriptions" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                4. Subscriptions & Payments
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted">
                Some parts of the Service are billed on a subscription basis (&ldquo;Subscription(s)&rdquo;). You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly, or annually).
              </p>
              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-soft transition-shadow hover:shadow-card dark:bg-surface-dark dark:border-border">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Monthly</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">৳ 850</span>
                    <span className="text-sm text-muted">/mo</span>
                  </div>
                </div>
                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-primary bg-surface p-6 shadow-soft dark:bg-surface-dark">
                  <span className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-bold text-white">
                    Save 20%
                  </span>
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Yearly</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">৳ 8,500</span>
                    <span className="text-sm text-muted">/yr</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-primary/5 p-6 dark:bg-primary/10">
                <h4 className="mb-2 font-bold text-foreground">Refund Policy:</h4>
                <p className="text-sm leading-relaxed text-muted">
                  Unless required by law, paid Subscription fees are non-refundable. Please refer to Apple&apos;s App Store or Google Play Store policies for refund requests.
                </p>
              </div>
            </section>

            {/* 5. Intellectual Property */}
            <section
              id="intellectual"
              className="scroll-mt-28"
              aria-labelledby="section-intellectual"
            >
              <h2 id="section-intellectual" className="font-display text-2xl font-bold text-foreground md:text-3xl mb-6">
                5. Intellectual Property
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                The Service and its original content (excluding Content provided by you or other users), features, and functionality are and will remain the exclusive property of Yoga With Doctor and its licensors.
              </p>
            </section>

            {/* Footer CTA card */}
            <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center shadow-soft dark:bg-surface-dark md:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Questions?</h3>
              <p className="mx-auto mb-8 max-w-lg text-muted">
                If you have any questions about our Terms and Conditions, please contact our legal team.
              </p>
              <Link
                href="mailto:legal@yogawithdoctor.com?subject=Terms%20and%20Conditions"
                className="mb-8 inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Support
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted">
                <Link href="/privacy" className="transition-colors hover:text-primary">
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
