"use client";

import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    amazon?: any;
  }
}

// ごえん側のAPIエンドポイント（例）
// 実際には /api/orders などサーバ側で実装しておく
const GOEN_ORDER_API = "/api/orders";

// アイニューム側のAPIエンドポイント（例）
const INUUM_BUTTON_PAYLOAD_API =
  "https://partner.inumm.com/goen/amazonpay/button-payload";
const INUUM_COMPLETE_API =
  "https://partner.inumm.com/goen/amazonpay/complete";

type CheckoutForm = {
  name: string;
  postalCode: string;
  address1: string;
  address2: string;
  phone: string;
  email: string;
};

export default function CheckoutPage() {
  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    postalCode: "",
    address1: "",
    address2: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(4800); // 仮の金額（例：4,800円）
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [buttonConfig, setButtonConfig] = useState<{
    payloadJSON: string;
    signature: string;
    publicKeyId: string;
    storeId: string;
  } | null>(null);

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Amazon Payのスクリプトを読み込む
  useEffect(() => {
    const existing = document.getElementById("amazon-pay-checkout-js");
    if (existing) return;

    const script = document.createElement("script");
    // ★URLはAmazon Payの最新ドキュメントで確認してください
    script.src = "https://static-fe.payments-amazon.com/checkout.js";
    script.id = "amazon-pay-checkout-js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 注文を作成（ごえん側サーバで orderId を発行）
  const handleCreateOrder = async () => {
    try {
      setLoadingOrder(true);
      setStatusMessage(null);

      // ごえん側に注文を作成してもらう
      const res = await fetch(GOEN_ORDER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form,
          amount,
        }),
      });

      if (!res.ok) {
        throw new Error("注文の作成に失敗しました");
      }

      const data = await res.json();
      const newOrderId: string = data.orderId;

      setOrderId(newOrderId);
      setStatusMessage(`注文IDが発行されました：${newOrderId}`);

      // 続けてアイニューム側からAmazon Pay用のpayload取得
      const payloadRes = await fetch(INUUM_BUTTON_PAYLOAD_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: newOrderId,
          amount,
          currency: "JPY",
        }),
      });

      if (!payloadRes.ok) {
        throw new Error("Amazon Payボタン設定の取得に失敗しました");
      }

      const payloadData = await payloadRes.json();
      setButtonConfig({
        payloadJSON: payloadData.payloadJSON,
        signature: payloadData.signature,
        publicKeyId: payloadData.publicKeyId,
        storeId: payloadData.storeId,
      });
    } catch (e: any) {
      console.error(e);
      setStatusMessage(e.message ?? "エラーが発生しました");
    } finally {
      setLoadingOrder(false);
    }
  };

  // Amazon Payボタンをレンダリング（buttonConfigが揃ったら）
  useEffect(() => {
    if (!buttonConfig) return;
    if (!window.amazon || !window.amazon.Pay) return;

    const amazonPay = window.amazon.Pay;

    // ボタンを描画するDOMを一度クリア
    const container = document.getElementById("AmazonPayButton");
    if (container) {
      container.innerHTML = "";
    }

    try {
      amazonPay.renderButton(
        "#AmazonPayButton",
        {
          // ★ここはAmazon Pay v2仕様に合わせて調整が必要
          // 例として "PayOnly" モードのイメージ
          merchantId: "DUMMY_MERCHANT_ID", // 実際は不要 or storeIdから内部的に紐づくことも
          ledgerCurrency: "JPY",
          sandbox: true, // サンドボックス時は true、本番では false
          checkoutLanguage: "ja_JP",
          productType: "PayOnly",
          placement: "Checkout",
          buttonColor: "Gold",
        },
        {
          createCheckoutSessionConfig: {
            payloadJSON: buttonConfig.payloadJSON,
            signature: buttonConfig.signature,
            publicKeyId: buttonConfig.publicKeyId,
          },
          onAuthorize: async (authResult: {
            checkoutSessionId: string;
            error?: any;
          }) => {
            if (authResult.error) {
              console.error(authResult.error);
              setStatusMessage("決済がキャンセルまたは失敗しました。");
              return;
            }

            try {
              setStatusMessage("決済を確認しています…");

              const res = await fetch(INUUM_COMPLETE_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  orderId,
                  checkoutSessionId: authResult.checkoutSessionId,
                }),
              });

              if (!res.ok) {
                throw new Error("決済の確定に失敗しました");
              }

              const data = await res.json();
              if (data.status === "SUCCESS") {
                setStatusMessage(
                  `決済が完了しました。注文ID：${orderId} / ありがとうございます。`
                );
              } else {
                setStatusMessage("決済の確定に失敗しました。");
              }
            } catch (e: any) {
              console.error(e);
              setStatusMessage(e.message ?? "決済処理中にエラーが発生しました");
            }
          },
        }
      );
    } catch (e) {
      console.error(e);
      setStatusMessage("Amazon Payボタンの描画に失敗しました");
    }
  }, [buttonConfig, orderId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold md:text-3xl">ごえん オンライン決済（サンプル）</h1>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">お届け先情報</h2>
        <div className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="お名前"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="郵便番号（例：560-0001）"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <input
            name="address1"
            value={form.address1}
            onChange={handleChange}
            placeholder="住所（市区町村・番地）"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <input
            name="address2"
            value={form.address2}
            onChange={handleChange}
            placeholder="建物名・部屋番号（任意）"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="電話番号"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="メールアドレス"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div className="mt-4 text-sm text-neutral-700">
          <div>ご請求予定金額：{amount.toLocaleString()} 円（税込）</div>
        </div>

        <button
          type="button"
          onClick={handleCreateOrder}
          disabled={loadingOrder}
          className="mt-4 rounded-full bg-neutral-900 px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loadingOrder ? "注文を作成しています…" : "注文を作成（Amazon Payへ進む）"}
        </button>

        {statusMessage && (
          <div className="mt-4 rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-800">
            {statusMessage}
          </div>
        )}
      </section>

      {/* Amazon Payボタンの設置場所 */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-semibold">Amazon Pay で支払う</h2>
        {!buttonConfig && (
          <p className="text-sm text-neutral-600">
            まず「注文を作成」ボタンを押すと、ここにAmazon Payボタンが表示されます。
          </p>
        )}
        <div id="AmazonPayButton" className="mt-4" />
      </section>
    </main>
  );
}
