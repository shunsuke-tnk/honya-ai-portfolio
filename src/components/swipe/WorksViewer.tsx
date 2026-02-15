'use client';

import { useState, useCallback } from 'react';
import { works } from '@/data/works';
import { useIsDesktop } from '@/hooks/useMediaQuery';
import VerticalSwiper from './VerticalSwiper';
import PhoneMockup from '@/components/mockup/PhoneMockup';
import SwipeController from './SwipeController';
import Pagination from './Pagination';

export default function WorksViewer() {
  const isDesktop = useIsDesktop();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < works.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  // モバイル表示
  if (!isDesktop) {
    return (
      <div className="fixed inset-0 top-16 bg-black">
        <VerticalSwiper works={works} className="h-full" />
      </div>
    );
  }

  // PC表示
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900 flex items-center justify-center py-12">
      <div className="flex items-center gap-12">
        {/* スマホモック */}
        <PhoneMockup>
          <VerticalSwiper works={works} />
        </PhoneMockup>

        {/* 右側のコントロール＆情報 */}
        <div className="flex flex-col items-center gap-8">
          {/* コントローラー */}
          <SwipeController
            onPrev={handlePrev}
            onNext={handleNext}
            canPrev={currentIndex > 0}
            canNext={currentIndex < works.length - 1}
          />

          {/* ページ情報 */}
          <div className="text-white/60 text-sm">
            {currentIndex + 1} / {works.length}
          </div>

          {/* 作品情報（PC用の詳細表示） */}
          <div className="bg-gray-800/50 rounded-2xl p-6 max-w-xs">
            <h3 className="text-white font-bold text-lg mb-2">
              {works[currentIndex]?.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {works[currentIndex]?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {works[currentIndex]?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 操作説明 */}
          <div className="text-white/40 text-xs text-center">
            <p>↑↓ キーまたはスクロールで操作</p>
          </div>
        </div>
      </div>
    </div>
  );
}
