// src/components/ArticleCard.tsx
type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  readTime?: string;
};

const categoryConfig: Record<string, { tagClass: string; bgClass: string; label: string }> = {
  "トレーニング":  { tagClass: "tag--training",   bgClass: "card-img-bg--training",   label: "TRAINING"   },
  "栄養・食事":   { tagClass: "tag--nutrition",   bgClass: "card-img-bg--nutrition",   label: "NUTRITION"  },
  "サプリメント": { tagClass: "tag--supplement",  bgClass: "card-img-bg--supplement",  label: "SUPPLEMENT" },
  "ライフスタイル":{ tagClass: "tag--lifestyle",  bgClass: "card-img-bg--lifestyle",   label: "LIFESTYLE"  },
};

export default function ArticleCard({ article }: { article: Article }) {
  const config = categoryConfig[article.category] ?? categoryConfig["トレーニング"];

  return (
    <a href={`/articles/${article.slug}`} className="article-card">
      {/* サムネイル */}
      <div className={`article-card-image ${!article.image ? config.bgClass : ""}`}>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="article-card-img"
          />
        ) : (
          <span className="card-img-label">{config.label}</span>
        )}
      </div>

      {/* 本文 */}
      <div className="article-card-body">
        <span className={`tag ${config.tagClass}`}>{article.category}</span>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-excerpt">{article.excerpt}</p>
        <div className="article-card-footer">
          <time className="article-date">{article.date}</time>
          <span className="read-more">続きを読む →</span>
        </div>
      </div>
    </a>
  );
}
