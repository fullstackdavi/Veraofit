import { Book, Dumbbell, BarChart3, Utensils, Activity, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RewardStage {
  stage: number;
  daysRequired: number;
  discount: number;
  price: number;
  bonus: string;
  Icon: LucideIcon;
}

export const REWARD_STAGES: RewardStage[] = [
  { stage: 1, daysRequired: 1, discount: 10, price: 81, bonus: "E-book de Receitas", Icon: Book },
  { stage: 2, daysRequired: 2, discount: 20, price: 72, bonus: "Guia de Exercícios", Icon: Dumbbell },
  { stage: 3, daysRequired: 3, discount: 30, price: 63, bonus: "Planilha de Controle", Icon: BarChart3 },
  { stage: 4, daysRequired: 4, discount: 40, price: 54, bonus: "Plano Alimentar", Icon: Utensils },
  { stage: 5, daysRequired: 5, discount: 50, price: 45, bonus: "Programa Avançado", Icon: Activity },
  { stage: 6, daysRequired: 6, discount: 60, price: 36, bonus: "Acesso Premium", Icon: Award },
  { stage: 7, daysRequired: 7, discount: 70, price: 27, bonus: "Suporte Exclusivo", Icon: Book },
  { stage: 8, daysRequired: 8, discount: 80, price: 18, bonus: "Comunidade VIP", Icon: Dumbbell },
  { stage: 9, daysRequired: 9, discount: 90, price: 9, bonus: "Consultoria", Icon: BarChart3 },
  { stage: 10, daysRequired: 10, discount: 100, price: 29.90, bonus: "Acesso Vitalício", Icon: Award }
];

export const BASE_PRICE = 299;
export const POINTS_PER_DAY = 100;

export function calculatePoints(completedDays: number): number {
  return completedDays * POINTS_PER_DAY;
}

export function calculateLevel(completedDays: number): number {
  return Math.min(completedDays, 10);
}

export function getCurrentRewardStage(completedDays: number): RewardStage | null {
  const unlockedStages = REWARD_STAGES.filter(stage => completedDays >= stage.daysRequired);
  return unlockedStages.length > 0 ? unlockedStages[unlockedStages.length - 1] : null;
}

export function getNextRewardStage(completedDays: number): RewardStage | null {
  return REWARD_STAGES.find(stage => completedDays < stage.daysRequired) || null;
}

export function getCurrentPrice(completedDays: number): number {
  const currentStage = getCurrentRewardStage(completedDays);
  return currentStage ? currentStage.price : BASE_PRICE;
}

export function getCurrentDiscount(completedDays: number): number {
  const currentStage = getCurrentRewardStage(completedDays);
  return currentStage ? currentStage.discount : 0;
}

export function getUnlockedStages(completedDays: number): RewardStage[] {
  return REWARD_STAGES.filter(stage => completedDays >= stage.daysRequired);
}

export function checkNewStageUnlocked(previousDays: number, currentDays: number): RewardStage | null {
  const previousStage = getCurrentRewardStage(previousDays);
  const currentStage = getCurrentRewardStage(currentDays);
  
  if (!currentStage) return null;
  if (!previousStage) return currentStage;
  if (currentStage.stage > previousStage.stage) return currentStage;
  
  return null;
}
