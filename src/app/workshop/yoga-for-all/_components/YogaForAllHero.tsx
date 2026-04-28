import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATARS = [
  {
    id: "u1",
    alt: "User 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD26Rd4aGglQUErW7A5LBARJ4GE8DsHdgBLVvY2a8mXk2LD4nM6kqAHxwbz6QmcUqg5XcTkHaueyMW6rA-9awqs9u_2VuQWwKaNU5QF0x2KVdZpu4ceHv3d2VmA-nGoJEzRxwKk-kDdbgoW-wFsoGMzD0gc4LXYRZNqAT5r5Quyx58rXLSVXGnYhfQ8nV0VaW_ByarGiNccL7OKsfscKnjJgOpOKT-jINmp7RSDIqjE6ZuIgbxe0NCFU_aBIHLXuOXFRaghtu5OdGCm",
  },
  {
    id: "u2",
    alt: "User 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGtQ9PGoYNkaPphOmi8lRalI3R79gJlGolov2rfb4h6u7BakyKmsMoeMyrsHB7KSfP11V5Oq-v7Wc6JUIyl1GPxyXZLQV93YB5TvqNg_JKXTqOF7lkG18AdfEOnxXbhS6aw4YBzcnabIdWBmqZGrmufcteb5lAF-uFQPfpB6K_n__yq4nTA9p4KjNiBYgtJM_gtpwR99CTqsZvko3MJsoTEp9LurjKmcomSz8hPSxyu0ZH-leO8ISjwncf3pOcE95mD1lKJSF5Qsr9",
  },
] as const;

export function YogaForAllHero() {
  return (
    <ScrollReveal className="relative overflow-hidden pt-20 pb-32" as="section">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[rgb(var(--color-secondary-container-rgb)/0.3)] to-[var(--color-surface)]" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-fixed)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-on-primary-fixed)]">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Limited Free Seats Available
          </div>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-on-surface)] md:text-5xl">
            Improve Your Health, Energy &amp; Life with Simple Yoga
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            No experience needed, anyone can start. Discover the clinical precision of movement
            blended with holistic peace.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#register"
              className="lift-hover rounded-full bg-[#FF6D00] px-10 py-5 text-center text-lg font-bold text-white shadow-lg transition-all active:scale-95 hover:-translate-y-1 hover:shadow-[#FF6D00]/20"
            >
              Join Free Workshop
            </a>

            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <Image
                    key={a.id}
                    alt={a.alt}
                    src={a.src}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--color-on-surface-variant)]">
                4,200+ joined this week
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-[var(--color-primary-container)] blur-3xl opacity-10" />

          <Image
            alt="Yoga Session"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdR6-jUDddzUo3EvfS0E2XcrqZZwSwIjRgtFPU4yS41oBpNkcXY55fRFFzGHUb0NtqYoDiqWob41c7NihuLLB87F53bXdoAVPu3nk3PUw1CPaTQTWx6yBeYWaOyyrGVMUHFOjqhhkYyEZAqGTmKCgyKHdbrZLV1XU8QwGaSCjheeCnjkZz8YnMDYzziG5HcpUUVCLV_4Ds4JuawuNtVGM2TRUqrT8XKhihlmLm2R3mGCMZ4o-oT_5vlEL1xoeSBR44Zvz_K9lhzVTg"
            width={1200}
            height={900}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
          />

          <div className="glass-card absolute -bottom-6 -left-6 z-20 hidden rounded-2xl p-6 md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)]">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <div className="font-bold">Instant Energy</div>
                <div className="text-xs text-[var(--color-on-surface-variant)]">
                  Feel better in 15 mins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

