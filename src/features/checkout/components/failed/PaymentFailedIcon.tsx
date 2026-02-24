export function PaymentFailedIcon() {
  return (
    <div className="group relative mb-10">
      <div className="absolute inset-0 scale-150 rounded-full bg-red-50 transition-transform duration-700 group-hover:scale-125 dark:bg-red-900/10" />
      <div className="absolute inset-0 scale-125 rounded-full bg-red-100 transition-transform duration-500 group-hover:scale-110 dark:bg-red-900/20" />
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-error shadow-glow-error animate-bounce-slow">
        <span className="material-icons-outlined text-6xl font-bold text-white">
          priority_high
        </span>
      </div>
    </div>
  );
}

