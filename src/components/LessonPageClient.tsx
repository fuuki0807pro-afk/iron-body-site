'use client';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import QuizSection from '@/components/QuizSection';
import { Article, Reference } from '@/data/articles';
import { QuizQuestion } from '@/data/courses';

type Props = {
  courseSlug: string;
  courseTitle: string;
  lessonNumber: number;
  totalLessons: number;
  article: Article;
  quizzes: QuizQuestion[];
};

export default function LessonPageClient({
  courseSlug,
  courseTitle,
  lessonNumber,
  totalLessons,
  article,
  quizzes,
}: Props) {
  const { progress, markQuizPassed } = useCourseProgress(courseSlug);
  const alreadyPassed = progress[lessonNumber]?.quizPassed ?? false;

  const prevLesson = lessonNumber > 1 ? lessonNumber - 1 : null;
  const nextLesson = lessonNumber < totalLessons ? lessonNumber + 1 : null;

  return (
    <div className="lesson-page">
      {/* パンくず */}
      <div className="lesson-breadcrumb container">
        <a href="/" className="breadcrumb-link">ホーム</a>
        <span className="breadcrumb-sep">/</span>
        <a href="/courses" className="breadcrumb-link">学び舎</a>
        <span className="breadcrumb-sep">/</span>
        <a href={`/courses/${courseSlug}`} className="breadcrumb-link">{courseTitle}</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">Lesson {lessonNumber}</span>
      </div>

      {/* レッスンヘッダー */}
      <div className="lesson-header">
        <div className="container">
          <div className="lesson-header-meta">
            <span className="lesson-number-badge">Lesson {lessonNumber} / {totalLessons}</span>
            <span className="lesson-read-time">{article.readTime}</span>
          </div>
          <h1 className="lesson-title">{article.title}</h1>
          <p className="lesson-excerpt">{article.excerpt}</p>
        </div>
      </div>

      {/* 本文 + クイズ */}
      <div className="container">
        <div className="lesson-layout">
          {/* メインコンテンツ */}
          <div className="lesson-main">
            {/* 記事本文 */}
            <article
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* 参考文献 */}
            {article.references && article.references.length > 0 && (
              <div className="references-section">
                <h3 className="references-title">
                  <span className="references-icon">📚</span>参考文献
                </h3>
                <p className="references-desc">
                  本レッスンの内容は以下の論文・ガイドラインに基づいています。
                </p>
                <ul className="references-list">
                  {article.references.map((ref: Reference) => (
                    <li key={ref.id} className="reference-item">
                      <span className="reference-num">[{ref.id}]</span>
                      <span className="reference-body">
                        <span className="reference-authors">{ref.authors}</span>
                        {' '}
                        <span className="reference-year">({ref.year})</span>
                        {'. '}
                        <span className="reference-title">{ref.title}</span>
                        {'. '}
                        <span className="reference-journal">{ref.journal}</span>
                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reference-pubmed"
                          >
                            PubMed
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 理解度クイズ */}
            <QuizSection
              quizzes={quizzes}
              lessonNumber={lessonNumber}
              totalLessons={totalLessons}
              courseSlug={courseSlug}
              onPass={() => markQuizPassed(lessonNumber)}
              alreadyPassed={alreadyPassed}
            />

            {/* ナビゲーション */}
            <div className="lesson-nav">
              {prevLesson ? (
                <a href={`/courses/${courseSlug}/${prevLesson}`} className="lesson-nav-btn lesson-nav-btn--prev">
                  ← Lesson {prevLesson}
                </a>
              ) : (
                <a href={`/courses/${courseSlug}`} className="lesson-nav-btn lesson-nav-btn--prev">
                  ← コース一覧に戻る
                </a>
              )}
              {nextLesson && !alreadyPassed && (
                <span className="lesson-nav-locked">クイズをクリアすると次へ進めます</span>
              )}
              {nextLesson && alreadyPassed && (
                <a href={`/courses/${courseSlug}/${nextLesson}`} className="lesson-nav-btn lesson-nav-btn--next">
                  Lesson {nextLesson} →
                </a>
              )}
              {!nextLesson && alreadyPassed && (
                <a href={`/courses/${courseSlug}/complete`} className="lesson-nav-btn lesson-nav-btn--next">
                  コース完了へ →
                </a>
              )}
            </div>
          </div>

          {/* サイドバー */}
          <aside className="lesson-sidebar">
            <div className="lesson-sidebar-card">
              <h3 className="sidebar-title">このコースのレッスン</h3>
              <nav>
                {Array.from({ length: totalLessons }, (_, i) => i + 1).map((n) => {
                  const done = progress[n]?.quizPassed ?? false;
                  return (
                    <a
                      key={n}
                      href={`/courses/${courseSlug}/${n}`}
                      className={`lesson-sidebar-link ${n === lessonNumber ? 'lesson-sidebar-link--active' : ''} ${done ? 'lesson-sidebar-link--done' : ''}`}
                    >
                      <span className="lesson-sidebar-num">{done ? '✓' : n}</span>
                      <span>Lesson {n}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
