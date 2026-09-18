import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Stage14TargetAudienceProps {
  onNext: () => void;
}

export const Stage14TargetAudience: React.FC<Stage14TargetAudienceProps> = ({ onNext }) => {
  const criteria = [
    'Você corre por conta própria.',
    'Quer se preparar para 5 km, 10 km ou 21 km.',
    'Está cansado de planilhas genéricas.',
    'Quer entender melhor o que fazer em cada sessão.',
    'Quer organizar sua semana de treinamento.',
    'Quer acompanhar sua evolução.',
  ];

  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn min-h-[75vh]">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Identificação de Perfil
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
            O MINHA ASSESSORIA PODE <span className="text-orange-500">FAZER SENTIDO</span> PARA VOCÊ SE:
          </h2>
        </div>

        {/* List of criteria cards */}
        <div className="space-y-2.5">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 flex items-start gap-3 hover:border-orange-500/40 transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-zinc-200 leading-snug">
                {item}
              </p>
            </div>
          ))}
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
