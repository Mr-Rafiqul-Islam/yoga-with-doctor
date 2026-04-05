'use client';
import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";

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

const whatsappSupportUrl =
  "https://wa.me/8801312353577?text=" +
  encodeURIComponent("Hello, I need support regarding Yoga With Doctor.");

const supportPhoneHref = "tel:+8801701313001";

const socialLinks = [
  {
    href: "https://www.facebook.com/yogawithdoctor",
    label: "Facebook",
    Icon: FaFacebook,
    className:
      "border-gray-700/70 bg-gray-800/40 text-[#8b9dc3] hover:border-[#1877F2]/55 hover:bg-[#1877F2]/18 hover:text-[#5eabff] hover:shadow-[0_0_20px_rgba(24,119,242,0.35)] focus-visible:ring-[#1877F2]/55",
  },
  {
    href: "https://www.youtube.com/@yogawithdoctor",
    label: "YouTube",
    Icon: FaYoutube,
    className:
      "border-gray-700/70 bg-gray-800/40 text-[#c94b4b] hover:border-[#ff4444]/55 hover:bg-[#ff0000]/14 hover:text-[#ff6b6b] hover:shadow-[0_0_20px_rgba(255,68,68,0.35)] focus-visible:ring-[#ff4444]/55",
  },
  {
    href: "https://www.linkedin.com/company/yoga-with-doctorbd/",
    label: "LinkedIn",
    Icon: FaLinkedin,
    className:
      "border-gray-700/70 bg-gray-800/40 text-[#6ba3d6] hover:border-[#0a66c2]/55 hover:bg-[#0a66c2]/18 hover:text-[#6ec0ff] hover:shadow-[0_0_20px_rgba(10,102,194,0.35)] focus-visible:ring-[#0a66c2]/55",
  },
  {
    href: "https://www.tiktok.com/@yogawithdoctor",
    label: "Tiktok",
    Icon: AiFillTikTok,
    className:
      "border-gray-700/70 bg-gray-800/40 text-gray-300 hover:border-[#fe2c55]/45 hover:bg-gradient-to-br hover:from-[#00f2ea]/12 hover:to-[#fe2c55]/12 hover:text-white hover:shadow-[0_0_18px_rgba(254,44,85,0.28),0_0_12px_rgba(0,242,234,0.2)] focus-visible:ring-[#fe2c55]/50",
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto bg-gray-900 pt-16 pb-8 text-gray-300"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4 md:items-stretch">
          {/* Brand */}
          <div className="flex min-h-0 flex-col md:col-span-1 md:h-full">
            <SiteLogo variant="footer" />
            <p className="max-w-xs text-sm text-gray-400">
              Bridging the gap between ancient wisdom and modern medicine for a healthier you.
              Guided by doctors, inspired by timeless yogic practices.
            </p>
            <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
              {socialLinks.map(({ href, label, Icon, className }) => (
                <a
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xl transition-all duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${className}`}
                >
                  <Icon className="pointer-events-none" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="flex min-h-0 h-full flex-col">
            <h3 className="mb-4 shrink-0 font-semibold text-white">Platform</h3>
            <ul className="mt-auto space-y-3 text-sm">
              {platformLinks.map(({ href, label, target }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={target}
                    className="inline-block py-1.5 text-gray-400 transition-colors hover:text-primary focus:outline-none focus:ring-offset-gray-900 rounded-radius-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex min-h-0 h-full flex-col">
            <h3 className="mb-4 shrink-0 font-semibold text-white">Support</h3>
            <ul className="mt-auto space-y-3 text-sm">
              {supportLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-block py-1.5 text-gray-400 transition-colors hover:text-primary focus:outline-none focus:ring-offset-gray-900 rounded-radius-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick support */}
          <div className="flex min-h-0 h-full flex-col">
            <h3 className="mb-4 shrink-0 font-semibold text-white">Quick Support</h3>
            <p className="shrink-0 text-sm text-gray-400">
              Chat or call below — full details on our{" "}
              <Link
                href="/contact"
                className="text-primary underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                contact page
              </Link>
              .
            </p>
            <ul className="mt-auto space-y-2 pt-2" role="list">
              <li>
                <a
                  href={whatsappSupportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp chat for support"
                  className="group flex items-center gap-2.5 rounded-lg border border-gray-800/80 bg-gray-800/40 px-3 py-2.5 shadow-sm transition-all hover:border-emerald-500/40 hover:bg-gray-800/70 hover:shadow-md hover:shadow-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/25 to-emerald-600/10 text-xl text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-105"
                    aria-hidden
                  >
                    <FaWhatsapp className="drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]" />
                  </span>
                  <span className="min-w-0 flex-1 text-left text-sm font-semibold text-white">
                    WhatsApp support
                  </span>
                  <span
                    className="material-icons-outlined text-base text-gray-500 transition-colors group-hover:text-emerald-400"
                    aria-hidden
                  >
                    chat
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={supportPhoneHref}
                  aria-label="Call support line"
                  className="group flex items-center gap-2.5 rounded-lg border border-gray-800/80 bg-gray-800/40 px-3 py-2.5 shadow-sm transition-all hover:border-primary/40 hover:bg-gray-800/70 hover:shadow-md hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/10 text-xl text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-105"
                    aria-hidden
                  >
                    <MdPhoneInTalk className="drop-shadow-[0_0_10px_rgba(0,168,106,0.35)]" />
                  </span>
                  <span className="min-w-0 flex-1 text-left text-sm font-semibold text-white">
                    Direct call
                  </span>
                  <span
                    className="material-icons-outlined text-base text-gray-500 transition-colors group-hover:text-primary"
                    aria-hidden
                  >
                    call
                  </span>
                </a>
              </li>
            </ul>
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
