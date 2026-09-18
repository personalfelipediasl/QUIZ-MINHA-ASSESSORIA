import React from 'react';
import { ArrowRight, Smartphone, Compass, CheckCircle2 } from 'lucide-react';

interface Stage13PositioningProps {
  onNext: () => void;
}

export const Stage13Positioning: React.FC<Stage13PositioningProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn min-h-[75vh]">
      <div className="space-y-8 text-center sm:text-left">
        {/* High-impact Visual Container */}
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Direção Sem Complicação</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase font-display leading-tight">
                MESMO QUE NÃO TENHA UMA ASSESSORIA, <span className="text-orange-500">AGORA VOCÊ PODE EVOLUIR!</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed">
                O <strong className="text-white">MINHA ASSESSORIA</strong> coloca uma estrutura de treinamento na palma da sua mão.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-500 flex items-center justify-center text-xs font-bold mb-2">
                  1
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Acesso Direto</h4>
                <p className="text-[11px] text-zinc-400 mt-1">Disponível a qualquer momento no seu smartphone</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-500 flex items-center justify-center text-xs font-bold mb-2">
                  2
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sem Planilhas Confusas</h4>
                <p className="text-[11px] text-zinc-400 mt-1">Treinos detalhados passo a passo de forma visual</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-500 flex items-center justify-center text-xs font-bold mb-2">
                  3
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Autonomia Real</h4>
                <p className="text-[11px] text-zinc-400 mt-1">Você sabe exatamente o que fazer em cada dia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Central message quote */}
        <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 text-center max-w-md mx-auto">
          <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed italic">
            “Nem todo mundo tem uma assessoria no momento. Mas isso não significa que você precisa continuar apenas correndo sem direção.”
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="pt-6 pb-6">
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
