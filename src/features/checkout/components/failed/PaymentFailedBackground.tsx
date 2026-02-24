export function PaymentFailedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-red-100/40 blur-[100px] dark:bg-red-900/10" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-orange-50/50 blur-[120px] dark:bg-orange-900/5" />
    </div>
  );
}

