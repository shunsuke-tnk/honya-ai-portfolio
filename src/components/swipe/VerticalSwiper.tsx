'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Work } from '@/types/work';
import WorkSlide from '@/components/works/WorkSlide';
import Pagination from './Pagination';

interface VerticalSwiperProps {
  works: Work[];
  className?: string;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}

const SWIPE_THRESHOLD = 50;

export default function VerticalSwiper({
  works,
  className = '',
  currentIndex: externalIndex,
  onIndexChange
}: VerticalSwiperProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 外部から制御される場合はexternalIndexを使用、そうでなければ内部状態
  const currentIndex = externalIndex ?? internalIndex;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < works.length) {
      if (onIndexChange) {
        onIndexChange(index);
      } else {
        setInternalIndex(index);
      }
      setTranslateY(0);
    }
  }, [works.length, onIndexChange]);

  const goNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // タッチイベント
  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - startYRef.current;
    setTranslateY(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateY > SWIPE_THRESHOLD) {
      goPrev();
    } else if (translateY < -SWIPE_THRESHOLD) {
      goNext();
    }
    setTranslateY(0);
  };

  // ホイールイベント
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 20) {
      goNext();
    } else if (e.deltaY < -20) {
      goPrev();
    }
  }, [goNext, goPrev]);

  // キーボードイベント
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        goNext();
      } else if (e.key === 'ArrowUp') {
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-black ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* スライド */}
      <div
        className="h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(calc(-${currentIndex * 100}% + ${translateY}px))`,
          transitionDuration: isDragging ? '0ms' : '300ms',
        }}
      >
        {works.map((work, index) => (
          <div key={work.id} className="w-full h-full">
            <WorkSlide work={work} isActive={index === currentIndex} />
          </div>
        ))}
      </div>

      {/* ページネーション */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Pagination total={works.length} current={currentIndex} direction="vertical" />
      </div>

      {/* スワイプヒント（最初のスライドのみ） */}
      {currentIndex === 0 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-2 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span>スワイプで次へ</span>
        </div>
      )}
    </div>
  );
}
