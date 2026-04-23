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

function getApiBaseUrl() {
  return (
    process.env.CORE_API_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    ""
  );
}

async function submitContact(formData: FormData) {
  "use server";
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (!name || !email || !phone || !subject || !message) {
    redirect("/contact?error=1");
  }

  const base = getApiBaseUrl();
  if (!base) {
    console.error("Contact form: CORE_API_URL or NEXT_PUBLIC_API_BASE_URL is not set");
    redirect("/contact?error=1");
  }

  const url = `${base.replace(/\/$/, "")}/api/v1/client/contact`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, subject, message }),
  });

  if (!res.ok) {
    redirect("/contact?error=1");
  }

  redirect("/contact?sent=1");
}

type ContactPageProps = {
  searchParams: Promise<{ sent?: string; error?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sent, error } = await searchParams;
  const showSuccess = sent === "1";
  const showError = error === "1";

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
            {showError && (
              <p
                className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                Something went wrong and we could not send your message. Please
                try again in a moment.
              </p>
            )}
            <ContactForm action={submitContact} />
          </section>
          <ContactSupportNumbersSection className="lg:col-span-2" />
        </div>
      </div>
    </main>
  );
}
