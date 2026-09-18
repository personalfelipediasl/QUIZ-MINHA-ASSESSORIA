import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

interface Stage1OpeningProps {
  onStart: () => void;
}

export const Stage1Opening: React.FC<Stage1OpeningProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6 sm:py-10 space-y-8 animate-fadeIn">
      {/* Top subtle badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase">
        <Zap className="w-3 h-3" />
        <span>Diagnóstico de Corrida</span>
      </div>

      {/* Main Headlines */}
      <div className="space-y-4 max-w-lg">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display leading-[1.1]">
          COMO VOCÊ ESTÁ <span className="text-orange-500">TREINANDO</span> HOJE?
        </h1>
        <p className="text-base sm:text-lg font-medium text-zinc-300 leading-relaxed">
          Descubra se o seu treinamento está realmente organizado de acordo com o seu objetivo de corrida.
        </p>
      </div>

      {/* Card with explanation */}
      <div className="w-full max-w-md bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-5 text-left space-y-3 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Responda algumas perguntas rápidas e, no final, veja uma forma mais simples de organizar seus treinos.
          </p>
        </div>
      </div>

      {/* Action Button & Time hint */}
      <div className="w-full max-w-md space-y-3 pt-2">
        <button
          type="button"
          onClick={onStart}
          className="w-full py-4 px-8 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-extrabold text-base uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>COMEÇAR</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 font-medium tracking-wide">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>Leva menos de 2 minutos.</span>
        </div>
      </div>

      {/* Discreet quote banner */}
      <div className="pt-4 border-t border-zinc-900 w-full max-w-sm">
        <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold leading-relaxed">
          Planejamento • Clareza • Direção
        </p>
      </div>
    </div>
  );
};
