import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_ART =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEwMma-VfyUuCwTDqrRbMqR2H_11F6UxuqspmqFE7qLxZeh81XcMKkzElZ1iXy76MPWxPsJ5eZYLXSGrb2xhAzwFLn-wpMsq--5SEyP3pVPm_E9gvdtvy6BwTuIi6eI9-vAYSwJD_h0q2sU5Gp5ZLgvNaSwjF40t0Tx2lP11_N_cdPEYmVFuieWvevNZXRDWRzqbzZKuhZ9sXqRTXV6rJ7_K5m5veMGlIGuh9GniOGVVL29AWb0QxGLOLDtgELLDmvUztwhfdF9xo1";

const AVATARS = [
  {
    alt: "Professional headshot of a smiling woman in yoga attire",
    src:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAJj1OPkVs9EM3qepoB1JQ5kN-0sypomKZjQTVXXrS9FGKGGsb-VYpsxQwirca2nnfkzksGcMHPtIdKmPJKwaXnaOmwaBdOsaKsvwLTbxnYZhOHtBS_EDAKSoXu5L1lr9825LXIjusS4I5hsloGOkOfkwAx8-9zF77wJxQRkhF9uzwtjTKRs7VwVrHy25sLDQelMKzgQ3-j0ce9vYc5bJ39aev3DXPvdWhY8UjHfbv0eMSu_of2rPPtpj3hvCqeNCyHNQiKwaLqf1E",
  },
  {
    alt: "Portrait of a healthy middle-aged man smiling",
    src:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGV8TOob2uERArSfPgCh-JDMBsZlL6ysP7XMdRNev-Cdt0Y9gSu4GjNmJn-rlOtVZov9hTMFNSgyVVbT0x6FBr6L4XYFcxqVm76QQY2-LYlVMeWbI8NRlLjQGvxWKQyDtLxIm_lwwg9N6bYMy0FFXJHiB6w92wZNIp5k6VrTO6efwdudzv4B5DWP2dfzGQNxU_NzQ_ZWDF_iTAAgE-g7dqukA-Vn8Trhef1Y76LXsq3wKQhZRg1zcE_3fE8yaN-ptrzliPYOBoFlNu",
  },
  {
    alt: "Close up portrait of a glowing healthy young woman",
    src:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAibyVk3P7kFtV6HCV9MVowluGO5USbozk6epiZwQ1fWojtw-FuAdIhtZpXRS7egr8vDpUPqLF0emHn13pWe5YTkhvtdcyeE-0ri8hecUqnSDSmT69gBoszI9p8gJJj1azvekc1_lVKNG8-0jn7jq9UWP6QOn2a_QwalMzGVQ2oETB8oAGduL4gT6StNg5RdHlrprnLJlqVE5GIc2cs5SBrm6hvw9iZasP6E5Vsr7Bv7vR8p-hn3QuLbFz6SXPQbKJBn1Xqd4CkEuhc",
  },
] as const;

export function YfwlHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <span
            className="inline-block rounded-full px-4 py-1 yfwl-text-label-caps text-[color:var(--yfwl-on-tertiary-container)]"
            style={{ backgroundColor: "var(--yfwl-tertiary-container)" }}
          >
            Limited Seats: Only 12 Remaining
          </span>
          <h1 className="yfwl-text-h1 text-[color:var(--yfwl-on-surface)]">
            Lose Weight Naturally with Yoga in{" "}
            <span className="text-[color:var(--yfwl-primary-container)]">30 Days</span>
          </h1>
          <p className="yfwl-text-body-lg max-w-2xl text-[color:var(--yfwl-on-surface-variant)]">
            A doctor-guided fat loss system designed for sustainable results without grueling gym
            sessions or extreme dieting.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              className="flex h-[56px] items-center justify-center rounded-2xl px-8 py-5 text-lg font-bold text-white shadow-xl transition-all hover:shadow-2xl"
              href="#enrollment"
              style={{ backgroundColor: "var(--yfwl-brand-orange)" }}
            >
              Start Your Transformation Today
            </a>
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                {AVATARS.map(({ alt, src }) => (
                  <Image
                    key={src.slice(-24)}
                    src={src}
                    alt={alt}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                    sizes="40px"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-[color:var(--yfwl-outline)]">
                Joined by 10k+ students
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative z-10 rounded-2xl bg-white p-4 shadow-2xl">
            <Image
              src={HERO_ART}
              alt="Transformation Results — yoga journey progress showing improved posture and tone"
              width={1200}
              height={800}
              className="w-full rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute -bottom-6 -left-6 rounded-2xl p-6 shadow-lg"
              style={{
                backgroundColor: "var(--yfwl-primary-container)",
                color: "var(--yfwl-on-primary-container-token)",
              }}
            >
              <div className="yfwl-text-h3">-12kg</div>
              <div className="text-xs font-bold uppercase tracking-widest">In 30 Days</div>
            </div>
          </div>
          <div
            aria-hidden
            className="yfwl-breath-guider animate-pulse absolute -right-12 -top-12"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
