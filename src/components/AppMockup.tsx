import React from 'react';
import { Activity, Clock, Flame, ShieldCheck, Zap } from 'lucide-react';

interface AppMockupProps {
  interactive?: boolean;
}

export const AppMockup: React.FC<AppMockupProps> = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-3xl p-3 bg-gradient-to-b from-zinc-800/80 to-zinc-900/60 border border-zinc-750 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Device top pill */}
      <div className="flex justify-between items-center px-4 py-1.5 mb-2 text-[10px] text-zinc-400 font-mono">
        <span>07:30</span>
        <div className="w-16 h-3 bg-zinc-950 rounded-full mx-auto" />
        <span className="flex items-center gap-1 font-semibold text-zinc-300">
          <Zap className="w-2.5 h-2.5 text-orange-500 fill-orange-500" /> 100%
        </span>
      </div>

      {/* App Screen Content */}
      <div className="bg-zinc-950 rounded-2xl p-4 border border-zinc-800/80 space-y-4">
        {/* App Bar */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/40 flex items-center justify-center">
              <Flame className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Plano Semanal</p>
              <h4 className="text-xs font-bold text-white tracking-wide">MINHA ASSESSORIA</h4>
            </div>
          </div>
          <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full uppercase">
            Sessão de Hoje
          </span>
        </div>

        {/* Workout title card */}
        <div className="bg-zinc-900/90 rounded-xl p-3.5 border border-zinc-800">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase">
              Treino Estruturado • Z4
            </span>
            <span className="text-[11px] font-mono text-zinc-400">Terça-feira</span>
          </div>
          <h3 className="text-base font-extrabold text-white tracking-tight uppercase">
            Tiros de 800m + Ritmo
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Foco: Desenvolvimento de limiar e economia de corrida
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-zinc-800/80 text-center">
            <div className="bg-zinc-950/60 rounded-lg py-1.5 px-2 border border-zinc-850">
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block">Distância</span>
              <span className="text-xs font-extrabold text-white font-mono">8.4 km</span>
            </div>
            <div className="bg-zinc-950/60 rounded-lg py-1.5 px-2 border border-zinc-850">
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block">Duração</span>
              <span className="text-xs font-extrabold text-white font-mono">48 min</span>
            </div>
            <div className="bg-zinc-950/60 rounded-lg py-1.5 px-2 border border-zinc-850">
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 block">Pace Alvo</span>
              <span className="text-xs font-extrabold text-orange-400 font-mono">4:45/km</span>
            </div>
          </div>
        </div>

        {/* Breakdown of Workout Blocks: Warmup, Main, Cooldown */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Estrutura da Sessão
          </p>

          {/* 1. Aquecimento */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border-l-2 border-l-blue-500 border-zinc-850 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-blue-400 font-mono">01</span>
              <div>
                <p className="font-bold text-zinc-200">AQUECIMENTO</p>
                <p className="text-[11px] text-zinc-400">Trote progressivo Z1/Z2 + educativos</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-zinc-300 font-semibold">15 min</span>
            </div>
          </div>

          {/* 2. Parte Principal */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/90 border-l-2 border-l-orange-500 border-zinc-800 text-xs shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-orange-500 font-mono">02</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="font-bold text-white">PARTE PRINCIPAL</p>
                  <span className="text-[9px] bg-orange-500/20 text-orange-400 px-1.5 py-0.2 rounded font-mono font-bold">
                    6x 800m
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">Ritmo 4:40-4:50/km c/ 90s trote</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-orange-400 font-bold">~23 min</span>
            </div>
          </div>

          {/* 3. Desaquecimento */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border-l-2 border-l-emerald-500 border-zinc-850 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-400 font-mono">03</span>
              <div>
                <p className="font-bold text-zinc-200">DESAQUECIMENTO</p>
                <p className="text-[11px] text-zinc-400">Trote regenerativo leve</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-zinc-300 font-semibold">10 min</span>
            </div>
          </div>
        </div>

        {/* Zonas de Treinamento visual indicator */}
        <div className="pt-2 border-t border-zinc-900">
          <div className="flex justify-between items-center text-[10px] text-zinc-400 mb-1.5">
            <span className="flex items-center gap-1 font-semibold uppercase tracking-wider">
              <Activity className="w-3 h-3 text-orange-500" /> Zonas de Treino
            </span>
            <span className="text-orange-400 font-semibold">Zona 4 Ativa</span>
          </div>
          <div className="grid grid-cols-5 gap-1 h-2 rounded-full overflow-hidden bg-zinc-900">
            <div className="bg-blue-500/50 rounded-l" title="Z1 Regenerativo" />
            <div className="bg-emerald-500/50" title="Z2 Aeróbico Base" />
            <div className="bg-yellow-500/50" title="Z3 Tempo" />
            <div className="bg-orange-500 shadow-sm shadow-orange-500/50" title="Z4 Limiar" />
            <div className="bg-red-500/40 rounded-r" title="Z5 VO2max" />
          </div>
        </div>
      </div>

      {/* Direct execution slogan */}
      <div className="mt-3 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 font-display">
          VOCÊ ABRE. <span className="text-white">ENTENDE.</span> <span className="text-orange-500">EXECUTA.</span>
        </p>
      </div>
    </div>
  );
};
