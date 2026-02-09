/**
 * AuthHeroSection - Left panel component for login/auth pages.
 * Displays background image with overlaid inspirational quote and tagline.
 */
export function AuthHeroSection() {
  return (
    <div
      className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuB38k3JMurJ-iHpRraYxkqVIu80rpFgOh_UrvgHzwxUARVskiXeo_Yl9KQijLV6NMxq85313BC0TXjvlmd01w2IUjfHhPt7Wx2SzA6QBs5vyW0dRCK3p5c3fBMpEHJNspc-aGJ0g6pPegn6mdGqCA_pB8q3eGbZlpjOb7Nsuwh6-UDMv2sRPv8cjB9RVNMDnAIgiC-3zxJD9EFKeMtxLmQZHJW4g5jAyJxBy0dP2sPRSWcZjvGLXZKIqEHv0afPqmPtyodG301x_Q')]"
      role="img"
      aria-label="Serene woman practicing yoga at sunrise on a misty mountain top"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
        <p className="mb-4 font-serif text-3xl italic leading-relaxed">
          &quot;Your journey to wellness starts here.&quot;
        </p>
        <div className="mb-2 h-1 w-20 bg-primary" />
        <p className="text-sm font-light uppercase tracking-[0.2em] opacity-80">
          Premium Medical Wellness
        </p>
      </div>
    </div>
  );
}
