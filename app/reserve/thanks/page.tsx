// app/reserve/thanks/page.tsx

export default function ReserveThanksPage() {
  return (
    <div className="min-h-screen bg-[#fef7f2] text-neutral-900">
      <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-sm tracking-[0.25em] text-neutral-500">ご予約</p>
        <h1 className="mt-3 text-2xl font-bold md:text-3xl">送信ありがとうございました</h1>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          予約メールを受け付けました。折り返しメールかお電話にて確定のご連絡を致します。
          暫くお待ち下さい。
        </p>

        <p className="mt-4 text-xs text-neutral-600">
          ※ 24時間以上経っても返信がない場合は、お手数ですがお電話（06-6167-9453）にてご連絡ください。
        </p>

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
            予約フォームに戻る
          </a>
        </div>
      </main>
    </div>
  );
}
