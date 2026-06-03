"use client";

import { useCallback } from "react";
import { Modal } from "@/components/Modal";
import {
  CourseFilterPanels,
  type CourseFilters,
  type LevelOption,
} from "./FilterSidebar";

export type CourseFilterPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: CourseFilters;
  goalOptions: string[];
  onFiltersChange: (filters: CourseFilters) => void;
};

export function CourseFilterPopup({
  isOpen,
  onClose,
  filters,
  goalOptions,
  onFiltersChange,
}: CourseFilterPopupProps) {
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
    <Modal isOpen={isOpen} onClose={onClose} title="Filter courses">
      <CourseFilterPanels
        levels={levels}
        goals={goals}
        goalOptions={goalOptions}
        onLevelToggle={handleLevelToggle}
        onGoalToggle={handleGoalToggle}
      />
    </Modal>
  );
}
