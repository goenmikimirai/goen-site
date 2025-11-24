// app/components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/60 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* 左側ロゴ */}
        <Link href="/" className="text-lg font-semibold">
          ごえん
        </Link>

        {/* 右上ナビ */}
        <div className="flex gap-6 text-sm text-neutral-700">
          <Link href="/about">ごあいさつ</Link>
          <Link href="/science">調理と科学</Link>
          <Link href="/shop">ご自宅でごえん</Link>
          <Link href="/anniversary">記念日のご利用</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/reserve" className="font-semibold text-neutral-900">
            ご予約
          </Link>
        </div>
      </nav>
    </header>
  );
}
