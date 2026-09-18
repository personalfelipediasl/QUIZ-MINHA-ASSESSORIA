import React, { useRef, useEffect } from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { OptionCard } from '../OptionCard';
import { StageId } from '../../types';

interface StageQuestionProps {
  stageId: StageId;
  question: string;
  subtext?: string;
  options: string[];
  selectedOption?: string;
  onSelectOption: (option: string) => void;
  onNext: () => void;
  feedbackText?: string;
}

export const StageQuestion: React.FC<StageQuestionProps> = ({
  stageId,
  question,
  subtext,
  options,
  selectedOption,
  onSelectOption,
  onNext,
  feedbackText,
}) => {
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to feedback when it appears
  useEffect(() => {
    if (feedbackText && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [feedbackText]);

  return (
    <div className="flex flex-col justify-between py-4 sm:py-6 space-y-6 animate-fadeIn min-h-[70vh]">
      <div className="space-y-6">
        {/* Question Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Etapa {stageId - 1} de 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
            {question}
          </h2>
          {subtext && (
            <p className="text-sm text-zinc-400 font-normal leading-relaxed pt-1">
              {subtext}
            </p>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {options.map((option, idx) => (
            <OptionCard
              key={option}
              label={option}
              index={idx}
              selected={selectedOption === option}
              onClick={() => onSelectOption(option)}
            />
          ))}
        </div>

        {/* Progressive Feedback Message (conditionally rendered) */}
        {feedbackText && (
          <div
            ref={feedbackRef}
            className="p-4 rounded-xl bg-zinc-900/90 border border-orange-500/40 shadow-lg text-left space-y-2 animate-fadeIn"
          >
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Ponto Importante</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-line font-medium">
              {feedbackText}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Continue Action */}
      <div className="pt-4 border-t border-zinc-900/80 sticky bottom-0 bg-zinc-950/95 py-3 -mx-2 px-2 backdrop-blur">
        <button
          type="button"
          disabled={!selectedOption}
          onClick={onNext}
          className={`w-full py-4 px-6 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 ${
            selectedOption
              ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 active:scale-[0.99] cursor-pointer'
              : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
          }`}
        >
          <span>CONTINUAR</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
