import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { AppMockup } from '../AppMockup';

interface Stage12DifferentialProps {
  onNext: () => void;
}

export const Stage12Differential: React.FC<Stage12DifferentialProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn min-h-[75vh]">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Metodologia Estruturada
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
            NÃO É APENAS: <span className="text-orange-500">“CORRA 8 KM”.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-md">
            Cada treino tem uma anatomia pensada para você progredir sem lesões e sem correr no escuro.
          </p>
        </div>

        {/* Visual Mockup of the Platform Interface */}
        <div className="pt-2">
          <AppMockup />
        </div>

        {/* Detailed block sequence card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
          <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-[9px] uppercase tracking-wider text-blue-400 font-bold block">Fase 1</span>
            <span className="text-xs font-bold text-white uppercase">Aquecimento</span>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Duração & ritmo</span>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-orange-500/40 shadow-sm">
            <span className="text-[9px] uppercase tracking-wider text-orange-400 font-bold block">Fase 2</span>
            <span className="text-xs font-bold text-white uppercase">Parte Principal</span>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Estrutura & tiros</span>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-[9px] uppercase tracking-wider text-yellow-400 font-bold block">Fase 3</span>
            <span className="text-xs font-bold text-white uppercase">Recuperação</span>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Pausa controlada</span>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold block">Fase 4</span>
            <span className="text-xs font-bold text-white uppercase">Desaquecimento</span>
            <span className="text-[10px] text-zinc-400 block mt-0.5">Regenerativo</span>
          </div>
        </div>

        {/* Impact phrase banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-zinc-900 to-zinc-900 border border-orange-500/30 text-center">
          <p className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-display">
            “VOCÊ ABRE. <span className="text-orange-500">ENTENDE.</span> EXECUTA.”
          </p>
        </div>
      </div>

      {/* Button */}
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
