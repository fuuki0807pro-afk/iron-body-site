import { getCourseBySlug } from '@/data/courses';
import { notFound } from 'next/navigation';

type Props = {
  params: { courseSlug: string };
};

export default function CourseCompletePage({ params }: Props) {
  const course = getCourseBySlug(params.courseSlug);
  if (!course) notFound();

  return (
    <div className="complete-page">
      <div className="container">
        <div className="complete-card">
          <div className="complete-badge-large">{course.badgeLabel}</div>
          <h1 className="complete-title">コース修了</h1>
          <p className="complete-course-name">{course.title}</p>
          <p className="complete-message">
            全レッスンの理解度チェックをクリアしました。<br />
            学んだことを実際のトレーニングに活かしてください。
          </p>
          <div className="complete-actions">
            <a href="/courses" className="btn-primary">
              他のコースを見る
            </a>
            <a href="/" className="btn-outline">
              記事一覧に戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
