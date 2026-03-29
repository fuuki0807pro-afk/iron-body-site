// src/app/articles/[slug]/page.tsx
//
// 【このファイルについて】
// URLの /articles/記事名 に対応するページです。
// 本番環境では slug を使って content/articles/<slug>.md を読み込みます。
// lib/articles.ts の getArticleBySlug() 関数と組み合わせて使ってください。

// ── サンプルデータ（本番では lib/articles.ts から取得） ────────────────────
const sampleArticle = {
  title: "筋トレ初心者が最初の3ヶ月でやるべきこと【完全ガイド】",
  date: "2026-03-28",
  category: "トレーニング",
  readTime: "8分",
  excerpt:
    "筋トレを始めたばかりの方へ。最初の3ヶ月で土台を作るためのプログラム設計・フォーム・休養のポイントを科学的根拠とともに解説します。",
  // HTMLに変換されたMarkdown本文（本番では remark で変換）
  contentHtml: `
    <h2>はじめに</h2>
    <p>筋トレを始めた多くの人が、最初の3ヶ月で挫折します。その原因の多くは「正しい方向性を知らないまま頑張りすぎること」です。このガイドでは、初心者が最短で成果を出すために必要な3つの柱を解説します。</p>

    <h2>1. プログラム設計：週3回の全身トレーニングが最適</h2>
    <p>初心者にとって最も効果的なのは、<strong>週3回の全身トレーニング（フルボディプログラム）</strong>です。部位分割（分割法）は中〜上級者向けであり、筋肉の回復能力と神経適応がまだ十分でない初心者には向きません。</p>
    <p>具体的には以下の5種目を軸に組み立てましょう：</p>
    <ul>
      <li><strong>スクワット</strong> ― 下半身・体幹全体</li>
      <li><strong>ベンチプレス</strong> ― 胸・肩・三頭筋</li>
      <li><strong>デッドリフト</strong> ― 背中・ハムストリング</li>
      <li><strong>懸垂 or ラットプルダウン</strong> ― 広背筋</li>
      <li><strong>オーバーヘッドプレス</strong> ― 肩・三頭筋</li>
    </ul>
    <p>これらは「コンパウンド種目」と呼ばれ、複数の関節・筋肉を同時に動かすため、少ない種目数で全身を効率よく鍛えられます。</p>

    <h2>2. フォーム：重量より「動作パターン」を優先</h2>
    <p>初心者が犯す最大のミスは、<em>フォームが固まっていないうちに重量を増やすこと</em>です。重量よりも先に「正しい動作パターン」を神経に刷り込むことが、長期的な成長の土台となります。</p>
    <blockquote>「あなたが今持ち上げられる重量は、あなたが今後持ち上げられる重量の足かせになる」― グレッグ・ナックルス</blockquote>
    <p>最初の4〜6週間は、自重またはバーのみで動きを習得することを優先してください。</p>

    <h2>3. 回復：筋肉はジムではなく、睡眠中に育つ</h2>
    <p>筋肉の合成は、トレーニング後の<strong>回復期間</strong>に起こります。特に重要なのが以下の3点です：</p>
    <ul>
      <li>睡眠7〜9時間の確保</li>
      <li>体重×1.6g以上のタンパク質摂取</li>
      <li>トレーニング翌日の適切な休養</li>
    </ul>

    <h2>まとめ</h2>
    <p>最初の3ヶ月のゴールは「大きな筋肉をつけること」ではなく、<strong>「正しい習慣と動作パターンを身体に覚えさせること」</strong>です。この土台があってこそ、4ヶ月目以降の本格的な成長が始まります。焦らず、継続することが最大の近道です。</p>
  `,
};

const relatedArticles = [
  { slug: "squat-form-guide", title: "スクワットの正しいフォームと膝・腰を痛めないための注意点", category: "トレーニング" },
  { slug: "protein-timing", title: "プロテインはいつ飲む？タイミング別の効果を徹底比較", category: "栄養・食事" },
  { slug: "sleep-muscle-growth", title: "睡眠の質が筋肉の成長を左右する ― 最適な睡眠戦略", category: "ライフスタイル" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 本番実装時は以下を使用:
// import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
// export async function generateStaticParams() {
//   const slugs = getAllArticleSlugs();
//   return slugs.map((slug) => ({ slug }));
// }
// ─────────────────────────────────────────────────────────────────────────────

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // 本番: const article = await getArticleBySlug(params.slug);
  const article = sampleArticle;

  const categoryClass = {
    "トレーニング": "tag--training",
    "栄養・食事": "tag--nutrition",
    "サプリメント": "tag--supplement",
    "ライフスタイル": "tag--lifestyle",
  }[article.category] ?? "tag--training";

  return (
    <div className="article-page">
      {/* パンくずリスト */}
      <div className="container">
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-link">ホーム</a>
          <span className="breadcrumb-sep">›</span>
          <a href="/" className="breadcrumb-link">記事一覧</a>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">{article.title}</span>
        </nav>
      </div>

      {/* 記事ヘッダー */}
      <header className="article-header">
        <div className="container article-header-inner">
          <span className={`tag ${categoryClass}`}>{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-meta">
            <time className="article-date">{article.date}</time>
            <span className="article-read-time">読了 {article.readTime}</span>
          </div>
        </div>
      </header>

      {/* 記事画像プレースホルダー */}
      <div className="container">
        <div className="article-hero-image">
          <span className="article-hero-label">TRAINING</span>
        </div>
      </div>

      {/* 本文 */}
      <div className="container article-layout">
        <article
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* サイドバー */}
        <aside className="article-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">目次</h3>
            <ol className="toc-list">
              <li><a href="#" className="toc-link">はじめに</a></li>
              <li><a href="#" className="toc-link">1. プログラム設計</a></li>
              <li><a href="#" className="toc-link">2. フォームの重要性</a></li>
              <li><a href="#" className="toc-link">3. 回復の戦略</a></li>
              <li><a href="#" className="toc-link">まとめ</a></li>
            </ol>
          </div>

          <div className="sidebar-card sidebar-card--accent">
            <p className="sidebar-newsletter-label">NEWSLETTER</p>
            <h3 className="sidebar-title">週1回、厳選情報を無料配信</h3>
            <input type="email" placeholder="メールアドレス" className="email-input email-input--sm" />
            <button className="btn-primary btn-primary--full">登録する</button>
          </div>
        </aside>
      </div>

      {/* 関連記事 */}
      <section className="related-section">
        <div className="container">
          <div className="section-label">
            <span className="section-label-line" />
            RELATED
            <span className="section-label-line" />
          </div>
          <div className="related-grid">
            {relatedArticles.map((rel) => (
              <a key={rel.slug} href={`/articles/${rel.slug}`} className="related-card">
                <div className="related-card-image">
                  <span>{rel.category.toUpperCase()}</span>
                </div>
                <div className="related-card-body">
                  <span className={`tag tag--sm ${categoryClass}`}>{rel.category}</span>
                  <h4 className="related-card-title">{rel.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
