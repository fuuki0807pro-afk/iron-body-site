// src/app/articles/[slug]/page.tsx

import { getArticleBySlug, allArticles } from "@/data/articles";
import { notFound } from "next/navigation";

// 静的パラメータの生成（本番ビルド用）
export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

const categoryClass: Record<string, string> = {
  "トレーニング": "tag--training",
  "栄養・食事": "tag--nutrition",
  "サプリメント": "tag--supplement",
  "ライフスタイル": "tag--lifestyle",
};

const categoryLabel: Record<string, string> = {
  "トレーニング": "TRAINING",
  "栄養・食事": "NUTRITION",
  "サプリメント": "SUPPLEMENT",
  "ライフスタイル": "LIFESTYLE",
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const tagClass = categoryClass[article.category] ?? "tag--training";
  const heroLabel = categoryLabel[article.category] ?? "IRON BODY";

  // 関連記事（同カテゴリから最大3件）
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  // 関連が3件に満たない場合は別カテゴリで補完
  const supplemented = relatedArticles.length < 3
    ? [
        ...relatedArticles,
        ...allArticles
          .filter((a) => a.slug !== article.slug && a.category !== article.category)
          .slice(0, 3 - relatedArticles.length),
      ]
    : relatedArticles;

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
          <span className={`tag ${tagClass}`}>{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-meta">
            <time className="article-date">{article.date}</time>
            <span className="article-read-time">読了 {article.readTime}</span>
          </div>
        </div>
      </header>

      {/* 記事ヒーロー画像 */}
      <div className="container">
        {article.image ? (
          <div className="article-hero-image article-hero-image--photo">
            <img
              src={article.image}
              alt={article.imageAlt ?? article.title}
              className="article-hero-img"
            />
          </div>
        ) : (
          <div className={`article-hero-image article-hero-image--${article.category === "トレーニング" ? "training" : article.category === "栄養・食事" ? "nutrition" : article.category === "サプリメント" ? "supplement" : "lifestyle"}`}>
            <span className="article-hero-label">{heroLabel}</span>
          </div>
        )}
      </div>

      {/* 本文 + サイドバー */}
      <div className="container article-layout">
        <article
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* サイドバー */}
        <aside className="article-sidebar">
          {/* 目次（将来的に自動生成へ） */}
          <div className="sidebar-card">
            <h3 className="sidebar-title">目次</h3>
            <ol className="toc-list">
              {["はじめに", "主要ポイント①", "主要ポイント②", "実践方法", "まとめ"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="toc-link">{item}</a>
                </li>
              ))}
            </ol>
          </div>

          {/* タグ */}
          {article.tags && article.tags.length > 0 && (
            <div className="sidebar-card">
              <h3 className="sidebar-title">タグ</h3>
              <div className="tag-list">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          )}

        </aside>
      </div>

      {/* 参照文献セクション */}
      {article.references && article.references.length > 0 && (
        <div className="container">
          <section className="references-section">
            <h2 className="references-title">
              <span className="references-icon">📚</span>
              参照文献・エビデンス
            </h2>
            <p className="references-desc">
              本記事は以下の査読済み論文・ガイドラインに基づいています。
            </p>
            <ol className="references-list">
              {article.references.map((ref) => (
                <li key={ref.id} className="reference-item">
                  <span className="reference-num">[{ref.id}]</span>
                  <div className="reference-body">
                    <span className="reference-authors">{ref.authors}</span>
                    {" "}
                    <span className="reference-year">({ref.year})</span>
                    {". "}
                    <span className="reference-title">
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="reference-link">
                          {ref.title}
                        </a>
                      ) : (
                        ref.title
                      )}
                    </span>
                    {". "}
                    <span className="reference-journal">{ref.journal}</span>
                    {ref.url && (
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="reference-pubmed">
                        PubMed
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <p className="references-note">
              ※ PubMedリンクは原著論文のアブストラクトページに遷移します。
              本サイトの情報は教育目的であり、医療的アドバイスの代替ではありません。
            </p>
          </section>
        </div>
      )}

      {/* 関連記事 */}
      {supplemented.length > 0 && (
        <section className="related-section">
          <div className="container">
            <div className="section-label">
              <span className="section-label-line" />
              RELATED ARTICLES
              <span className="section-label-line" />
            </div>
            <div className="related-grid">
              {supplemented.map((rel) => (
                <a key={rel.slug} href={`/articles/${rel.slug}`} className="related-card">
                  <div className="related-card-image">
                    <span>{categoryLabel[rel.category] ?? "IRON BODY"}</span>
                  </div>
                  <div className="related-card-body">
                    <span className={`tag tag--sm ${categoryClass[rel.category] ?? "tag--training"}`}>
                      {rel.category}
                    </span>
                    <h4 className="related-card-title">{rel.title}</h4>
                    <span className="related-card-time">{rel.readTime}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
