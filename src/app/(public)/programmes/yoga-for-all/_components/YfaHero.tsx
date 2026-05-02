import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJYKVYz9u4SMB-E4gVzeBwhI7NvMjSDwRgcyrOr13kpyRvP4VzhbOPyOi8zNKAXVTqUZAZPypeQImAj1oufbLi2hiCg7Tvv8tgynZ0mmKafeTRLT7EbBXSvo4wrLq9A6k8NY54byUuJUeiSqssWQk5WEEV8Om9pgK7DLZH7_R47E0IQJ5qDMXxyJ69_wbO5wB03aaMDNr3vlnkA1g6qOYOnKo9mJ1xvos6ehOfOQQU5ZToL0anML7gYL0y1W-w0a5uLME4A_VkfJgF";

const AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ruA9dQcr1BabczpnGet6RH6f_TO6V0wG-r7o555v4lVog1KnsBidhxpU__pDEmi2O0zKVNbeJjiFXFkldgYb8DEWy40IhnFMR8sY7h-lciIAUnhyYCoHYLqmligKHF4TYGecLJs_A3mf_b71JzYkmRF3kDADpNOYe0sJkBtuMGOHNjiscmdkgl47ZbH8HFEEZuJqj9Il1r3lrnhHqGp_CDBtZjjG8vK8J5cFkUlfhCd3StxHrErESmXuMUYKd29zxi6Dvhib8MezJ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKbxOefHnI36pfbzF06x2wkOIXo8glXJ3KhhmvsfUKqeKh0pn6ILkWU9F8RNrkqje3bvRD-ZT7otxLx5ujxHXE6MNm1jw7q5V97TZMcZ7I9cu7UOVMRR2Q7jgGCzMhbEP04pNvJ25UGmcVaqjsf8I7ak0xTs4G5XfBIKvp5bZWupRPYjA2U8edMGV48ty3LOwgrzJpPkMyOMNczAhh1AZUE-XmOn3pfPhUGg0OFBl9zas3G3nTTvrhLKWF1MozWTj21sTatUKaXzJ",
];

export function YfaHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 pb-24 pt-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--yfa-secondary-container)] px-4 py-1 text-[color:var(--yfa-on-secondary-container)] yfa-text-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified</span>
            Beginner Friendly
          </div>
          <h1 className="yfa-text-h1 leading-tight text-[color:var(--yfa-primary)]">
            Transform Your Body &amp; Mind with Yoga – For Everyone
          </h1>
          <p className="yfa-text-body-lg max-w-xl text-[color:var(--yfa-secondary)]">
            Discover a medically-backed, gentle approach to mindfulness. No flexibility required. No complex poses. Just
            simple movements designed to lower stress and improve heart health.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-xl bg-[color:var(--yfa-tertiary)] px-10 py-4 text-center font-bold text-[color:var(--yfa-on-tertiary)] shadow-lg transition-all hover:shadow-xl active:scale-95"
              href="#pricing"
            >
              Join The Journey Now
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-[color:var(--yfa-outline-variant)] px-4 py-2">
              <div className="flex -space-x-2">
                {AVATARS.map((src) => (
                  <div
                    key={src}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-[color:var(--yfa-surface-container-lowest)] bg-slate-200"
                  >
                    <Image alt="" className="h-full w-full object-cover" height={32} src={src} width={32} />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold">Join 12,000+ Students</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-10 -top-10 -z-10 h-72 w-72 rounded-full bg-[color:var(--yfa-primary-fixed-dim)]/30 blur-3xl" />
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              alt="Woman practicing gentle yoga in a sunlit minimalist room"
              className="h-auto w-full"
              height={640}
              priority
              src={HERO_IMG}
              width={560}
            />
          </div>
          <div className="absolute -bottom-10 -left-10 flex items-center gap-4 rounded-3xl border border-teal-50 bg-white p-6 shadow-xl">
              <div className="relative h-12 w-12 shrink-0">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[color:var(--yfa-primary)]/20" />
              <div className="absolute inset-2 rounded-full bg-[color:var(--yfa-primary)]" />
            </div>
            <div>
              <p className="yfa-text-label-caps text-[color:var(--yfa-secondary)]">REAL-TIME FEEDBACK</p>
              <p className="text-sm font-bold text-[color:var(--yfa-primary)]">Breathe In... Breathe Out</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
