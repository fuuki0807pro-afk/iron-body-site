import { courses } from '@/data/courses';

export const metadata = {
  title: '学び舎 | IRON BODY',
  description: '科学的根拠に基づいたトレーニング・栄養の体系的コース。読むだけでなく、理解して実践する場所。',
};

export default function CoursesPage() {
  return (
    <div className="courses-page">
      {/* ヘッダー */}
      <div className="courses-hero">
        <div className="container">
          <p className="courses-hero-eyebrow">IRON DOJO</p>
          <h1 className="courses-hero-title">学び舎</h1>
          <p className="courses-hero-desc">
            バラバラな記事を「読む」のではなく、体系的なコースとして「学ぶ」。
            <br />
            理解度チェックで自分の習熟度を確かめながら、着実に力をつける場所です。
          </p>
        </div>
      </div>

      {/* コース一覧 */}
      <div className="container">
        <div className="courses-list">
          {courses.map((course) => (
            <a
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="course-card"
            >
              <div className="course-card-left">
                <div className="course-badge-preview">{course.badgeLabel}</div>
              </div>
              <div className="course-card-body">
                <div className="course-card-meta">
                  <span className="course-level-tag">{course.level}</span>
                  <span className="course-time">{course.estimatedTime}</span>
                  <span className="course-lessons-count">
                    全{course.lessons.length}レッスン
                  </span>
                </div>
                <h2 className="course-card-title">{course.title}</h2>
                <p className="course-card-desc">{course.description}</p>
                <div className="course-card-footer">
                  <span className="course-start-link">コースを始める →</span>
                </div>
              </div>
            </a>
          ))}

          {/* 今後追加予定（ダミー表示） */}
          <div className="course-card course-card--coming">
            <div className="course-card-left">
              <div className="course-badge-preview course-badge-preview--locked">?</div>
            </div>
            <div className="course-card-body">
              <div className="course-card-meta">
                <span className="course-level-tag">初級</span>
                <span className="course-time">準備中</span>
              </div>
              <h2 className="course-card-title">減量の科学・入門編</h2>
              <p className="course-card-desc">
                体脂肪を落としながら筋肉を守る食事・運動の設計を体系的に学びます。
              </p>
              <div className="course-card-footer">
                <span className="course-coming-label">近日公開</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
