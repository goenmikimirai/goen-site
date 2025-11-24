// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fef7f2] text-neutral-900">
      <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-sm tracking-[0.25em] text-neutral-500">
          お問い合わせ
        </p>
        <h1 className="mt-3 text-2xl font-bold md:text-3xl">
          心響彩酒 ごえん　お問い合わせ
        </h1>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          ご予約以外のご質問・貸切や記念日のご相談・メディア取材のご依頼などは、
          下記の連絡先よりお気軽にお問い合わせください。
        </p>

        {/* 連絡先ブロック */}
        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-800">
            連絡先
          </h2>
          <div className="mt-4 space-y-2 text-sm leading-relaxed">
            <p>
              電話：{" "}
              <a
                href="tel:0661679453"
                className="font-semibold text-neutral-900 underline underline-offset-4"
              >
                06-6167-9453
              </a>
            </p>
            <p>
              メール：{" "}
              <a
                href="mailto:goen@mikimirai.jp"
                className="font-semibold text-neutral-900 underline underline-offset-4"
              >
                goen@mikimirai.jp
              </a>
            </p>
            <p className="text-xs text-neutral-600">
              ※ ご予約は「ご予約フォーム」からお送りいただくか、お電話にてお願いいたします。
            </p>
          </div>
        </section>

        {/* 営業時間 */}
        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-800">
            営業時間
          </h2>
          <div className="mt-3 space-y-1 text-sm">
            <p>火〜土：18:00 〜 1:00</p>
            <p>日・祝：17:00 〜 23:00</p>
            <p>定休日：月曜日</p>
          </div>
          <p className="mt-3 text-xs text-neutral-600">
            ※ 営業時間・定休日は、都合により変更となる場合があります。
            最新情報は X（旧Twitter）などもあわせてご確認ください。
          </p>
        </section>

        {/* 所在地 */}
        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-800">
            所在地
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            〒561-0859
            <br />
            大阪府豊中市服部豊町1-6-16-108
            <br />
            心響彩酒 ごえん（株式会社未来未来）
          </p>
          <p className="mt-3 text-xs text-neutral-600">
            阪急宝塚線「服部天神」駅より徒歩数分です。
            詳細な地図はトップページ下部のアクセス欄をご覧ください。
          </p>
        </section>

        {/* 戻り導線 */}
        <div className="mt-10 flex flex-col gap-3 text-sm">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 md:w-auto"
          >
            トップページに戻る
          </a>
          <a
            href="/reserve"
            className="text-xs text-neutral-600 underline underline-offset-4"
          >
            ご予約フォームはこちら
          </a>
        </div>
      </main>
    </div>
  );
}
