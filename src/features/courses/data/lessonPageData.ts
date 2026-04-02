/**
 * Lesson page data for enrolled students: curriculum with status, progress, doctor's notes.
 * Keys lesson content by course slug and lesson id.
 */

import type { CourseDetailData } from "./courseDetailData";
import { getCourseDetailBySlug } from "./courseDetailData";

export type LessonProgressUiStatus = "completed" | "in_progress" | "not_started";

export interface LessonWithStatus {
  id: string;
  title: string;
  duration: string;
  moduleTitle: string;
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
  /** Server-backed lesson watch ratio 0–100 when progress API is loaded */
  lessonProgressPercent?: number;
  /** Derived from watch state for sidebar / overview */
  progressStatus: LessonProgressUiStatus;
}

export interface DoctorNotes {
  intro: string;
  focusAreas: { title: string; description: string }[];
  disclaimerTitle: string;
  disclaimerText: string;
}

export interface LessonPageData {
  course: CourseDetailData;
  currentLesson: {
    id: string;
    title: string;
    duration: string;
    moduleLabel: string;
    moduleIndex: number;
    lessonIndex: number;
  } | null;
  progressPercent: number;
  curriculum: LessonWithStatus[];
  totalLessons: number;
  totalDuration: string;
  doctorNotes: DoctorNotes | null;
}

/** Curriculum matching Figma design for Morning Sunshine Flow (enrolled view). */
const MORNING_SUNSHINE_CURRICULUM: { moduleTitle: string; lessons: { id: string; title: string; duration: string; isLocked?: boolean }[] }[] = [
  {
    moduleTitle: "Module 1: Introduction",
    lessons: [
      { id: "welcome", title: "Welcome to the Course", duration: "05:00" },
      { id: "safety", title: "Safety Guidelines", duration: "10:00" },
    ],
  },
  {
    moduleTitle: "Module 2: Breathwork",
    lessons: [
      { id: "breathwork", title: "Diaphragmatic Breathing", duration: "12:30" },
    ],
  },
  {
    moduleTitle: "Module 3: Alignment",
    lessons: [
      { id: "posture", title: "Posture Assessment", duration: "08:15" },
      { id: "alignment-basics", title: "Alignment Basics", duration: "15:00" },
      { id: "mistakes", title: "Common Mistakes", duration: "11:45" },
      { id: "spinal-qa", title: "Spinal Health Q&A", duration: "20:00" },
    ],
  },
  {
    moduleTitle: "Module 4: Flow",
    lessons: [
      { id: "sun-salutation-a", title: "Sun Salutation A", duration: "15:00", isLocked: true },
    ],
  },
];

const TOTAL_DURATION_MORNING = "2h 45m";

/** Doctor's notes for Alignment Basics (design content). */
const DOCTOR_NOTES_ALIGNMENT_BASICS: DoctorNotes = {
  intro:
    "In this module, we focus on the spinal alignment necessary for a safe sun salutation practice. As a medical professional, I emphasize that proper form trumps depth. If you feel any pinch in your lower back during the upward dog, please revert to the modified cobra pose demonstrated at 04:15.",
  focusAreas: [
    {
      title: "Thoracic Spine Extension:",
      description: "Focus on lifting the chest rather than bending the lower back.",
    },
    {
      title: "Hamstring Lengthening:",
      description:
        "Keep a micro-bend in the knees if your hamstrings feel tight to protect the lumbar spine.",
    },
    {
      title: "Shoulder Stability:",
      description: "Engage the serratus anterior to keep shoulders away from ears.",
    },
  ],
  disclaimerTitle: "Medical Disclaimer",
  disclaimerText:
    "This course provides general wellness advice. If you have a pre-existing condition, specifically herniated discs or spondylolisthesis, please consult your primary care physician before attempting the advanced variations shown in this lesson.",
};

/** Map of courseSlug -> lessonId -> doctor notes (only where we have content). */
const LESSON_NOTES_BY_COURSE: Record<string, Record<string, DoctorNotes>> = {
  "morning-sunshine-flow": {
    "alignment-basics": DOCTOR_NOTES_ALIGNMENT_BASICS,
  },
};

