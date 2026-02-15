'use client';

interface PaginationProps {
  total: number;
  current: number;
  direction?: 'vertical' | 'horizontal';
}

export default function Pagination({ total, current, direction = 'vertical' }: PaginationProps) {
  const isVertical = direction === 'vertical';

  return (
    <div
      className={`flex ${isVertical ? 'flex-col' : 'flex-row'} gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1.5`}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`rounded-full transition-all ${
              isActive
                ? isVertical
                  ? 'w-1.5 h-4 bg-white'
                  : 'w-4 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/70'
            }`}
          />
        );
      })}
    </div>
  );
}
