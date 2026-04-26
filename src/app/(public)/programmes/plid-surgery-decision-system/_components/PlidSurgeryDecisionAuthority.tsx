import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const DOCTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDf6Pcu3kAg7AQKOKVCffp_RNwSo6bXuo6_BKwFS9Bv29C2FqNpFEqrzXb1eK4hkTb8IVUs6hpxu1sWIkVBB8bb9VOg44mnZoi0ZtW4lOHhxpA2NZ2i2wVuCsovlItIotsD4va6CEUj_Ha3NUU91htXGPWjQikc-3066xskNg4Rr5hrmahZL7lg5_XBXUWs34EmcepHaoOHgzlfrQv1h77hPiaXtSoavooYQnp94A7zERncVTFvsMvw9hDYJgT6Pb3jYcmAqV6bIng";

export function PlidSurgeryDecisionAuthority() {
  return (
    <ScrollReveal className="bg-surface py-20 md:py-28" id="doctor">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-tertiary-fixed px-4 py-2 text-on-tertiary-fixed">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Medical Lead</span>
          </div>

          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            Meet Dr. Shah Alam
          </h2>
          <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
            With years in musculoskeletal rehabilitation, Dr. Shah Alam has helped thousands of
            patients avoid unnecessary surgery. His methodology blends modern neuro-orthopedics with
            traditional yogic science.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-2">
            <div>
              <p className="text-3xl font-extrabold text-primary">5,000+</p>
              <p className="text-xs uppercase tracking-wider text-on-surface-variant">Patients treated</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">15 yrs</p>
              <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                Clinical experience
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <Image
              alt="Doctor portrait"
              className="relative z-10 h-[520px] w-full rounded-3xl object-cover shadow-2xl md:h-[600px]"
              height={1200}
              sizes="(max-width: 1023px) 100vw, 50vw"
              src={DOCTOR_IMAGE}
              width={960}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

