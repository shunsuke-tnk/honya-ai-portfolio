import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-0">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 gradient-pop opacity-90" />

      {/* 浮遊するシェイプ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/30 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          AIで、
          <br />
          もっと楽しく。
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          Google AI Studioで作成した
          <br className="md:hidden" />
          <span className="font-bold">10以上のAIアプリ</span>をご紹介
        </p>
        <Link
          href="/works"
          className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        >
          作品を見る
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* 下部の波形 - 白背景へ自然につなげる */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 80V40C240 10 480 0 720 10C960 20 1200 50 1440 40V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
