import { Trophy, Gift, Star, TrendingDown, Book, Dumbbell, BarChart3, Utensils, Activity, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RewardSystemProps {
  completedDays: number;
}

const REWARD_STAGES = [
  { stage: 1, daysRequired: 5, discount: 10, price: 81, bonus: "E-book de Receitas", Icon: Book },
  { stage: 2, daysRequired: 10, discount: 20, price: 72, bonus: "Guia de Exercícios", Icon: Dumbbell },
  { stage: 3, daysRequired: 15, discount: 30, price: 63, bonus: "Planilha de Controle", Icon: BarChart3 },
  { stage: 4, daysRequired: 20, discount: 40, price: 54, bonus: "Plano Alimentar", Icon: Utensils },
  { stage: 5, daysRequired: 25, discount: 50, price: 45, bonus: "Programa Avançado", Icon: Activity },
  { stage: 6, daysRequired: 30, discount: 67, price: 29.90, bonus: "Acesso Vitalício", Icon: Award }
];

export default function RewardSystem({ completedDays }: RewardSystemProps) {
  const points = completedDays * 100;
  const level = Math.min(Math.floor(completedDays / 5) + 1, 6);

  let currentPrice = 90;
  let currentDiscount = 0;

  for (const stage of REWARD_STAGES) {
    if (completedDays >= stage.daysRequired) {
      currentPrice = stage.price;
      currentDiscount = stage.discount;
    }
  }

  return (
    <div className="w-full space-y-6 mb-8" data-testid="reward-system">
      {/* Header com Estatísticas */}
      <Card 
        className="p-8 border-4 border-purple-600" 
        style={{ 
          backgroundColor: '#ffffff', 
          boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
        }}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-3" style={{ color: '#7c3aed', textShadow: 'none' }}>
            <Trophy className="w-10 h-10" />
            Sistema de Recompensas
          </h2>
          <p className="text-lg" style={{ color: '#4b5563', textShadow: 'none' }}>
            Complete etapas e ganhe descontos progressivos!
          </p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div 
            className="p-6 rounded-xl text-center border-4 border-purple-500"
            style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)' }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-6 h-6" style={{ color: '#fbbf24' }} />
              <h3 className="text-3xl font-bold" style={{ color: '#ffffff', textShadow: 'none' }}>
                {points}
              </h3>
            </div>
            <p className="text-sm font-semibold" style={{ color: '#ffffff', textShadow: 'none' }}>
              Pontos Ganhos
            </p>
          </div>

          <div 
            className="p-6 rounded-xl text-center border-4 border-green-500"
            style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-6 h-6" style={{ color: '#fbbf24' }} />
              <h3 className="text-3xl font-bold" style={{ color: '#ffffff', textShadow: 'none' }}>
                {completedDays}/30
              </h3>
            </div>
            <p className="text-sm font-semibold" style={{ color: '#ffffff', textShadow: 'none' }}>
              Dias Completados
            </p>
          </div>

          <div 
            className="p-6 rounded-xl text-center border-4 border-orange-500"
            style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)' }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-6 h-6" style={{ color: '#fbbf24' }} />
              <h3 className="text-3xl font-bold" style={{ color: '#ffffff', textShadow: 'none' }}>
                Nível {level}
              </h3>
            </div>
            <p className="text-sm font-semibold" style={{ color: '#ffffff', textShadow: 'none' }}>
              Nível Atual
            </p>
          </div>
        </div>

        {/* Tracker de Preço */}
        <div className="flex items-center justify-center gap-8 py-6 border-t-4 border-gray-200">
          <div className="text-center">
            <div className="text-gray-500 line-through text-2xl font-bold mb-1" style={{ textShadow: 'none' }}>
              R$ 90,00
            </div>
            <small className="text-gray-600 font-semibold" style={{ textShadow: 'none' }}>Preço Original</small>
          </div>

          <TrendingDown className="w-10 h-10 text-green-600" />

          <div className="text-center">
            <div className="text-5xl font-bold mb-1" style={{ color: '#16a34a', textShadow: 'none' }}>
              R$ {currentPrice.toFixed(2)}
            </div>
            <Badge 
              className="text-lg px-4 py-1 font-bold border-2 border-green-700"
              style={{ backgroundColor: '#16a34a', color: '#ffffff' }}
            >
              {currentDiscount}% OFF
            </Badge>
            <div className="mt-2">
              <small className="text-gray-600 font-semibold" style={{ textShadow: 'none' }}>Seu Preço Atual</small>
            </div>
          </div>
        </div>
      </Card>

      {/* Etapas de Recompensa */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2" style={{ color: '#7c3aed', textShadow: 'none' }}>
          <Gift className="w-8 h-8" />
          Etapas de Recompensa
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REWARD_STAGES.map((stage) => {
            const isCompleted = completedDays >= stage.daysRequired;
            const isActive = completedDays >= stage.daysRequired - 5 && !isCompleted;
            const StageIcon = stage.Icon;

            return (
              <Card
                key={stage.stage}
                className={cn(
                  "p-6 text-center transition-all duration-300 border-4",
                  isCompleted && "transform scale-105"
                )}
                style={{
                  backgroundColor: isCompleted ? '#d1fae5' : '#ffffff',
                  borderColor: isCompleted ? '#16a34a' : isActive ? '#7c3aed' : '#e5e7eb',
                  boxShadow: isCompleted 
                    ? '0 10px 25px rgba(34, 197, 94, 0.4)' 
                    : isActive 
                    ? '0 0 20px rgba(124, 58, 237, 0.5)' 
                    : '0 4px 10px rgba(0,0,0,0.1)'
                }}
                data-testid={`reward-stage-${stage.stage}`}
              >
                <div className="flex justify-center mb-2">
                  <StageIcon className="w-12 h-12" style={{ color: isCompleted ? '#16a34a' : '#7c3aed' }} />
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: isCompleted ? '#15803d' : '#1f2937', textShadow: 'none' }}>
                  Etapa {stage.stage}
                </h4>
                <p className="text-sm font-semibold mb-3" style={{ color: '#6b7280', textShadow: 'none' }}>
                  {stage.daysRequired} dias
                </p>
                
                <div 
                  className="text-2xl font-bold mb-2 px-4 py-2 rounded-lg border-2"
                  style={{ 
                    backgroundColor: isCompleted ? '#16a34a' : '#7c3aed',
                    color: '#ffffff',
                    borderColor: isCompleted ? '#15803d' : '#6d28d9'
                  }}
                >
                  {stage.discount}% OFF
                </div>
                
                <div className="text-3xl font-bold my-2" style={{ color: '#16a34a', textShadow: 'none' }}>
                  R$ {stage.price.toFixed(2)}
                </div>
                
                <p className="text-sm font-semibold" style={{ color: '#4b5563', textShadow: 'none' }}>
                  {stage.bonus}
                </p>

                {isCompleted && (
                  <Badge className="mt-3 border-2 border-green-700" style={{ backgroundColor: '#16a34a', color: '#ffffff' }}>
                    ✓ Desbloqueado
                  </Badge>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
