export type QuizAnswers = {
  assessoria?: string;
  objetivo?: string;
  frequencia?: string;
  comoTreina?: string;
  consciencia?: string;
  teste?: string;
  reflexao?: string;
};

export type StageId = 
  | 1  // ABERTURA
  | 2  // ASSESSORIA
  | 3  // OBJETIVO
  | 4  // FREQUÊNCIA
  | 5  // COMO TREINA
  | 6  // CONSCIÊNCIA
  | 7  // TESTE
  | 8  // REFLEXÃO
  | 9  // VÍDEO
  | 10 // REVELAÇÃO
  | 11 // SOLUÇÃO
  | 12 // DIFERENCIAL
  | 13 // POSICIONAMENTO
  | 14 // PARA QUEM É
  | 15; // CTA FINAL

export const CHECKOUT_URL = "https://pay.hotmart.com/U107288157Q?bid=1789036995437";
export const YOUTUBE_VIDEO_ID = "otyfe9RSVK0";
