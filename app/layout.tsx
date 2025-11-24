// app/layout.tsx
import './global.css';   // ← ここを globals.css じゃなく global.css に
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from './components/Header';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'ごえん | 肴とお酒のお店',
  description:
    '大阪・服部天神「ごえん」公式サイト。料理とお酒を楽しめる小さなお店です。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {GA_ID && (
          <>
            <Script
              id="ga-script"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>

      <body className="min-h-screen bg-[#fef7f2] text-neutral-900">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
