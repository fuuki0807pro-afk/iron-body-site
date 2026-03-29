// src/app/page.tsx
//
// 【記事の追加方法】
// content/articles/ フォルダに .md ファイルを追加するだけです。
// ファイル先頭に以下のメタ情報（frontmatter）を書いてください：
//
// ---
// title: "記事タイトル"
// date: "2026-03-29"
// category: "トレーニング"   // トレーニング / 栄養・食事 / サプリメント / ライフスタイル
// excerpt: "記事の概要（一覧ページに表示されます）"
// image: "/images/your-image.jpg"  // 省略可
// ---
//
// 本番環境では lib/articles.ts でMarkdownを読み込みます。
// このデモファイルはサンプルデータでUIをプレビューできます。

import ArticleCard from "@/components/ArticleCard";

// ── サンプル記事データ（本番では lib/articles.ts から取得） ──────────────
const sampleArticles = [
  {
    slug: "beginner-strength-training",
    title: "筋トレ初心者が最初の3ヶ月でやるべきこと【完全ガイド】",
    date: "2026-03-28",
    category: "トレーニング",
    excerpt:
      "筋トレを始めたばかりの方へ。最初の3ヶ月で土台を作るためのプログラム設計・フォーム・休養のポイントを科学的根拠とともに解説します。",
    image: "",
    featured: true,
  },
  {
    slug: "protein-timing",
    title: "プロテインはいつ飲む？タイミング別の効果を徹底比較",
    date: "2026-03-25",
    category: "栄養・食事",
    excerpt:
      "トレーニング前・後・就寝前、それぞれのプロテイン摂取タイミングで筋肥大への影響はどう変わるのか。最新の研究を元に解説。",
    image: "",
    featured: false,
  },
  {
    slug: "squat-form-guide",
    title: "スクワットの正しいフォームと膝・腰を痛めないための注意点",
    date: "2026-03-20",
    category: "トレーニング",
    excerpt:
      "下半身の王様・スクワット。正しいフォームを身につけて怪我なく鍛えるための完全ガイドです。初心者から中級者まで役立つ内容。",
    image: "",
    featured: false,
  },
  {
    slug: "creatine-effects",
    title: "クレアチンの効果・副作用・飲み方を科学的に解説",
    date: "2026-03-15",
    category: "サプリメント",
    excerpt:
      "最も研究されたサプリメントの一つ、クレアチン。本当に効くのか？副作用は？どう摂れば良いのかを論文をベースに分かりやすく解説。",
    image: "",
    featured: false,
  },
  {
    slug: "sleep-muscle-growth",
    title: "睡眠の質が筋肉の成長を左右する ― 最適な睡眠戦略",
    date: "2026-03-10",
    category: "ライフスタイル",
    excerpt:
      "筋肉はジムではなく、眠っている間に成長する。睡眠とテストステロン・成長ホルモンの関係と、今夜から実践できる睡眠改善法。",
    image: "",
    featured: false,
  },
  {
    slug: "calorie-deficit-muscle",
    title: "カロリー制限中でも筋肉を守る食事設計の考え方",
    date: "2026-03-05",
    category: "栄養・食事",
    excerpt:
      "減量中に筋肉まで落ちてしまう――その悩みを解決するための、タンパク質量・食事回数・トレーニング頻度の最適解を提示します。",
    image: "",
    featured: false,
  },
];

const categories = ["すべて", "トレーニング", "栄養・食事", "サプリメント", "ライフスタイル"];

export default function HomePage() {
  const featuredArticle = sampleArticles.find((a) => a.featured);
  const regularArticles = sampleArticles.filter((a) => !a.featured);

  return (
    <>
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-bg-text">IRON</div>
        <div className="hero-content">
          <p className="hero-eyebrow">科学的ボディメイクの専門メディア</p>
          <h1 className="hero-title">
            鍛える知識が、
            <br />
            <em>身体を変える。</em>
          </h1>
          <p className="hero-desc">
            トレーニング・栄養・サプリメント・ライフスタイル。
            <br />
            エビデンスに基づいた情報で理想の身体を手に入れる。
          </p>
          <div className="hero-actions">
            <a href="#articles" className="btn-primary">記事を読む</a>
            <a href="#categories" className="btn-ghost">カテゴリを見る</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">120<span className="stat-plus">+</span></span>
            <span className="stat-label">専門記事</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">カテゴリ</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">週<span className="stat-plus">3</span></span>
            <span className="stat-label">更新</span>
          </div>
        </div>
      </section>

      {/* 注目記事（フィーチャード） */}
      {featuredArticle && (
        <section className="featured-section">
          <div className="container">
            <div className="section-label">
              <span className="section-label-line" />
              FEATURED
              <span className="section-label-line" />
            </div>
            <a href={`/articles/${featuredArticle.slug}`} className="featured-card">
              <div className="featured-card-image">
                <div className="featured-card-img-placeholder">
                  <span>TRAINING</span>
                </div>
              </div>
              <div className="featured-card-body">
                <span className="tag tag--training">{featuredArticle.category}</span>
                <h2 className="featured-card-title">{featuredArticle.title}</h2>
                <p className="featured-card-excerpt">{featuredArticle.excerpt}</p>
                <div className="featured-card-meta">
                  <time className="article-date">{featuredArticle.date}</time>
                  <span className="read-more">続きを読む →</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* カテゴリフィルター */}
      <section id="categories" className="categories-section">
        <div className="container">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button key={cat} className={`category-tab ${cat === "すべて" ? "active" : ""}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 記事一覧グリッド */}
      <section id="articles" className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">最新記事</h2>
            <p className="section-sub">週3回更新。最新のボディメイク情報をお届け。</p>
          </div>
          <div className="articles-grid">
            {regularArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="load-more-wrap">
            <button className="btn-outline">もっと見る</button>
          </div>
        </div>
      </section>

      {/* ニュースレター */}
      <section id="newsletter" className="newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <p className="newsletter-eyebrow">NEWSLETTER</p>
              <h2 className="newsletter-title">週1回、厳選情報を<br />無料でお届け</h2>
              <p className="newsletter-desc">トレーニング・栄養・最新研究のまとめを毎週月曜配信。</p>
            </div>
            <div className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="email-input"
                />
                <button className="btn-primary">登録する</button>
              </div>
              <p className="newsletter-note">いつでも配信停止できます。スパムは送りません。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
