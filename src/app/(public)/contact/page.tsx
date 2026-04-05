import { redirect } from "next/navigation";

import {
  ContactDetailsSection,
  ContactForm,
  ContactPageHeader,
  ContactQuoteBlock,
  ContactSuccessBanner,
  ContactSupportNumbersSection,
} from "@/app/(public)/contact/_components";

export const metadata = {
  title: "Contact Us - Yoga With Doctor",
  description:
    "Get in touch with our clinical specialists. We're here to guide you toward balance and health.",
};

async function submitContact(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!name || !email || !message) return;
  // TODO: validate, send email, or persist to DB
  redirect("/contact?sent=1");
}

type ContactPageProps = { searchParams: Promise<{ sent?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sent } = await searchParams;
  const showSuccess = sent === "1";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="flex flex-col">
            <ContactPageHeader />
            <ContactDetailsSection />
            <ContactQuoteBlock />
          </div>

          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="sr-only">
              Send us a message
            </h2>
            {showSuccess && <ContactSuccessBanner />}
            <ContactForm action={submitContact} />
          </section>
          <ContactSupportNumbersSection className="lg:col-span-2" />
        </div>
      </div>
    </main>
  );
}
