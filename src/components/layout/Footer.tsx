'use client';
import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";

const platformLinks = [
  { href: "/courses", label: "Browse Courses", target:"_self"},
  { href: "/videos", label: "Our Videos", target:"_self"},
  { href: "/articles", label: "Medical Articles", target:"_self"},
  { href: "https://drshahalam.com/", label: "Our Instructor" , target:"_blank"},
] as const 

const supportLinks = [
  { href: "/faq", label: "FAQs" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact Us" },
] as const;

const socialLinks = [
  { href: "#", label: "Facebook", icon: "facebook" },
  { href: "#", label: "YouTube", icon: "smart_display" },
  { href: "#", label: "Instagram", icon: "camera_alt" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto bg-gray-900 pt-16 pb-8 text-gray-300"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <SiteLogo variant="footer" />
            <p className="mb-6 max-w-xs text-sm text-gray-400">
              Bridging the gap between ancient wisdom and modern medicine for a
              healthier you.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={icon}
                  href={href}
                  className="text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-offset-gray-900 rounded-radius-sm"
                  aria-label={label}
                >
                  <span className="material-icons-outlined" aria-hidden>
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              {platformLinks.map(({ href, label, target }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={target}
                    className="text-gray-400 transition-colors hover:text-primary focus:outline-none focus:ring-offset-gray-900 rounded-radius-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 transition-colors hover:text-primary focus:outline-none focus:ring-offset-gray-900 rounded-radius-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Stay Healthy</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for weekly medical insights.
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Your email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-lg border-none bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:ring-1 focus:ring-primary"
                autoComplete="email"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-primary px-4 text-white transition-colors hover:bg-primary-variant focus:outline-none focus:ring-offset-gray-900"
                aria-label="Subscribe"
              >
                <span className="material-icons-outlined text-sm" aria-hidden>
                  send
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {currentYear} Yoga With Doctor. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
