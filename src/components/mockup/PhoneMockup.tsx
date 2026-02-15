'use client';

import { ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative">
      {/* iPhone フレーム */}
      <div
        className="relative bg-gray-900 rounded-[50px] p-3 shadow-2xl"
        style={{
          width: '375px',
          height: '812px',
        }}
      >
        {/* ノッチ */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-800" />
        </div>

        {/* スクリーン */}
        <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden">
          {children}
        </div>

        {/* ホームインジケーター */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full" />
      </div>
    </div>
  );
}
