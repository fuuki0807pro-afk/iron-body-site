'use client';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import { Lesson } from '@/data/courses';
import { Article } from '@/data/articles';

type LessonWithArticle = {
  lesson: Lesson;
  article: Article | undefined;
};

type Props = {
  courseSlug: string;
  lessonsWithArticles: LessonWithArticle[];
  totalLessons: number;
  badgeLabel: string;
};

export default function LessonListWithProgress({
  courseSlug,
  lessonsWithArticles,
  totalLessons,
  badgeLabel,
}: Props) {
  const { progress, isAllCompleted, loaded } = useCourseProgress(courseSlug);
  const completed = isAllCompleted(totalLessons);
  const passedCount = Object.values(progress).filter((v) => v.quizPassed).length;

  return (
    <div className="lesson-list-section">
      {/* 進捗バー */}
      {loaded && (
        <div className="course-progress-bar-wrap">
          <div className="course-progress-bar-header">
            <span className="course-progress-label">進捗</span>
            <span className="course-progress-fraction">
              {passedCount} / {totalLessons} レッスン完了
            </span>
          </div>
          <div className="course-progress-track">
            <div
              className="course-progress-fill"
              style={{ width: `${(passedCount / totalLessons) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* 完了バナー */}
      {loaded && completed && (
        <div className="course-complete-banner">
          <div className="course-complete-badge">{badgeLabel}</div>
          <div>
            <p className="course-complete-title">コース修了！</p>
            <p className="course-complete-sub">
              おめでとうございます。「{badgeLabel}」を獲得しました。
            </p>
          </div>
        </div>
      )}

      <h2 className="lesson-list-title">レッスン一覧</h2>

      <ul className="lesson-list">
        {lessonsWithArticles.map(({ lesson, article }) => {
          const isPassed = progress[lesson.lessonNumber]?.quizPassed ?? false;
          const isLocked =
            lesson.lessonNumber > 1 &&
            !(progress[lesson.lessonNumber - 1]?.quizPassed ?? false);

          return (
            <li key={lesson.lessonNumber}>
              {isLocked ? (
                <div className="lesson-item lesson-item--locked">
                  <div className="lesson-item-num lesson-item-num--locked">
                    {lesson.lessonNumber}
                  </div>
                  <div className="lesson-item-body">
                    <p className="lesson-item-title">{article?.title ?? 'レッスン'}</p>
                    <p className="lesson-item-meta">
                      <span className="lesson-item-time">{article?.readTime ?? ''}</span>
                    </p>
                  </div>
                  <div className="lesson-item-status lesson-item-status--locked">
                    🔒
                  </div>
                </div>
              ) : (
                <a
                  href={`/courses/${courseSlug}/${lesson.lessonNumber}`}
                  className={`lesson-item ${isPassed ? 'lesson-item--done' : ''}`}
                >
                  <div className={`lesson-item-num ${isPassed ? 'lesson-item-num--done' : ''}`}>
                    {isPassed ? '✓' : lesson.lessonNumber}
                  </div>
                  <div className="lesson-item-body">
                    <p className="lesson-item-title">{article?.title ?? 'レッスン'}</p>
                    <p className="lesson-item-meta">
                      <span className="lesson-item-time">{article?.readTime ?? ''}</span>
                      <span className="lesson-item-quiz">クイズ3問</span>
                    </p>
                  </div>
                  <div className={`lesson-item-status ${isPassed ? 'lesson-item-status--done' : ''}`}>
                    {isPassed ? '完了' : '→'}
                  </div>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
