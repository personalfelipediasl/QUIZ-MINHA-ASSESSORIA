import React from 'react';
import { VideoPlayer } from '../VideoPlayer';
import { Sparkles } from 'lucide-react';

interface Stage9VideoProps {
  onNext: () => void;
  onSkip: () => void;
}

export const Stage9Video: React.FC<Stage9VideoProps> = ({ onNext, onSkip }) => {
  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn">
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase">
          <Sparkles className="w-3 h-3" />
          <span>Demonstração Prática</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
            QUER VER COMO ISSO PODE <span className="text-orange-500">FUNCIONAR NA PRÁTICA?</span>
          </h2>
          <p className="text-base sm:text-lg font-semibold text-zinc-200">
            Conheça o MINHA ASSESSORIA por dentro.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
            Em poucos minutos, veja como a plataforma organiza seus treinos e apresenta cada sessão de forma clara.
          </p>
        </div>
      </div>

      {/* Video Player component with 16:9 and action controls */}
      <VideoPlayer onNext={onNext} onSkip={onSkip} />
    </div>
  );
};
