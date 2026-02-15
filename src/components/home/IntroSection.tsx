const features = [
  {
    icon: '🎯',
    title: '簡単操作',
    description: '誰でも直感的に使える、シンプルなインターフェース',
  },
  {
    icon: '🤖',
    title: 'AIパワー',
    description: 'Google Geminiの最新AIで、驚きの体験を',
  },
  {
    icon: '✨',
    title: '無料で試せる',
    description: 'すべてのアプリを今すぐ無料でお試しいただけます',
  },
];

export default function IntroSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">AI</span>の力を、
            <br className="md:hidden" />
            あなたの手に
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            日常をもっと便利に、もっと楽しくする
            <br />
            AIアプリのコレクションです
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all hover:shadow-lg group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
