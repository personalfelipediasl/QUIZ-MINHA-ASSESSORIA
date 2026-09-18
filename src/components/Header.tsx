import React from 'react';
import { ArrowLeft, Flame } from 'lucide-react';
import { StageId } from '../types';

interface HeaderProps {
  currentStage: StageId;
  onBack: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentStage, onBack }) => {
  // Questions are stages 2 to 8 (7 questions total)
  const isQuestion = currentStage >= 2 && currentStage <= 8;
  const questionIndex = currentStage - 1; // 1 to 7

  return (
    <header className="w-full max-w-xl mx-auto pt-4 pb-3 px-4 flex items-center justify-between border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur sticky top-0 z-30">
      <div className="flex items-center gap-3">
        {currentStage > 1 ? (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5 px-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700"
            aria-label="Voltar para etapa anterior"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar</span>
          </button>
        ) : (
          <div className="w-16" />
        )}
      </div>

      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-orange-500/10 border border-orange-500/40 flex items-center justify-center">
          <Flame className="w-3.5 h-3.5 text-orange-500" />
        </div>
        <span className="font-extrabold tracking-wider text-sm text-white uppercase font-display">
          Minha <span className="text-orange-500">Assessoria</span>
        </span>
      </div>

      {/* Counter / Progress indicator */}
      <div className="flex items-center justify-end w-16">
        {isQuestion ? (
          <span className="text-[11px] font-bold tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full uppercase">
            {questionIndex} de 7
          </span>
        ) : currentStage > 8 && currentStage < 15 ? (
          <span className="text-[11px] font-semibold tracking-wider text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded-full uppercase">
            {currentStage}/15
          </span>
        ) : (
          <span className="text-[10px] font-medium text-zinc-400 tracking-wider">
            &lt; 2 MIN
          </span>
        )}
      </div>
    </header>
  );
};
