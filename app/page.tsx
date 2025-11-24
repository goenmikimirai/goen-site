"use client";

import { useEffect } from "react";

function TwitterFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-6 text-center text-xl font-semibold tracking-wide text-neutral-700">
        今日のごえん
      </h2>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <a
          className="twitter-timeline"
          data-chrome="noheader nofooter noborders transparent"
          data-theme="light"
          data-tweet-limit="3"
          href="https://twitter.com/wiliwili328543"
        >
          Tweets by ごえん
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fef7f2] text-neutral-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#fef7f2] to-[#f5efe6]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
          {/* テキスト側 */}
          <div className="flex-1">
            <p className="text-sm tracking-[0.25em] text-neutral-500">
              心響彩酒 ごえん
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              心に火を灯す、
              <br className="hidden md:block" />
              小さな割烹居酒屋。
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
              静かに灯る明かりの下で、今日の一皿が小さな物語をはじめます。
              浪速割烹で磨かれた手仕事と、ご縁でつながる時間。
              その余韻が、そっと心に残るような店でありたいと願っています。
            </p>
            <div className="mt-6 text-sm text-neutral-600">
              大阪・服部天神駅より 徒歩数分。
            </div>
          </div>

          {/* 画像側：入口写真 */}
          <div className="flex-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-200 shadow-lg">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/hero-ent.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ギャラリー：店内・刺身・天ぷら */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-xl font-semibold text-neutral-800">
          店の雰囲気
        </h2>
        <p className="mb-6 text-sm text-neutral-600">
          カウンターの空気感や、料理の表情が少しでも伝わればうれしく思います。
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow">
            <img
              src="/hero-tennai.jpg"
              alt="ごえん 店内の様子"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow">
            <img
              src="/hero-sashimi.jpg"
              alt="お造りの盛り合わせ"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow">
            <img
              src="/hero-tempura.jpg"
              alt="天ぷらの一皿"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Online Shop セクション：画像＋説明＋ボタンを1カードに集約 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 p-6 shadow-sm md:flex md:items-center md:gap-8">
          {/* 写真 */}
          <div className="md:w-1/3">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/hero-orizume.jpg"
                alt="ごえん 特製お取り寄せ八寸"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* 説明＋ボタン */}
          <div className="mt-6 md:mt-0 md:flex-1">
            <h2 className="text-xl font-semibold text-neutral-800">
              おうちでごえん（オンラインショップ）
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              季節の味を詰め込んだ八寸や、冷凍惣菜・調味料・酒の肴など、
              ご自宅でも “ごえん” の余韻を楽しんでいただけるように少しずつ整えています。
              今はまだ準備中ですが、ラインナップが整い次第こちらからご案内いたします。
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="/shop"
                className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-neutral-800"
              >
                オンラインショップを見る
              </a>
              <a
                href="/privacy"
                className="text-xs text-neutral-600 underline underline-offset-4"
              >
                プライバシーポリシー
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter feed */}
      <TwitterFeed />

      {/* Access セクション：地図を1/4サイズ相当で中央寄せ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">アクセス</h2>

          <p className="mt-4 leading-relaxed text-neutral-700">
            〒561-0859 大阪府豊中市服部豊町1-6-16-108
            <br />
            （心響彩酒 ごえん / 株式会社未来未来 本店）
            <br />
            阪急宝塚線「服部天神」駅より徒歩数分。
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-full md:w-1/4 aspect-[4/3] overflow-hidden rounded-2xl border bg-neutral-100">
              <iframe
                src="https://www.google.com/maps?q=〒561-0859+大阪府豊中市服部豊町1-6-16-108&output=embed"
                style={{ border: 0 }}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
