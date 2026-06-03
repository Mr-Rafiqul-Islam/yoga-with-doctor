"use client";

import { useId, useCallback } from "react";

export type LevelOption = "beginner" | "intermediate" | "advanced";

export type CourseFilters = {
  levels: LevelOption[];
  goals: string[];
};

const LEVEL_OPTIONS: { value: LevelOption; label: string }[] = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export type CourseFilterPanelsProps = {
  levels: LevelOption[];
  goals: string[];
  goalOptions: string[];
  onLevelToggle: (value: LevelOption) => void;
  onGoalToggle: (goal: string) => void;
};

export function CourseFilterPanels({
  levels,
  goals,
  goalOptions,
  onLevelToggle,
  onGoalToggle,
}: CourseFilterPanelsProps) {
  const levelId = useId();
  const goalsId = useId();

  return (
    <div className="space-y-8">
      <section>
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800">
          <fieldset className="border-0 p-0" aria-describedby={undefined}>
            <legend className="font-display text-lg font-semibold text-foreground mb-4">
              Level
            </legend>
            <div
              className="space-y-3"
              role="group"
              aria-label="Course level (multiple selection)"
            >
              {LEVEL_OPTIONS.map((opt) => {
                const id = `${levelId}-${opt.value}`;
                const checked = levels.includes(opt.value);
                return (
                  <label
                    key={opt.value}
                    htmlFor={id}
                    className="group flex cursor-pointer items-center gap-3 transition-colors"
                  >
                    <input
                      id={id}
                      type="checkbox"
                      value={opt.value}
                      checked={checked}
                      onChange={() => onLevelToggle(opt.value)}
                      aria-checked={checked}
                      className="peer sr-only"
                    />
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-transparent transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:[&_.check]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 dark:border-gray-500 dark:peer-checked:border-primary dark:peer-checked:bg-primary"
                      aria-hidden
                    >
                      <span className="check material-icons-outlined text-sm font-bold text-white opacity-0">
                        check
                      </span>
                    </span>
                    <span className="text-body-md text-foreground transition-colors group-hover:text-primary dark:text-gray-300">
                      {opt.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>
      </section>

      <section>
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800">
          <h3
            id={goalsId}
            className="font-display text-lg font-semibold text-foreground mb-4"
          >
            Goals
          </h3>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-labelledby={goalsId}
          >
            {goalOptions.map((goal) => {
              const selected = goals.includes(goal);
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => onGoalToggle(goal)}
                  aria-pressed={selected}
                  className={
                    selected
                      ? "rounded-lg border border-transparent bg-sage-light px-3 py-1.5 text-caption font-medium text-foreground transition-colors dark:bg-sage-dark dark:text-gray-100"
                      : "rounded-lg border border-transparent bg-gray-100 px-3 py-1.5 text-caption font-medium text-muted transition-colors hover:border-primary hover:text-primary dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
                  }
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export type FilterSidebarProps = {
  filters: CourseFilters;
  goalOptions: string[];
  onFiltersChange: (filters: CourseFilters) => void;
  className?: string;
};

export function FilterSidebar({
  filters,
  goalOptions,
  onFiltersChange,
  className = "",
}: FilterSidebarProps) {
  const { levels, goals } = filters;

  const handleLevelToggle = useCallback(
    (value: LevelOption) => {
      const next = levels.includes(value)
        ? levels.filter((l) => l !== value)
        : [...levels, value];
      onFiltersChange({ levels: next, goals });
    },
    [levels, goals, onFiltersChange]
  );

  const handleGoalToggle = useCallback(
    (goal: string) => {
      const next = goals.includes(goal)
        ? goals.filter((g) => g !== goal)
        : [...goals, goal];
      onFiltersChange({ levels, goals: next });
    },
    [levels, goals, onFiltersChange]
  );

  return (
    <aside
      aria-label="Course filters"
      className={[
        "hidden w-full shrink-0 lg:block lg:w-64",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <CourseFilterPanels
        levels={levels}
        goals={goals}
        goalOptions={goalOptions}
        onLevelToggle={handleLevelToggle}
        onGoalToggle={handleGoalToggle}
      />
    </aside>
  );
}
