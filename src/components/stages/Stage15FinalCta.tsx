import React from 'react';
import { ArrowUpRight, Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, QuizAnswers } from '../../types';

interface Stage15FinalCtaProps {
  answers: QuizAnswers;
}

export const Stage15FinalCta: React.FC<Stage15FinalCtaProps> = ({ answers }) => {
  const handleGoToCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn">
      <div className="space-y-6 text-center sm:text-left">
        {/* Headlines */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Passo Final
          </span>
          <p className="text-sm sm:text-base font-bold text-zinc-400 uppercase tracking-wider">
            SE VOCÊ JÁ SABE ONDE QUER CHEGAR...
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            COMECE A ORGANIZAR <span className="text-orange-500">O CAMINHO.</span>
          </h2>
          <p className="text-sm sm:text-base font-medium text-zinc-300 leading-relaxed pt-1">
            Conheça o <strong className="text-white">MINHA ASSESSORIA</strong> e tenha seu treinamento organizado em uma experiência criada para corredores.
          </p>
        </div>

        {/* Customized User Summary Recap Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-left space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
            <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Seu Diagnóstico Personalizado
            </span>
            <span className="text-[10px] text-zinc-400 uppercase font-mono">100% Concluído</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-850">
              <span className="text-[10px] uppercase text-zinc-400 block font-medium">Seu Objetivo</span>
              <span className="font-bold text-white block mt-0.5 truncate">
                {answers.objetivo || 'Evoluir na corrida'}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-850">
              <span className="text-[10px] uppercase text-zinc-400 block font-medium">Sua Frequência</span>
              <span className="font-bold text-white block mt-0.5 truncate">
                {answers.frequencia || '3 a 4x/semana'}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-850">
              <span className="text-[10px] uppercase text-zinc-400 block font-medium">Situação Atual</span>
              <span className="font-bold text-white block mt-0.5 truncate">
                {answers.assessoria || 'Treino autônomo'}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-850">
              <span className="text-[10px] uppercase text-zinc-400 block font-medium">Clareza do Treino</span>
              <span className="font-bold text-orange-400 block mt-0.5 truncate">
                Pronto para organizar
              </span>
            </div>
          </div>
        </div>

        {/* Benefits reminder */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-xs text-zinc-300">
            <Check className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Acesso imediato à plataforma digital</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-300">
            <Check className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Estruturação clara de todas as suas sessões</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-300">
            <Check className="w-4 h-4 text-orange-500 shrink-0" />
            <span>Planejamento por zonas de esforço e testes de referência</span>
          </div>
        </div>

        {/* CTA Button Block */}
        <div className="space-y-3 pt-2">
          <a
            href={CHECKOUT_URL}
            target="_self"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Directly navigate
              window.location.href = CHECKOUT_URL;
            }}
            className="w-full py-4 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-black text-base uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2.5 cursor-pointer block text-center"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          <p className="text-xs text-zinc-400 text-center font-medium">
            Você será direcionado para o checkout seguro na Hotmart.
          </p>
        </div>

        {/* Final Impact Message Block */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Mensagem Final
          </p>
          <p className="text-base sm:text-lg font-black uppercase tracking-tight text-white font-display leading-snug">
            PARE DE TREINAR NO AUTOMÁTICO.<br />
            <span className="text-orange-500">COMECE A ORGANIZAR SUA CORRIDA.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