function flattenCurriculum(
  modules: { moduleTitle: string; lessons: { id: string; title: string; duration: string; isLocked?: boolean }[] }[]
): { id: string; title: string; duration: string; moduleTitle: string; isLocked: boolean }[] {
  const flat: { id: string; title: string; duration: string; moduleTitle: string; isLocked: boolean }[] = [];
  for (const mod of modules) {
    for (const les of mod.lessons) {
      flat.push({
        id: les.id,
        title: les.title,
        duration: les.duration,
        moduleTitle: mod.moduleTitle,
        isLocked: les.isLocked ?? false,
      });
    }
  }
  return flat;
}

function buildCurriculumFromCourse(course: CourseDetailData): LessonWithStatus[] {
  const result: LessonWithStatus[] = [];
  for (const mod of course.curriculum) {
    for (const les of mod.lessons) {
      result.push({
        id: les.id,
        title: les.title,
        duration: les.duration,
        moduleTitle: mod.title,
        isCompleted: false,
        isCurrent: false,
        isLocked: les.isLocked ?? false,
        progressStatus: "not_started",
      });
    }
  }
  return result;
}

/**
 * Returns lesson page data for an enrolled student.
 * If lessonId is omitted, the first non-locked lesson is used.
 */
export function getLessonPageData(courseSlug: string, lessonId?: string): LessonPageData | null {
  const course = getCourseDetailBySlug(courseSlug);
  if (!course) return null;

  const isMorningSunshine = courseSlug === "morning-sunshine-flow";
  const curriculumModules = isMorningSunshine ? MORNING_SUNSHINE_CURRICULUM : null;

  let curriculum: LessonWithStatus[];
  let totalDuration: string;

  if (curriculumModules) {
    const flat = flattenCurriculum(curriculumModules);
    const currentId = lessonId ?? flat.find((l) => !l.isLocked)?.id ?? flat[0]?.id;

    curriculum = flat.map((les, index) => {
      const isCurrent = les.id === currentId;
      const idx = flat.findIndex((l) => l.id === currentId);
      const isCompleted = index < idx;
      return {
        id: les.id,
        title: les.title,
        duration: les.duration,
        moduleTitle: les.moduleTitle,
        isCompleted,
        isCurrent,
        isLocked: les.isLocked,
        progressStatus: isCompleted ? "completed" : "not_started",
      };
    });
    totalDuration = TOTAL_DURATION_MORNING;
  } else {
    curriculum = buildCurriculumFromCourse(course);
    const currentId = lessonId ?? curriculum[0]?.id;
    const currentIdx = curriculum.findIndex((l) => l.id === currentId);
    curriculum = curriculum.map((les, index) => {
      const done = currentIdx >= 0 && index < currentIdx;
      return {
        ...les,
        isCurrent: les.id === currentId,
        isCompleted: done,
        progressStatus: done ? "completed" : "not_started",
      };
    });
    const totalMins = course.curriculum.reduce(
      (acc, m) => acc + m.lessons.length * 10,
      0
    );
    totalDuration = totalMins >= 60 ? `${Math.floor(totalMins / 60)}h ${totalMins % 60}m` : `${totalMins}m`;
  }

  const totalLessons = curriculum.length;
  const completedCount = curriculum.filter((l) => l.isCompleted).length;
  let progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  // Match Figma design: 20% when current lesson is Alignment Basics
  if (courseSlug === "morning-sunshine-flow" && lessonId && lessonId === "alignment-basics") {
    progressPercent = 20;
  }

  const current = curriculum.find((l) => l.isCurrent);
  let moduleIndex = 0;
  let lessonIndex = 0;
  if (current && curriculumModules) {
    for (let i = 0; i < curriculumModules.length; i++) {
      const idx = curriculumModules[i].lessons.findIndex((l) => l.id === current.id);
      if (idx >= 0) {
        moduleIndex = i + 1;
        lessonIndex = idx + 1;
        break;
      }
    }
  }

  const doctorNotes =
    current && LESSON_NOTES_BY_COURSE[courseSlug]?.[current.id] != null
      ? LESSON_NOTES_BY_COURSE[courseSlug][current.id]
      : null;

  return {
    course,
    currentLesson: current
      ? {
          id: current.id,
          title: current.title,
          duration: current.duration,
          moduleLabel: current.moduleTitle,
          moduleIndex,
          lessonIndex,
        }
      : null,
    progressPercent,
    curriculum,
    totalLessons,
    totalDuration,
    doctorNotes,
  };
}
