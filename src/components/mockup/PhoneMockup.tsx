'use client';

import { ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  // iPhone 14 Pro のサイズ比率
  const frameWidth = 320;
  const frameHeight = 693;
  const screenWidth = frameWidth - 16; // padding 8px * 2
  const screenHeight = frameHeight - 16;

  return (
    <div className="relative flex-shrink-0">
      {/* iPhone フレーム */}
      <div
        className="relative bg-gray-900 rounded-[45px] p-2 shadow-2xl"
        style={{
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
        }}
      >
        {/* ノッチ */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />
        </div>

        {/* スクリーン - 明示的なサイズとclip-pathで強制クリップ */}
        <div
          className="relative bg-black rounded-[38px]"
          style={{
            width: `${screenWidth}px`,
            height: `${screenHeight}px`,
            clipPath: 'inset(0 round 38px)',
            overflow: 'hidden',
            contain: 'strict',
          }}
        >
          {children}
        </div>

        {/* ホームインジケーター */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/50 rounded-full" />
      </div>
    </div>
  );
}
