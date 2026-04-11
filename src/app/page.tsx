// src/app/page.tsx

import CategoryFilter from "@/components/CategoryFilter";
import { allArticles } from "@/data/articles";

const featuredArticle = allArticles.find((a) => a.featured);
const regularArticles = allArticles.filter((a) => !a.featured);

export default function HomePage() {
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
            <span className="stat-number">{allArticles.length}<span className="stat-plus">+</span></span>
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

      {/* カテゴリフィルター + 記事グリッド（クライアントコンポーネント） */}
      <CategoryFilter articles={regularArticles} />

      {/* ニュースレター */}
      <section id="newsletter" className="newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <p className="newsletter-eyebrow">NEWSLETTER</p>
              <h2 className="newsletter-title">週1回、厳選情報を<br />無料でお届け</h2>
              <p className="newsletter-desc">
                トレーニング・栄養・最新研究のまとめを毎週月曜配信。
              </p>
              <ul className="newsletter-benefits">
                <li>✔ 査読済み論文ベースの情報</li>
                <li>✔ 競技者向けの専門コンテンツ</li>
                <li>✔ スパムなし・いつでも解除可能</li>
              </ul>
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
