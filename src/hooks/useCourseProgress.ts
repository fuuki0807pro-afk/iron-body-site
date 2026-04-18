'use client';
import { useState, useEffect, useCallback } from 'react';

export type LessonStatus = {
  quizPassed: boolean;
};

export type CourseProgressMap = Record<number, LessonStatus>;

const getKey = (courseSlug: string) => `iron_progress_${courseSlug}`;

export function useCourseProgress(courseSlug: string) {
  const [progress, setProgress] = useState<CourseProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(getKey(courseSlug));
      if (stored) setProgress(JSON.parse(stored));
    } catch {
      // localStorage が使えない環境（SSR等）では無視
    }
    setLoaded(true);
  }, [courseSlug]);

  const markQuizPassed = useCallback(
    (lessonNumber: number) => {
      setProgress((prev) => {
        const next = { ...prev, [lessonNumber]: { quizPassed: true } };
        try {
          localStorage.setItem(getKey(courseSlug), JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [courseSlug]
  );

  const isAllCompleted = (totalLessons: number): boolean => {
    for (let i = 1; i <= totalLessons; i++) {
      if (!progress[i]?.quizPassed) return false;
    }
    return true;
  };

  return { progress, markQuizPassed, isAllCompleted, loaded };
}
