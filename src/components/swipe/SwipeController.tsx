'use client';

interface SwipeControllerProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export default function SwipeController({ onPrev, onNext, canPrev, canNext }: SwipeControllerProps) {
  return (
    <div className="grid grid-cols-3 gap-2 w-32">
      {/* 上 */}
      <div />
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          canPrev
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <div />

      {/* 中央行（左・中・右） */}
      <div />
      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div />

      {/* 下 */}
      <div />
      <button
        onClick={onNext}
        disabled={!canNext}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          canNext
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div />
    </div>
  );
}
