// app/shop/page.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    amazon?: any;
  }
}

const merchantId = process.env.NEXT_PUBLIC_AMZ_MERCHANT_ID;
const publicKeyId = process.env.NEXT_PUBLIC_AMZ_PUBLIC_KEY_ID;
const sandbox =
  process.env.NEXT_PUBLIC_AMZ_SANDBOX === 'true' ||
  process.env.NEXT_PUBLIC_AMZ_SANDBOX === '1';

export default function ShopPage() {
  useEffect(() => {
    // Amazon Pay のスクリプトを読み込み
    if (!document.getElementById('amazon-pay-checkout-js')) {
      const script = document.createElement('script');
      script.id = 'amazon-pay-checkout-js';
      // 日本リージョン（JP）の checkout.js :contentReference[oaicite:0]{index=0}
      script.src = 'https://static-fe.payments-amazon.com/checkout.js';
      script.async = true;
      script.onload = renderAmazonPayButton;
      document.body.appendChild(script);
    } else {
      renderAmazonPayButton();
    }
  }, []);

  const renderAmazonPayButton = () => {
    if (!window.amazon || !window.amazon.Pay) return;
    if (!merchantId || !publicKeyId) {
      console.warn('Amazon Pay merchantId / publicKeyId が設定されていません');
      return;
    }

    const containerId = '#AmazonPayButton';
    const el = document.querySelector(containerId);
    if (el) el.innerHTML = '';

    const amazonPayButton = window.amazon.Pay.renderButton(containerId, {
      merchantId,
      publicKeyId,
      ledgerCurrency: 'JPY',
      sandbox,
      checkoutLanguage: 'ja_JP',
      productType: 'PayAndShip', // 物販＋配送先あり :contentReference[oaicite:1]{index=1}
      placement: 'Cart',
      buttonColor: 'Gold',
    });

    // ★ いまはまだ「押せるだけ」の状態にしておく
    //   → 後で /api/amazon-pay/checkout とつないで Hosted Page に飛ばす
    amazonPayButton.onClick(() => {
      console.log('Amazon Pay ボタンクリック（サーバー実装待ち）');
      alert(
        'Amazon Pay デモボタンが押されました。\n次のステップでサーバー側の署名付きペイロードと接続します。'
      );
    });
  };

  const hasAmazonConfig = Boolean(merchantId && publicKeyId);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-semibold mb-4">オンライン折詰ご注文（デモ）</h1>
        <p className="text-sm text-neutral-700 leading-relaxed">
          「心響彩酒 ごえん」の折詰を、Amazon Pay でお試し決済できるデモページです。
          現在はテスト環境（Sandbox）での動作確認用となっています。
        </p>
        <p className="text-xs text-neutral-500 mt-1">
          ※本番運用時は、ドメイン
          <span className="font-mono"> http://mikimirai.jp/</span>
          を Seller Central に登録しておく必要があります。
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-6">
        {/* 商品画像 */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/hero-orizume.jpg"
              alt="ごえん 特製折詰（デモ）"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
        </div>

        {/* 商品情報＋Amazon Pay ボタン */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">ごえん 特製折詰（デモ）</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              季節の前菜や焼き物などを詰め合わせた、特製の折詰です。
              内容はデモ用の設定で、実際の商品とは異なる場合があります。
            </p>
            <div className="space-y-1">
              <p className="text-xl font-bold">¥5,000（税別）</p>
              <p className="text-xs text-neutral-500">
                ※税込価格の目安：¥5,500（消費税10％の場合）
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div id="AmazonPayButton" className="w-full flex justify-center md:justify-start" />

            {!hasAmazonConfig && (
              <p className="text-[11px] text-red-600">
                ※ Amazon Pay の Sandbox 設定（NEXT_PUBLIC_AMZ_MERCHANT_ID /
                NEXT_PUBLIC_AMZ_PUBLIC_KEY_ID / NEXT_PUBLIC_AMZ_SANDBOX）がまだ行われていません。
              </p>
            )}

            <p className="text-[11px] text-neutral-500 text-center md:text-left">
              Amazonアカウントに登録済みのお支払方法で、簡単にお支払いいただけます。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
