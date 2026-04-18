import { notFound } from 'next/navigation';
import { getCourseBySlug } from '@/data/courses';
import { allArticles } from '@/data/articles';
import LessonListWithProgress from '@/components/LessonListWithProgress';

type Props = {
  params: { courseSlug: string };
};

export function generateMetadata({ params }: Props) {
  const course = getCourseBySlug(params.courseSlug);
  if (!course) return {};
  return {
    title: `${course.title} | 学び舎 | IRON BODY`,
    description: course.description,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.courseSlug);
  if (!course) notFound();

  const lessonsWithArticles = course.lessons.map((lesson) => {
    const article = allArticles.find((a) => a.slug === lesson.articleSlug);
    return { lesson, article };
  });

  return (
    <div className="course-detail-page">
      {/* コースヘッダー */}
      <div className="course-detail-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" className="breadcrumb-link">ホーム</a>
            <span className="breadcrumb-sep">/</span>
            <a href="/courses" className="breadcrumb-link">学び舎</a>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{course.title}</span>
          </div>
          <div className="course-detail-header">
            <div className="course-detail-badge">{course.badgeLabel}</div>
            <div>
              <div className="course-detail-meta">
                <span className="course-level-tag">{course.level}</span>
                <span className="course-time">{course.estimatedTime}</span>
                <span className="course-lessons-count">全{course.lessons.length}レッスン</span>
              </div>
              <h1 className="course-detail-title">{course.title}</h1>
              <p className="course-detail-desc">{course.description}</p>
            </div>
          </div>

          <div className="course-completion-note">
            <span>🎖</span>
            全レッスンの理解度チェックをクリアすると「<strong>{course.badgeLabel}</strong>」を獲得できます
          </div>
        </div>
      </div>

      {/* レッスン一覧 */}
      <div className="container">
        <LessonListWithProgress
          courseSlug={course.slug}
          lessonsWithArticles={lessonsWithArticles}
          totalLessons={course.lessons.length}
          badgeLabel={course.badgeLabel}
        />
      </div>
    </div>
  );
}
