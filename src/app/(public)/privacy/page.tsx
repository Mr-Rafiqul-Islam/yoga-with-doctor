import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Yoga With Doctor",
  description:
    "Understand how Yoga With Doctor protects your data and your rights. Our privacy policy covers data collection, usage, and security.",
};

const LAST_UPDATED = "October 24, 2023";

const tocItems = [
  { id: "introduction", label: "Introduction", number: 1 },
  { id: "data-collection", label: "Data We Collect", number: 2 },
  { id: "data-usage", label: "How We Use Your Data", number: 3 },
  { id: "data-security", label: "Data Security", number: 4 },
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* Page header */}
        <header className="mb-10 text-center md:mb-12">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Legal Policies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Transparency is key to our relationship. Understand how we protect your data and your rights.
          </p>
        </header>

        {/* Two-column layout: TOC (desktop) + content */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Table of contents - sticky on desktop, visible on mobile above or as sidebar */}
          <aside
            className="lg:col-span-3"
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
          <div className="lg:col-span-9 lg:pr-4">
            {/* Policy title and date */}
            <div className="mb-10 border-b border-border pb-6">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Privacy Policy
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
              <p className="font-display text-xl italic leading-relaxed text-muted md:text-2xl">
                At &ldquo;Yoga With Doctor,&rdquo; we believe transparency is the foundation of trust. This policy outlines our commitment to protecting your personal wellness journey.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We value your privacy and are dedicated to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our mobile application and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            {/* 2. Data We Collect */}
            <section
              id="data-collection"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-data-collection"
            >
              <h3 id="section-data-collection" className="font-display text-2xl font-bold text-foreground md:text-3xl">
                1. Data We Collect
              </h3>
              <p className="mt-6 mb-6 leading-relaxed text-muted">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="space-y-6" role="list">
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground">Identity Data:</strong> Includes first name, maiden name, last name, username or similar identifier.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground">Health Data:</strong> Includes information about your yoga practice level, injuries, and wellness goals that you voluntarily provide to personalize your experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground">Contact Data:</strong> Includes billing address, delivery address, email address and telephone numbers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-relaxed text-muted">
                    <strong className="font-semibold text-foreground">Usage Data:</strong> Includes information about how you use our website, products and services.
                  </span>
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Data */}
            <section
              id="data-usage"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-data-usage"
            >
              <h3 id="section-data-usage" className="font-display text-2xl font-bold text-foreground md:text-3xl">
                2. How We Use Your Data
              </h3>
              <div className="mt-6 space-y-6 leading-relaxed text-muted">
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <p>
                  Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                </p>
              </div>
              <div className="mt-8 border-l-4 border-primary rounded-r-2xl bg-primary/5 p-6 dark:bg-primary/10">
                <p className="text-sm text-foreground/90 md:text-base">
                  <strong className="font-bold text-primary">Note:</strong> We do not sell your personal data to advertisers. Your wellness data is used strictly to improve your personalized yoga recommendations.
                </p>
              </div>
            </section>

            {/* 4. Data Security */}
            <section
              id="data-security"
              className="scroll-mt-28 pb-12 md:pb-16"
              aria-labelledby="section-data-security"
            >
              <h3 id="section-data-security" className="font-display text-2xl font-bold text-foreground md:text-3xl">
                3. Data Security
              </h3>
              <div className="mt-6 space-y-6 leading-relaxed text-muted">
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
                <p>
                  They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                </p>
              </div>
            </section>

            {/* Footer CTA */}
            <div className="border-t border-border pt-10 text-center md:mt-20 md:pt-10">
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
