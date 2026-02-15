import Image from 'next/image';
import Link from 'next/link';
import { works, getCategoryInfo } from '@/data/works';

export default function WorkPreview() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            作品一覧
          </h2>
          <p className="text-gray-600">
            Google AI Studioで作成したAIアプリたち
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work) => {
            const categoryInfo = getCategoryInfo(work.category);
            return (
              <Link
                key={work.id}
                href="/works"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* サムネイル */}
                <div className="aspect-[9/16] bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                  {work.thumbnailUrl ? (
                    work.thumbnailUrl.match(/\.(mp4|mov|webm)$/i) ? (
                      <video
                        src={work.thumbnailUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Image
                        src={work.thumbnailUrl}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform">
                        🎬
                      </div>
                    </div>
                  )}
                  {/* カテゴリバッジ */}
                  {categoryInfo && (
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white ${categoryInfo.color}`}>
                      {categoryInfo.label}
                    </div>
                  )}
                </div>

                {/* 情報 */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-8 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            スワイプで見る
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
