// app/reserve/page.tsx

export default function ReservePage() {
  return (
    <div className="min-h-screen bg-[#fef7f2] text-neutral-900">
      <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-sm tracking-[0.25em] text-neutral-500">ご予約</p>
        <h1 className="mt-3 text-2xl font-bold md:text-3xl">ご予約フォーム</h1>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          席数に限りがあるため、事前のご予約をおすすめしております。
          下記フォームよりお申し込みください。
          送信後、「予約メールを受け付けました。折り返しメールかお電話にて確定のご連絡を致します。」という
          メッセージが表示されれば受付完了です。
        </p>

        {/* Googleフォーム埋め込み */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
          <iframe
            src="https://docs.google.com/forms/d/1F1pXwfSI_gbjEon8IgqEx4_QBg2KlDkN7tAXRk1N7ew/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            読み込んでいます…
          </iframe>
        </div>

        <p className="mt-6 text-xs text-neutral-600">
          ※ フォームの送信がうまくいかない場合や、お急ぎの場合はお電話（06-6167-9453）にてご連絡ください。
        </p>
      </main>
    </div>
  );
}
