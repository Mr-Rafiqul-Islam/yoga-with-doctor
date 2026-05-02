import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const DOC_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQOraLtgkMN0AWsxMZyF3HU-g_TE8trv8dcI5Sa2wlKXDkzKZOn-7anGhq8Tcx0m5vjeG54t85HzCyqq-7yclkzAyhSvQWTEueGKDVG-2_0xu90RrHOmQ8kVeWcOLmug6H0rhIOPsJ5Tl2ld62Z-NprQ63XixEbfp268kOM1RcthhWgR_pN5-0StDw0-N61eyFQiGEkRoEA4QARPnHF38Ytrz_3F6iGbJukc_Ibxdrkv_9LN9Nao4cowlldyP49--eXSRmqXWXmhK6";

const BADGE_SRCS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBupFQRZtywiovVZEmv24lZdMo3TPSpdm9pIvBw_aX5EjTtxxNfzHkPXb3qXMPsWWTANRj9AWnTW2jqiCHCWfgewNTmsjWKFE-X5ePGlbOV7v7QKXN1TNiEjg9RixMga4EZah5BBXF-lGQwHazTivpHYTXMQXJWK9kGNyvXvHQ00uVX6J7evBlty22be1jq0bZE0LNT97Ffyv0NLf6t9y1uH_D4a82o21EG2BgL8Cvl_wRazihJkP9QqD2gqw2gSTt6JKvXUgP9pN8u",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3OYsMUKQRpYt05XgpbazTe83vXMKXkUxlfCQEAglKu1TGWo1toG99RUQ3YNqy79WXGwLxIaKU90qaXinRVkgrqnqszLPNBsftcT7dBR4IRLfpPc3bUz-OK8mdLftN8aESw2mz6behxzL9ulaVe2imQSVS7k0KEedPdbO4FlfkSW6Ue90_4-MzbhYbGdrPYatDwGRpVd4vAHtBxmW5Vi1ONDKZEfowWfc--iZqf7SXhXbKzGMGlF5Cx6GGzGWbkTsFql9QmKGPM7vW",
];

export function YffsAuthority() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-24" delay={0.1}>
      <div className="flex flex-col items-center gap-12 rounded-3xl border border-slate-100 bg-white p-12 shadow-sm md:flex-row">
        <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full border-8 border-[color:var(--yffs-surface-container)] md:h-64 md:w-64">
          <Image
            alt="Dr. Julian Reed, DPT"
            className="h-full w-full object-cover"
            height={256}
            src={DOC_IMG}
            width={256}
          />
        </div>
        <div className="space-y-4">
          <h2 className="yffs-headline-lg">Created by Dr. Julian Reed, DPT</h2>
          <p className="yffs-headline-md italic text-[color:var(--yffs-primary-container)]">
            &quot;I saw too many patients being pushed into surgeries they didn&apos;t need.&quot;
          </p>
          <p className="text-[color:var(--yffs-on-surface-variant)]">
            With over 15 years in orthopedic physical therapy and a certification in therapeutic yoga, Dr. Reed developed
            this program after successfully treating his own frozen shoulder. It combines the clinical precision of PT
            with the holistic mindfulness of yoga.
          </p>
          <div className="flex flex-wrap gap-4">
            {BADGE_SRCS.map((src, i) => (
              <Image
                key={i}
                alt={i === 0 ? "Medical association badge" : "Yoga alliance credential badge"}
                className="h-8 opacity-50 grayscale"
                height={32}
                src={src}
                width={32}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
