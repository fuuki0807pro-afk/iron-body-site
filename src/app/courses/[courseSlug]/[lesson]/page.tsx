import { notFound } from 'next/navigation';
import { getLessonData, getCourseBySlug } from '@/data/courses';
import LessonPageClient from '@/components/LessonPageClient';

type Props = {
  params: { courseSlug: string; lesson: string };
};

export function generateMetadata({ params }: Props) {
  const lessonNum = parseInt(params.lesson, 10);
  const data = getLessonData(params.courseSlug, lessonNum);
  if (!data || !data.article) return {};
  return {
    title: `Lesson ${lessonNum}: ${data.article.title} | ${data.course.title} | IRON BODY`,
  };
}

export default function LessonPage({ params }: Props) {
  const lessonNum = parseInt(params.lesson, 10);
  if (isNaN(lessonNum)) notFound();

  const data = getLessonData(params.courseSlug, lessonNum);
  if (!data || !data.article) notFound();

  const { lesson, article, course } = data;

  return (
    <LessonPageClient
      courseSlug={params.courseSlug}
      courseTitle={course.title}
      lessonNumber={lessonNum}
      totalLessons={course.lessons.length}
      article={article}
      quizzes={lesson.quizzes}
    />
  );
}
