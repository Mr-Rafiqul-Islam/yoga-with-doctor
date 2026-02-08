"use client";

import { useId, useState, useCallback } from "react";

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

const DEFAULT_GOALS = [
  "Back Pain",
  "Stress Relief",
  "Flexibility",
  "Weight Loss",
  "Sleep",
];

export type FilterSidebarProps = {
  /** Placeholder for mobile-only search. Omit to hide the search field. */
  searchPlaceholder?: string;
  /** Initial level selection. Default: all levels selected. */
  defaultLevels?: LevelOption[];
  /** Initial selected goal slugs or labels. */
  defaultGoals?: string[];
  /** Called when any filter changes. */
  onFiltersChange?: (filters: CourseFilters) => void;
  /** Optional class for the aside. */
  className?: string;
};

const ALL_LEVELS: LevelOption[] = ["beginner", "intermediate", "advanced"];

export function FilterSidebar({
  searchPlaceholder="Search courses...",
  defaultLevels = ALL_LEVELS,
  defaultGoals = ["Back Pain"],
  onFiltersChange,
  className = "",
}: FilterSidebarProps) {
  const [levels, setLevels] = useState<LevelOption[]>(defaultLevels);
  const [goals, setGoals] = useState<string[]>(defaultGoals);

  const levelId = useId();
  const goalsId = useId();

  const notify = useCallback(
    (updates: Partial<CourseFilters>) => {
      onFiltersChange?.({
        levels,
        goals,
        ...updates,
      });
    },
    [onFiltersChange, levels, goals]
  );

  const handleLevelToggle = useCallback(
    (value: LevelOption) => {
      const next = levels.includes(value)
        ? levels.filter((l) => l !== value)
        : [...levels, value];
      setLevels(next);
      notify({ levels: next });
    },
    [levels, notify]
  );

  const handleGoalToggle = useCallback(
    (goal: string) => {
      const next = goals.includes(goal)
        ? goals.filter((g) => g !== goal)
        : [...goals, goal];
      setGoals(next);
      notify({ goals: next });
    },
    [goals, notify]
  );

  return (
    <aside
      aria-label="Course filters"
      className={["w-full shrink-0 lg:w-64", className].filter(Boolean).join(" ")}
    >
      {searchPlaceholder != null && (
        <div className="relative mb-6 lg:hidden">
          <input
            type="search"
            placeholder={searchPlaceholder}
            aria-label="Search courses"
            className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-body-md text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700"
          />
          <span
            className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          >
            search
          </span>
        </div>
      )}

      <div className="space-y-8">
        {/* Level */}
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
                        onChange={() => handleLevelToggle(opt.value)}
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

        {/* Goals */}
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
              {DEFAULT_GOALS.map((goal) => {
                const selected = goals.includes(goal);
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleGoalToggle(goal)}
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
    </aside>
  );
}
