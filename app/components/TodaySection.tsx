// app/components/TodaySection.tsx
"use client";

import { useEffect, useState } from "react";

type TodayPost = {
  timestamp: string;
  title: string;
  body: string;
  imageUrl?: string;
};

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSS8cZk0vIIcTfy6eZdJZTL0gaoCI6ExehoTOAqnUH8WR5XIEfIz78glNnQmbPABM5tT5AME2mJI-lh/pub?output=csv";

// カンマを含んだセルも扱える簡易CSVパーサ（1行分）
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const c = line[i];

    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += c;
    }
  }
  result.push(current);
  return result;
}

const clean = (v: string | undefined) =>
  (v || "").trim().replace(/^"|"$/g, "");

export default function TodaySection() {
  const [posts, setPosts] = useState<TodayPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // ★ キャッシュを回避
        const res = await fetch(`${CSV_URL}&t=${Date.now()}`, {
          cache: "no-store",
        });
        const text = await res.text();

        const lines = text.trim().split("\n");
        if (lines.length <= 1) {
          setPosts([]);
          return;
        }

        // 1行目はヘッダーなので飛ばす
        const dataLines = lines.slice(1);

        const parsed: TodayPost[] = dataLines
          .map((line) => {
            const cols = parseCsvLine(line);

            // ★ 列位置を固定：A=0, B=1, C=2, D=3
            const timestamp = clean(cols[0]);
            const title = clean(cols[1]);
            const body = clean(cols[2]);
            const imageUrl = clean(cols[3]);

            return { timestamp, title, body, imageUrl };
          })
          .filter((p) => p.title || p.body);

        // 重複対策
        const seen = new Set<string>();
        const unique: TodayPost[] = [];
        for (const p of parsed) {
          const key = `${p.timestamp}__${p.title}__${p.body}`;
          if (!seen.has(key)) {
            seen.add(key);
            unique.push(p);
          }
        }

        // 新しい順にソート
        unique.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));

        // 最新3件だけ表示
        setPosts(unique.slice(0, 3));
      } catch (e) {
        console.error(e);
        setError("投稿を読み込めませんでした。");
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-6 text-center text-2xl font-semibold tracking-wide text-neutral-700">
        今日のごえん
      </h2>

      {error && (
        <p className="mb-4 text-center text-xs text-red-600">{error}</p>
      )}

      {!error && posts.length === 0 && (
        <p className="text-center text-sm text-neutral-500">
          まだ投稿がありません。
        </p>
      )}

      <div className="space-y-4">
        {posts.map((post, idx) => {
          const raw = post.imageUrl?.trim();
          let proxySrc: string | undefined;

          if (raw) {
            const m = raw.match(/id=([^&]+)/);
            const fileId = m?.[1];
            if (fileId) {
              proxySrc = `/api/goen-image?id=${fileId}`;
            }
          }

          return (
            <article
              key={`${post.timestamp}-${post.title}-${idx}`}
              className="flex gap-4 rounded-2xl bg-white/95 p-4 shadow-sm border border-neutral-200"
            >
              {/* 左：画像（Drive → /api/goen-image 経由） */}
              {proxySrc ? (
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                  <img
                    src={proxySrc}
                    alt={post.title || "今日のごえん"}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      console.error("画像を読み込めませんでした:", proxySrc);
                      const parent =
                        e.currentTarget.parentElement as HTMLElement | null;
                      if (parent) parent.style.display = "none";
                    }}
                  />
                </div>
              ) : null}

              {/* 右：テキスト */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {post.title || "今日の一皿"}
                  </h3>
                  <span className="text-[12px] text-neutral-400">
                    {post.timestamp?.split(" ")[0] ?? ""}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 whitespace-pre-line">
                  {post.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
