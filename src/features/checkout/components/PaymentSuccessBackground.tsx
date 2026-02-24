export function PaymentSuccessBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.03]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl"
        aria-hidden
      />
    </>
  );
}
