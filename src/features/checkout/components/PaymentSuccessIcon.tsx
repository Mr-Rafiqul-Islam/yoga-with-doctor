export function PaymentSuccessIcon() {
  return (
    <div className="group relative mb-8">
      <div
        className="absolute inset-0 rounded-full bg-primary/10 blur-xl transition-transform duration-700 group-hover:scale-110"
        aria-hidden
      />
      <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5 shadow-glow">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg animate-bounce-slight">
          <span
            className="material-icons-outlined text-5xl font-bold text-white"
            aria-hidden
          >
            check
          </span>
        </div>
      </div>
    </div>
  );
}
