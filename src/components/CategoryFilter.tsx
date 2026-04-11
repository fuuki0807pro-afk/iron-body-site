"use client";
// src/components/CategoryFilter.tsx
// カテゴリ絞り込み機能付きの記事一覧コンポーネント

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import type { Article } from "@/data/articles";

type Props = {
  articles: Article[];
};

const categories = ["すべて", "トレーニング", "栄養・食事", "サプリメント", "ライフスタイル"];

export default function CategoryFilter({ articles }: Props) {
  const [active, setActive] = useState("すべて");

  const filtered =
    active === "すべて" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* カテゴリタブ */}
      <section id="categories" className="categories-section">
        <div className="container">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
                <span className="category-tab-count">
                  {cat === "すべて"
                    ? articles.length
                    : articles.filter((a) => a.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 記事一覧グリッド */}
      <section id="articles" className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {active === "すべて" ? "最新記事" : active}
            </h2>
            <p className="section-sub">
              {filtered.length}件の記事
            </p>
          </div>
          {filtered.length > 0 ? (
            <div className="articles-grid">
              {filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="no-articles">
              <p>このカテゴリの記事は準備中です。</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
