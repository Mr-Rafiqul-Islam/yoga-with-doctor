import Image from "next/image";

const LOGIN_HERO_IMAGE = "/Yoga with doctor login Page Image.png";

/**
 * AuthHeroSection - Left panel component for login/auth pages.
 * Displays background image with overlaid inspirational quote and tagline.
 */
export function AuthHeroSection() {
  return (
    <div
      className="relative hidden overflow-hidden lg:flex lg:w-1/2"
      role="img"
      aria-label="Doctor providing medical wellness guidance"
    >
      <Image
        src={LOGIN_HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="50vw"
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-12">
        <div className="rounded-lg bg-black/30 p-8 backdrop-blur-[1px]">
          <p className="mb-4 font-serif text-3xl italic leading-relaxed text-white">
            &quot;Small daily actions create lifelong health.&quot;
          </p>
          <div className="mb-2 h-1 w-20 bg-primary" />
          <p className="text-sm font-light uppercase tracking-[0.2em] text-white/80">
            DOCTOR-GUIDED • EVIDENCE-BASED • TRANSFORMATION-FOCUSED
          </p>
        </div>
      </div>
    </div>
  );
}
