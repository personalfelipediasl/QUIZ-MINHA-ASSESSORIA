import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Stage1Opening } from './components/stages/Stage1Opening';
import { StageQuestion } from './components/stages/StageQuestion';
import { Stage9Video } from './components/stages/Stage9Video';
import { Stage10Revelation } from './components/stages/Stage10Revelation';
import { Stage11Solution } from './components/stages/Stage11Solution';
import { Stage12Differential } from './components/stages/Stage12Differential';
import { Stage13Positioning } from './components/stages/Stage13Positioning';
import { Stage14TargetAudience } from './components/stages/Stage14TargetAudience';
import { Stage15FinalCta } from './components/stages/Stage15FinalCta';
import { QuizAnswers, StageId } from './types';

export default function App() {
  const [currentStage, setCurrentStage] = useState<StageId>(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  // Scroll to top on stage change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStage]);

  const handleNext = () => {
    setCurrentStage((prev) => (Math.min(prev + 1, 15) as StageId));
  };

  const handleBack = () => {
    setCurrentStage((prev) => (Math.max(prev - 1, 1) as StageId));
  };

  const updateAnswer = (field: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate question progress percentage (Stage 2 to 8)
  const isQuestionStage = currentStage >= 2 && currentStage <= 8;
  const questionProgressPct = isQuestionStage
    ? ((currentStage - 1) / 7) * 100
    : currentStage > 8
    ? 100
    : 0;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white relative">
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Header */}
      <Header currentStage={currentStage} onBack={handleBack} />

      {/* Global Progress Line for questions */}
      {isQuestionStage && (
        <div className="w-full bg-zinc-900 h-1">
          <div
            className="bg-orange-500 h-1 transition-all duration-300 ease-out"
            style={{ width: `${questionProgressPct}%` }}
          />
        </div>
      )}

      {/* Content Container (Mobile-First, max-w-lg) */}
      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-2 sm:py-6 flex flex-col justify-center">
        {/* Stage 1: ABERTURA */}
        {currentStage === 1 && <Stage1Opening onStart={handleNext} />}

        {/* Stage 2: ASSESSORIA */}
        {currentStage === 2 && (
          <StageQuestion
            stageId={2}
            question="HOJE, VOCÊ TREINA COM UMA ASSESSORIA?"
            options={[
              'Sim, tenho acompanhamento',
              'Não, treino por conta própria',
              'Já tive, mas atualmente não tenho',
              'Sigo uma planilha que encontrei na internet',
            ]}
            selectedOption={answers.assessoria}
            onSelectOption={(opt) => updateAnswer('assessoria', opt)}
            onNext={handleNext}
            feedbackText={
              answers.assessoria &&
              answers.assessoria !== 'Sim, tenho acompanhamento'
                ? 'Tudo bem.\n\nNem todo corredor tem uma assessoria disponível no momento.\n\nMas isso não significa que você precise continuar simplesmente correndo sem saber exatamente o que está fazendo.'
                : undefined
            }
          />
        )}

        {/* Stage 3: OBJETIVO */}
        {currentStage === 3 && (
          <StageQuestion
            stageId={3}
            question="QUAL É O SEU PRINCIPAL OBJETIVO HOJE?"
            options={[
              'Começar a correr',
              'Melhorar meu condicionamento',
              'Correr 5 km',
              'Melhorar meu tempo nos 5 km',
              'Correr 10 km',
              'Melhorar meu tempo nos 10 km',
              'Correr 21 km',
              'Outro',
            ]}
            selectedOption={answers.objetivo}
            onSelectOption={(opt) => updateAnswer('objetivo', opt)}
            onNext={handleNext}
            feedbackText={
              answers.objetivo
                ? 'Perfeito.\n\nAgora sabemos para onde você quer ir.'
                : undefined
            }
          />
        )}

        {/* Stage 4: FREQUÊNCIA */}
        {currentStage === 4 && (
          <StageQuestion
            stageId={4}
            question="QUANTAS VEZES POR SEMANA VOCÊ CONSEGUE TREINAR?"
            subtext="Não existe uma resposta certa. Queremos entender a sua realidade."
            options={[
              '2 vezes',
              '3 vezes',
              '4 vezes',
              '5 vezes',
              '6 ou mais',
            ]}
            selectedOption={answers.frequencia}
            onSelectOption={(opt) => updateAnswer('frequencia', opt)}
            onNext={handleNext}
          />
        )}

        {/* Stage 5: COMO TREINA */}
        {currentStage === 5 && (
          <StageQuestion
            stageId={5}
            question="HOJE, COMO VOCÊ DECIDE O QUE VAI FAZER EM CADA TREINO?"
            options={[
              'Sigo uma planilha',
              'Copio treinos que vejo na internet',
              'Decido na hora',
              'Sigo o que meu relógio recomenda',
              'Tenho orientação profissional',
              'Tenho uma ideia do que fazer, mas não sigo uma estrutura',
            ]}
            selectedOption={answers.comoTreina}
            onSelectOption={(opt) => updateAnswer('comoTreina', opt)}
            onNext={handleNext}
          />
        )}

        {/* Stage 6: CONSCIÊNCIA */}
        {currentStage === 6 && (
          <StageQuestion
            stageId={6}
            question="QUANDO VOCÊ TERMINA UM TREINO, VOCÊ SABE QUAL ERA A FUNÇÃO DELE?"
            options={[
              'Sim, sei exatamente',
              'Mais ou menos',
              'Nem sempre',
              'Na maioria das vezes, não',
            ]}
            selectedOption={answers.consciencia}
            onSelectOption={(opt) => updateAnswer('consciencia', opt)}
            onNext={handleNext}
            feedbackText={
              answers.consciencia
                ? 'Um treino pode ter diferentes funções.\n\nO importante não é apenas correr.\n\nÉ entender por que aquele estímulo está dentro da sua semana.'
                : undefined
            }
          />
        )}

        {/* Stage 7: TESTE */}
        {currentStage === 7 && (
          <StageQuestion
            stageId={7}
            question="VOCÊ JÁ FEZ ALGUM TESTE PARA CONHECER MELHOR SEU NÍVEL DE CORRIDA?"
            options={[
              'Sim, já fiz teste de VO2max',
              'Já fiz o teste de 12 minutos',
              'Já fiz algum outro teste',
              'Nunca fiz',
            ]}
            selectedOption={answers.teste}
            onSelectOption={(opt) => updateAnswer('teste', opt)}
            onNext={handleNext}
            feedbackText={
              answers.teste === 'Nunca fiz'
                ? 'Sem problema.\n\nO teste de 12 minutos pode ser utilizado como uma referência inicial para estimar o VO2max.\n\nE você pode entender melhor como isso funciona dentro de uma estratégia de treinamento.'
                : undefined
            }
          />
        )}

        {/* Stage 8: REFLEXÃO */}
        {currentStage === 8 && (
          <StageQuestion
            stageId={8}
            question="SEU TREINAMENTO HOJE TEM UM PLANO?"
            options={[
              'Sim. Sei o que estou fazendo e por quê.',
              'Tenho uma ideia, mas não muita clareza.',
              'Vou decidindo treino por treino.',
              'Sinceramente, não sei.',
            ]}
            selectedOption={answers.reflexao}
            onSelectOption={(opt) => updateAnswer('reflexao', opt)}
            onNext={handleNext}
            feedbackText={
              answers.reflexao
                ? 'Isso é mais comum do que parece.\n\nO problema não é você não ter uma assessoria.\n\nO problema é não ter nenhuma direção para organizar seu treinamento.'
                : undefined
            }
          />
        )}

        {/* Stage 9: VÍDEO */}
        {currentStage === 9 && (
          <Stage9Video onNext={handleNext} onSkip={handleNext} />
        )}

        {/* Stage 10: REVELAÇÃO */}
        {currentStage === 10 && (
          <Stage10Revelation answers={answers} onNext={handleNext} />
        )}

        {/* Stage 11: SOLUÇÃO */}
        {currentStage === 11 && <Stage11Solution onNext={handleNext} />}

        {/* Stage 12: DIFERENCIAL */}
        {currentStage === 12 && <Stage12Differential onNext={handleNext} />}

        {/* Stage 13: POSICIONAMENTO */}
        {currentStage === 13 && <Stage13Positioning onNext={handleNext} />}

        {/* Stage 14: PARA QUEM É */}
        {currentStage === 14 && <Stage14TargetAudience onNext={handleNext} />}

        {/* Stage 15: CTA FINAL */}
        {currentStage === 15 && <Stage15FinalCta answers={answers} />}
      </main>

      {/* Discreet Footer */}
      <footer className="w-full max-w-lg mx-auto py-4 px-4 text-center border-t border-zinc-900/60 text-[11px] text-zinc-400">
        <p>© MINHA ASSESSORIA — Todos os direitos reservados.</p>
        <p className="mt-0.5 text-zinc-400">Ferramenta digital de organização e acompanhamento de treinos de corrida.</p>
      </footer>
    </div>
  );
}
