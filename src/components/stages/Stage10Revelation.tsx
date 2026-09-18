import React from 'react';
import { ArrowRight, CheckCircle2, Target, Zap } from 'lucide-react';
import { QuizAnswers } from '../../types';

interface Stage10RevelationProps {
  answers: QuizAnswers;
  onNext: () => void;
}

export const Stage10Revelation: React.FC<Stage10RevelationProps> = ({ answers, onNext }) => {
  const pillars = [
    { label: 'SEU NÍVEL', value: answers.teste || 'Personalizado', desc: 'Ponto de partida real' },
    { label: 'SEU OBJETIVO', value: answers.objetivo || 'Evolução', desc: 'Direção clara de meta' },
    { label: 'SUA FREQUÊNCIA', value: answers.frequencia || 'Semanal', desc: 'Adaptado à sua rotina' },
    { label: 'SEU VOLUME', value: 'Quilometragem calculada', desc: 'Sem excessos nem déficits' },
    { label: 'SUA INTENSIDADE', value: 'Zonas de ritmo & pace', desc: 'Estímulo certo no dia certo' },
    { label: 'SUA RECUPERAÇÃO', value: 'Descanso planejado', desc: 'Evita sobrecarga e lesão' },
    { label: 'SUA EVOLUÇÃO', value: 'Acompanhamento contínuo', desc: 'Consistência sustentável' },
  ];

  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn min-h-[75vh]">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Diagnóstico Concluído
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
            PELO QUE VOCÊ RESPONDEU, <span className="text-orange-500">UMA COISA FICA CLARA:</span>
          </h2>
          <div className="bg-zinc-900/60 border border-zinc-850 p-4 rounded-xl">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Você já sabe onde quer chegar.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mt-1">
              Mas organizar o caminho entre o ponto atual e o objetivo pode ser muito mais difícil quando você precisa fazer tudo sozinho.
            </p>
          </div>
        </div>

        {/* Visual Pillars Grid */}
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            A estrutura essencial que conecta tudo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pillars.map((item, idx) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80 hover:border-orange-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-display">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final sentence block */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-zinc-900 to-zinc-900 border-l-4 border-l-orange-500 border border-zinc-800">
          <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
            “É isso que transforma uma sequência de corridas em uma estrutura de treinamento.”
          </p>
        </div>
      </div>

      {/* Button VER A SOLUÇÃO */}
      <div className="pt-4 border-t border-zinc-900 sticky bottom-0 bg-zinc-950/95 py-3 -mx-2 px-2 backdrop-blur">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-500/25 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <span>VER A SOLUÇÃO</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
