// app/shop/page.tsx

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#fef7f2] text-neutral-900">
      <main className="mx-auto max-w-4xl px-4 py-14 md:py-20">

        <p className="text-sm tracking-[0.25em] text-neutral-500">
          ご自宅でごえん
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          ごえんの味を、あなたの時間へ。
        </h1>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          店で生まれる料理の余韻を、そのままご家庭へ届けたい──
          そんな思いから、冷凍惣菜や調味料、酒の肴を少しずつ整えています。
          仕事終わりのひと皿に、週末のゆっくりした時間に。
          ごえんの小さなかけらが、日々の食卓のどこかに寄り添えたら嬉しく思います。
        </p>

        {/* カテゴリ紹介 */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold">冷凍惣菜</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              出汁巻きや煮物など、
              火入れの瞬間を閉じ込めた小さなおかずたち。
              夜の一品や、お酒の相棒としてどうぞ。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold">調味料</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              ごえんの味の骨格となる出汁やポン酢、乳化ソースなど。
              ご家庭の料理に一滴加えるだけで、輪郭が少し変わります。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold">珍味・酒の肴</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              ゆっくり飲みたい夜にそっと添えたい、小さな相棒たち。
              家飲みの時間を、すこしだけ豊かにしてくれます。
            </p>
          </div>
        </section>

        {/* 現状案内 & 導線 */}
        <div className="mt-10">
          <p className="text-sm text-neutral-600">
            ※ 現在オンラインショップの準備中です。
            準備が整い次第、このページからご注文いただけるようになります。
          </p>

          {/* checkout デモ導線 */}
          <a
            href="/checkout"
            className="mt-6 inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-neutral-800"
          >
            決済フローのデモを見る（/checkout）
          </a>

          {/* privacy policy へのリンク */}
          <div className="mt-3">
            <a
              href="/privacy"
              className="text-xs text-neutral-600 underline underline-offset-4"
            >
              オンラインショップのプライバシーポリシーはこちら
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
