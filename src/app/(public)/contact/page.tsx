import Image from "next/image";
import { redirect } from "next/navigation";

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
          {/* Left: Contact info + decorative block */}
          <div className="flex flex-col">
            <header className="mb-10">
              <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-primary">
                Connect With Us
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-6">
                Get in Touch
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                Have a question about your wellness journey? Our clinical
                specialists are here to guide you toward balance and health.
              </p>
            </header>

            <section className="space-y-8 mb-12" aria-label="Contact details">
              <div className="group flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                  <span className="material-icons-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <div className="flex flex-col pt-1">
                  <p className="font-display text-base font-semibold text-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:hello@yogawithdoctor.com"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    hello@yogawithdoctor.com
                  </a>
                </div>
              </div>
              <div className="group flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                  <span className="material-icons-outlined text-[20px]">
                    location_on
                  </span>
                </div>
                <div className="flex flex-col pt-1">
                  <p className="font-display text-base font-semibold text-foreground">
                    Office
                  </p>
                  <p className="text-sm text-muted">
                    123 Wellness Blvd, Medical District
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                  <span className="material-icons-outlined text-[20px]">
                    schedule
                  </span>
                </div>
                <div className="flex flex-col pt-1">
                  <p className="font-display text-base font-semibold text-foreground">
                    Working Hours
                  </p>
                  <p className="text-sm text-muted">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
            </section>

            {/* Decorative quote block */}
            <div className="group relative mt-auto h-64 w-full overflow-hidden rounded-3xl shadow-sm lg:h-72">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz778XUtICHjXgFMObWvblAAN6IA5D0x0bmCH58YIfSWnTVIpjlq5qZlSj4F9UEnlFPZ-V2sfvhoImOSE-eKe31Y7WHTITp7hrDUulV5OjXtfDKIiR9YcubF5T1L6aIKSxVzkM-WUR1MjQczEOL2Ia-TKbPIEsq006Gnlh_iFzDaStZ4aOqarj-UacMYSeG1CL0fyLtI5gfk7xTg_Y6vHcK0m9AHQl-YhKAnwrInCZQoY1x18ZIVmML_kQRIZf419b2tMJuP89zA"
                alt="Serene yoga wellness abstract composition with sage green tones"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-display text-lg italic tracking-wide text-white lg:text-xl">
                  &ldquo;Healing begins with a single connection.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form card */}
          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="sr-only">
              Send us a message
            </h2>
            {showSuccess && (
              <div
                className="mb-8 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-center text-sm font-medium text-primary dark:bg-primary/10"
                role="status"
              >
                Thank you. Your message has been sent. We&apos;ll get back to
                you soon.
              </div>
            )}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft dark:bg-surface-dark md:p-10">
              <form
                action={submitContact}
                className="flex flex-col gap-6"
                method="POST"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="ml-1 text-sm font-medium text-muted"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="ml-1 text-sm font-medium text-muted"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="ml-1 text-sm font-medium text-muted"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Collaboration">Collaboration</option>
                    </select>
                    <span
                      className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted"
                      aria-hidden
                    >
                      <span className="material-icons-outlined text-sm">
                        expand_more
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="ml-1 text-sm font-medium text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your wellness goals..."
                    required
                    rows={6}
                    className="min-h-[160px] w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Send Message</span>
                  <span className="material-icons-outlined text-[18px]">
                    send
                  </span>
                </button>
                <p className="mt-2 text-center text-xs text-muted">
                  We respect your privacy. Your information is strictly
                  confidential.
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
