// src/app/layout.tsx
import type { Metadata } from "next";
import "./style.css";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "IRON BODY | ボディメイク専門メディア",
  description: "筋トレ・食事・ライフスタイルで理想の身体を手に入れる。科学的根拠に基づいたボディメイク情報を発信。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* ヘッダー */}
        <header className="site-header">
          <div className="header-inner">
            <a href="/" className="site-logo">
              <span className="logo-iron">IRON</span>
              <span className="logo-body">BODY</span>
            </a>
            {/* デスクトップナビ */}
            <nav className="header-nav">
              <a href="/" className="nav-link">記事一覧</a>
              <a href="/#categories" className="nav-link">トレーニング</a>
              <a href="/#categories" className="nav-link">栄養</a>
              <a href="/#categories" className="nav-link">ライフスタイル</a>
            </nav>
            {/* モバイルメニュー */}
            <MobileMenu />
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="site-main">
          {children}
        </main>

        {/* フッター */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-logo">
                <span className="logo-iron">IRON</span>
                <span className="logo-body">BODY</span>
              </span>
              <p className="footer-tagline">
                科学と鍛錬で、理想の身体へ。
              </p>
              <p className="footer-evidence-note">
                掲載情報は査読済み論文・ISSN・NSCA等の信頼性の高いソースに基づいています。
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4 className="footer-col-title">カテゴリ</h4>
                <a href="/#categories" className="footer-link">トレーニング</a>
                <a href="/#categories" className="footer-link">栄養・食事</a>
                <a href="/#categories" className="footer-link">サプリメント</a>
                <a href="/#categories" className="footer-link">ライフスタイル</a>
              </div>
              <div className="footer-col">
                <h4 className="footer-col-title">サイト情報</h4>
                <a href="/about" className="footer-link">このサイトについて</a>
                <a href="/privacy" className="footer-link">プライバシーポリシー</a>
                <a href="/contact" className="footer-link">お問い合わせ</a>
              </div>
              <div className="footer-col">
                <h4 className="footer-col-title">エビデンスについて</h4>
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="footer-link">PubMed</a>
                <a href="https://www.issn.net/" target="_blank" rel="noopener noreferrer" className="footer-link">ISSN</a>
                <a href="https://www.nsca.com/" target="_blank" rel="noopener noreferrer" className="footer-link">NSCA</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 IRON BODY. All rights reserved. 本サイトの情報は教育目的であり、医療的アドバイスの代替ではありません。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
