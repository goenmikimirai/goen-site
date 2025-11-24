// app/science/page.tsx

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-[#fef7f2] text-neutral-900">
      <main className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <p className="text-sm tracking-[0.25em] text-neutral-500">
          ごえんの科学
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          料理の向こうにある、もうひとつの台所。
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          火と水、油と塩、そして時間。ごえんの料理の裏側では、
          目には見えないさまざまな「力」が静かに働いています。
          ここでは、発酵や乳化、冷凍、調理工程の科学など、
          ごえんを支えるもうひとつの台所のお話を、すこしだけご紹介します。
        </p>

        {/* 発酵 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold">発酵 ─ 微生物が描く、旨味のレイヤー</h2>
          <p className="text-[15px] leading-relaxed text-neutral-700">
            麹菌や乳酸菌がゆっくりと仕事をすることで、素材の中に眠る旨味が目を覚まします。
            タンパク質がアミノ酸にほどけ、時間とともに香りが深くなっていく。
            割烹仕込みの勘と、徹底した衛生管理、そして専門家とのコラボレーションにより、
            旨味の追及をしています。
          </p>
        </section>

        {/* 乳化 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold">乳化 ─ 油と水がつくる、舌触りの造形</h2>
          <p className="text-[15px] leading-relaxed text-neutral-700">
            本来は混ざり合わない油と水を、ひとつのソースとしてまとめ上げるのが乳化です。
            油滴の大きさや分布、温度や粘度のバランスが、口に含んだときの「なめらかさ」や
            「コク」の印象を決めていきます。ごえんの乳化ソースは、科学的な知見と
            日本料理の積み重ねと科学的な知見が交わる場所から生まれています。
          </p>
        </section>

        {/* 冷凍 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold">冷凍 ─ 味を閉じ込める、時間のデザイン</h2>
          <p className="text-[15px] leading-relaxed text-neutral-700">
            冷凍は、ただ保存するためだけの手段ではなく、「一番おいしい瞬間」を
            そっと折りたたんでおくための技術でもあります。
            氷の結晶を小さく保つ急速冷凍や、解凍のスピードと温度帯を整えることで、
            冷凍惣菜でも、できたてに近い輪郭を目指しています。
          </p>
        </section>

        {/* 調理工程 */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold">調理工程の科学 ─ 伝統の所作に光を当てる</h2>
          <p className="text-[15px] leading-relaxed text-neutral-700">
            包丁の角度、火をあてる時間、出汁を引く温度帯。
            一見「職人の勘」に見える世界にも、科学的な理由が静かに横たわっています。
            ごえんでは、長く受け継がれてきた所作をそのまま大切にしながら、
            必要に応じて測定や解析を行い、その意味を言葉にしていく試みも続けています。
          </p>
        </section>

        {/* 未来のプロジェクト */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold">未来の味覚プロジェクト</h2>
          <p className="text-[15px] leading-relaxed text-neutral-700">
            表情解析や認知科学、AI を用いて、「美味しい」という体験そのものを
            可視化できないか──そんな実験も少しずつ始めています。
            一口目の驚き、余韻の長さ、心地よい満足感。
            それらをデータとして見つめなおすことで、ごえんの一皿が、
            さらに心に残る体験へと育っていくことを願っています。
          </p>
        </section>
      </main>
    </div>
  );
}
