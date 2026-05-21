import { ContactDetailItem } from "./ContactDetailItem";

const WHATSAPP_SUPPORT_URL =
  "https://wa.me/8801349002180?text=" +
  encodeURIComponent("Hello, I need support regarding Yoga With Doctor.");

const DIRECT_CALL_LINKS = [
  { href: "tel:+8801349002180", label: "+880 1349-002180" },
  // { href: "tel:+8801701313001", label: "01701313001" },
  // { href: "tel:+8801701313002", label: "01701313002" },
] as const;

export function ContactSupportNumbersSection({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 ${className}`}
      aria-labelledby="support-numbers-heading"
    >
      <h2
        id="support-numbers-heading"
        className="font-display mb-6 text-lg font-semibold text-foreground md:mb-8"
      >
        Need Immediate Assistance?
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
        <div className="md:min-h-0 md:pr-6 lg:pr-10">
          <ContactDetailItem
            icon="phone_in_talk"
            label="Call Our Support Team"
            value={
              <p className="leading-relaxed">
                {DIRECT_CALL_LINKS.map(({ href, label }, i) => (
                  <span key={href}>
                    {i > 0 && <span className="text-muted">, </span>}
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  </span>
                ))}
              </p>
            }
          />
        </div>
        <div className="md:min-h-0 md:pl-6 lg:pl-10">
          <ContactDetailItem
            icon="chat"
            label="Chat on WhatsApp"
            value={
              <a
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:underline"
              >
                +880 1349-002180
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
