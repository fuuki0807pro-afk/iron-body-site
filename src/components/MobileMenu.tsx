"use client";
// src/components/MobileMenu.tsx
// スマホ用ハンバーガーメニュー

import { useState, useEffect } from "react";

const navItems = [
  { label: "記事一覧", href: "/" },
  { label: "🎓 学び舎", href: "/courses" },
  { label: "トレーニング", href: "/#categories" },
  { label: "栄養", href: "/#categories" },
  { label: "ライフスタイル", href: "/#categories" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // メニューが開いているときはbodyスクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        className={`mobile-menu-btn ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="メニューを開く"
      >
        <span />
        <span />
        <span />
      </button>

      {/* オーバーレイ */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} />
      )}

      {/* ドロワー */}
      <nav className={`mobile-drawer ${open ? "is-open" : ""}`}>
        <div className="mobile-drawer-header">
          <a href="/" className="site-logo" onClick={() => setOpen(false)}>
            <span className="logo-iron">IRON</span>
            <span className="logo-body">BODY</span>
          </a>
          <button className="mobile-close-btn" onClick={() => setOpen(false)} aria-label="閉じる">
            ✕
          </button>
        </div>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
