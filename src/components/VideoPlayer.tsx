import React, { useState } from 'react';
import { Play, SkipForward, ArrowRight, ArrowUpRight } from 'lucide-react';
import { YOUTUBE_VIDEO_ID, CHECKOUT_URL } from '../types';

interface VideoPlayerProps {
  onNext: () => void;
  onSkip: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ onNext, onSkip }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartWatch = () => {
    setIsPlaying(true);
  };

  const handleDirectCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="w-full space-y-6">
      {/* 16:9 Responsive Video Container */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Conheça o MINHA ASSESSORIA por dentro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center bg-zinc-900">
            {/* YouTube thumbnail background */}
            <img
              src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
              alt="Prévia do vídeo Minha Assessoria"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
              onError={(e) => {
                // fallback if maxresdefault is not available
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

            {/* Centered Play Trigger */}
            <button
              type="button"
              onClick={handleStartWatch}
              className="relative z-10 flex flex-col items-center gap-2 group/play cursor-pointer"
              aria-label="Assistir ao vídeo"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover/play:scale-105 transition-all duration-200">
                <Play className="w-8 h-8 fill-white translate-x-0.5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800 backdrop-blur">
                Clique para reproduzir
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Action Controls Section */}
      <div className="space-y-3 pt-1">
        {/* Buttons: ASSISTIR AO VÍDEO & PULAR E VER COMO FUNCIONA */}
        <div className="flex flex-col sm:flex-row gap-3">
          {!isPlaying ? (
            <button
              type="button"
              onClick={handleStartWatch}
              className="flex-1 py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.99] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>ASSISTIR AO VÍDEO</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              className="flex-1 py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.99] cursor-pointer"
            >
              <span>CONTINUAR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={onSkip}
            className="py-3.5 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-700 cursor-pointer"
          >
            <SkipForward className="w-3.5 h-3.5 text-zinc-400" />
            <span>PULAR E VER COMO FUNCIONA</span>
          </button>
        </div>

        {/* Direct Checkout Button */}
        <div className="pt-1">
          <a
            href={CHECKOUT_URL}
            onClick={(e) => {
              e.preventDefault();
              handleDirectCheckout();
            }}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-orange-500/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer border border-orange-400/30"
          >
            <span>QUERO COMEÇAR AGORA!</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          <p className="text-[11px] text-zinc-400 text-center font-medium mt-1.5">
            Você será direcionado diretamente para o checkout seguro.
          </p>
        </div>
      </div>
    </div>
  );
};
