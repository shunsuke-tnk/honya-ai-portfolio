'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface VideoPlayerProps {
  src: string;
  isActive: boolean;
  className?: string;
  onEnded?: () => void;
}

// 時間をMM:SS形式にフォーマット
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function VideoPlayer({ src, isActive, className = '', onEnded }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {
        // 自動再生がブロックされた場合は何もしない
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  // 時間更新のハンドラ
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video && !isDragging) {
      setCurrentTime(video.currentTime);
    }
  }, [isDragging]);

  // 動画の長さを取得
  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      setIsLoaded(true);
    }
  }, []);

  // シークバーの変更
  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const newTime = parseFloat(e.target.value);
    if (video) {
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  // ドラッグ開始時に動画を一時停止
  const handleSeekStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  // ドラッグ終了時に再生再開
  const handleSeekEnd = useCallback(() => {
    setIsDragging(false);
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isActive]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* プレースホルダー（動画がない場合） */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
          <div className="text-white text-6xl animate-pulse">🎬</div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-contain"
        muted={isMuted}
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onEnded}
        onError={() => setIsLoaded(false)}
      />

      {/* シークバー・コントロール */}
      {isLoaded && (
        <div className="absolute bottom-24 left-4 right-4 z-10">
          {/* 時間表示 */}
          <div className="flex items-center justify-between text-white text-xs mb-1">
            <span className="bg-black/50 px-2 py-0.5 rounded">{formatTime(currentTime)}</span>
            <span className="bg-black/50 px-2 py-0.5 rounded">{formatTime(duration)}</span>
          </div>
          {/* シークバー */}
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            onMouseDown={handleSeekStart}
            onMouseUp={handleSeekEnd}
            onTouchStart={handleSeekStart}
            onTouchEnd={handleSeekEnd}
            className="w-full h-2 bg-white/30 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-white
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,0.9) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%)`
            }}
          />
        </div>
      )}

      {/* ミュートボタン */}
      {isLoaded && (
        <button
          onClick={toggleMute}
          className="absolute bottom-36 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
