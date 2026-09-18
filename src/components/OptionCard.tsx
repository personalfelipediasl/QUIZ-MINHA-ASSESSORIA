import React from 'react';
import { Check } from 'lucide-react';

interface OptionCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  index?: number;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group relative overflow-hidden ${
        selected
          ? 'bg-zinc-900 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)] text-white'
          : 'bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700 text-zinc-200'
      }`}
    >
      {/* Subtle indicator bar on left when selected */}
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />
      )}

      <span className="text-sm sm:text-base font-semibold tracking-tight pr-3 leading-snug">
        {label}
      </span>

      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
          selected
            ? 'bg-orange-500 border-orange-500 text-white'
            : 'border-zinc-700 group-hover:border-zinc-600 bg-zinc-950'
        }`}
      >
        {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
      </div>
    </button>
  );
};
