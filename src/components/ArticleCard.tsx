// src/components/ArticleCard.tsx
// 記事一覧グリッドで使う1枚のカードコンポーネント

type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
};

const categoryConfig: Record<string, { tagClass: string; imgClass: string; label: string }> = {
  "トレーニング": { tagClass: "tag--training",   imgClass: "",                          label: "TRAINING"   },
  "栄養・食事":  { tagClass: "tag--nutrition",   imgClass: "article-card-image--nutrition",  label: "NUTRITION"  },
  "サプリメント":{ tagClass: "tag--supplement",  imgClass: "article-card-image--supplement", label: "SUPPLEMENT" },
  "ライフスタイル":{ tagClass: "tag--lifestyle", imgClass: "article-card-image--lifestyle",  label: "LIFESTYLE"  },
};

export default function ArticleCard({ article }: { article: Article }) {
  const config = categoryConfig[article.category] ?? categoryConfig["トレーニング"];

  return (
    <a href={`/articles/${article.slug}`} className="article-card">
      {/* サムネイル */}
      <div className={`article-card-image ${config.imgClass}`}>
        <span>{config.label}</span>
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
