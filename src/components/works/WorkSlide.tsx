'use client';

import { Work } from '@/types/work';
import { getCategoryInfo } from '@/data/works';
import VideoPlayer from '@/components/mockup/VideoPlayer';

interface WorkSlideProps {
  work: Work;
  isActive: boolean;
  onVideoEnded?: () => void;
}

export default function WorkSlide({ work, isActive, onVideoEnded }: WorkSlideProps) {
  const categoryInfo = getCategoryInfo(work.category);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* 動画プレイヤー */}
      <VideoPlayer src={work.videoUrl} isActive={isActive} onEnded={onVideoEnded} />

      {/* オーバーレイ情報 */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        {/* カテゴリバッジ */}
        {categoryInfo && (
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${categoryInfo.color} mb-3`}>
            {categoryInfo.label}
          </div>
        )}

        {/* タイトル */}
        <h2 className="text-white text-xl font-bold mb-2">
          {work.title}
        </h2>

        {/* 説明 */}
        <p className="text-white/80 text-sm leading-relaxed mb-3">
          {work.description}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
