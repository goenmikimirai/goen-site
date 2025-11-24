// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl py-12 px-4 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">ごあいさつ</h1>

        <p className="text-neutral-700 leading-relaxed">
          心響彩酒 ごえんは、大阪・服部天神の小さな割烹居酒屋として、
          多くのお客様に支えられてきました。
          店主・香川が修業時代から磨き続けた日本料理の手仕事と、
          「ご縁を大切にしたい」という素朴な思いを軸に、
          静かで心地よい時間をお届けしています。
        </p>

        <p className="mt-4 text-neutral-700 leading-relaxed">
          15年以上にわたり多くのお客様に寄り添い、
          記念日や顔合わせなどの大切なひとときにもご利用いただいてきました。
          一皿一皿が、お客様の物語の一部になれれば幸いです。
        </p>
      </section>

      <section className="border-t border-neutral-200 pt-6">
        <h2 className="text-xl font-semibold mb-3">店名「ごえん」に込めた想い</h2>
        <p className="text-neutral-700 leading-relaxed text-sm">
          初めてお越しくださる方も、長く通ってくださる方も、
          そのひと時の「ご縁」が、少しでも明日への力になりますように。
          そんな願いを込めて、店名を「ごえん」と名付けました。
        </p>
      </section>

      <section className="border-t border-neutral-200 pt-6">
        <h2 className="text-xl font-semibold mb-3">店主より</h2>
        <p className="text-neutral-700 leading-relaxed text-sm">
          季節の食材と日本酒・ワインを中心に、
          その日いちばんおいしいものを、できるだけ自然体のかたちでご用意しています。
          気取らず、でも少しだけ背筋が伸びるような、そんな時間をお楽しみください。
        </p>
      </section>
    </div>
  );
}
