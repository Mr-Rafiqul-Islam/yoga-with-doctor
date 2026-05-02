import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      '"Finally a program that didn\'t make me feel like I was going to break! I feel stronger now at 32 weeks than I did at the start."',
    name: "Sarah L.",
    role: "First-time Mom",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1aOzDPvRVHomWk9Bl5AyXgsEvieQ7Jp8j73wiDC56jgZMKzB55GXRNOFs9OyimdJOuqVUdHUc31hJ7QtrDPqytDYL51fMzPMe3ELPYDRZHSEdHzyLggeehrV14zl4kHPDz-ajaED1u42lITW4eGs0VBMB8Ks5sHXxVh_pZC1p1tZnxvFj9w35NI4MF0IniNjiogZxfqycs0NwLtcBRXa4koCkF4oQi8wDcfMVpYy46CFgoKJlzaZY5Uv9NYNkbUo4KxLvSCDckJDt",
    offset: false,
  },
  {
    quote:
      '"Dr. Rossi\'s explanations helped me understand what was happening inside. The pelvic exercises were a lifesaver."',
    name: "Maya R.",
    role: "Mom of Two",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ_HuEc-RZnNNBuu57WYMBP5pCBUNfVT08vjlJoxKbciFDzsbRVfY-mopji_xjJ9KW1bEVhpHlBzDIyKK_icrgvX7pwG0tXiiMYPTbSqZo0o-rbFxVDbaZMb9_qlW1jfgNUP-rpcPw52Y0YexUWbYjqiKkpUNdty288m64MsHmTGQKgBaHxJoFJrKqYASSHDq58VewtYf-wk4ga7jcjEW7A6JbsXZEAVgcDZBnT18wtIFl0NgbDqKNX0kpAJrPnW80mWn6pcPUAIR",
    offset: true,
  },
  {
    quote:
      '"The breathwork techniques actually helped me during my labor. I stayed calm when things got intense."',
    name: "Jessica W.",
    role: "New Mom",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAvm--ft1ybjQaOhz0UAv48Oaaxur1x5_xojSD1QsVHMWVfqjo16IW5cLHVlxQTaWfALetAZ62GUXohLQmbsr4hstQWPt9aWP5F_VbLARtYtDC6FiOM5B0PF4H0T9HY_bE7FiEksxxjT7vDR6MjeQD1bFsGHqBupj6tKb9f5irnFlAZo7b7V2SXp8W1AeTUSDFjbiVkY5Fy9U4aQURkqVCONmcpjMSX87zvTfJYBrcg4SKM21t1JPvT61iVuz2dEpx11QuolLR3r2D",
    offset: false,
  },
] as const;

export function PcpTestimonials() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-8 py-24" delay={0.16}>
      <h2 className="pcp-text-h2 mb-16 text-center text-[color:var(--color-on-surface)]">Stories from the Sanctuary</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className={`space-y-6 ${t.offset ? "md:mt-12" : ""}`}>
            <div className="pcp-glass-card space-y-4 rounded-[2rem] p-8">
              <div className="flex text-[color:var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined material-symbols-outlined--fill text-[22px]">
                    star
                  </span>
                ))}
              </div>
              <p className="pcp-text-body-md italic text-[color:var(--color-on-surface-variant)]">{t.quote}</p>
              <div className="flex items-center gap-3">
                <Image alt="" className="h-10 w-10 rounded-full object-cover" height={40} src={t.avatar} width={40} />
                <div>
                  <p className="font-[family-name:var(--font-body)] text-sm font-medium">{t.name}</p>
                  <p className="text-[10px] uppercase text-[color:var(--color-tertiary)]">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
