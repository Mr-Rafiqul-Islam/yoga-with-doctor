export function MasteryProgressCard() {
  const completed = 12;
  const target = 15;
  const progress = (completed / target) * 100;

  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-6 flex flex-col justify-center">
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <span
            className="material-icons-round text-accent text-2xl"
            aria-hidden
          >
            workspace_premium
          </span>
          <h2 className="text-lg font-bold text-white">Mastery Progress</h2>
        </div>
        <p className="mb-6 max-w-md text-sm text-gray-400">
          You&apos;ve completed {completed} modules. Complete{" "}
          {target - completed} more to earn your Advanced Yoga Master
          certification.
        </p>
        <div className="mb-2 max-w-md w-full h-2.5 overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex max-w-md justify-between text-xs text-gray-400">
          <span>{completed} Completed</span>
          <span>Target: {target}</span>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    </article>
  );
}

