import React from 'react';
import { ArrowRight, Sliders, PlayCircle, BarChart3, Check } from 'lucide-react';

interface Stage11SolutionProps {
  onNext: () => void;
}

export const Stage11Solution: React.FC<Stage11SolutionProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn min-h-[75vh]">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Apresentando a Solução
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
            FOI PARA ISSO QUE CRIAMOS O <span className="text-orange-500">MINHA ASSESSORIA.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Uma ferramenta digital para ajudar você a organizar seu treinamento de corrida com mais clareza e direção.
          </p>
        </div>

        {/* 3 Core Blocks */}
        <div className="space-y-3">
          {/* Block 1: VOCÊ DEFINE */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-3">
            <div className="flex items-center gap-2.5 text-orange-400">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <Sliders className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display">
                VOCÊ DEFINE
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-300 font-medium">
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Seu nível</span>
              </li>
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Sua frequência</span>
              </li>
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Sua distância-alvo</span>
              </li>
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Seu objetivo</span>
              </li>
            </ul>
          </div>

          {/* Block 2: VOCÊ FAZ */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-3">
            <div className="flex items-center gap-2.5 text-orange-400">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <PlayCircle className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display">
                VOCÊ FAZ
              </h3>
            </div>
            <div className="bg-zinc-950/50 p-2.5 rounded-lg border border-zinc-850 text-xs text-zinc-300 flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Seu teste de referência (estime seu nível e zonas de ritmo com facilidade)</span>
            </div>
          </div>

          {/* Block 3: VOCÊ ACOMPANHA */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-3">
            <div className="flex items-center gap-2.5 text-orange-400">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display">
                VOCÊ ACOMPANHA
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-300 font-medium">
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Seus treinos</span>
              </li>
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Suas sessões</span>
              </li>
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Seu histórico</span>
              </li>
              <li className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-850">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Sua evolução</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="pt-4 border-t border-zinc-900 sticky bottom-0 bg-zinc-950/95 py-3 -mx-2 px-2 backdrop-blur">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-500/25 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <span>CONTINUAR</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
