import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

interface DayCalendarProps {
  completedDays: Set<number>;
  onDayClick: (day: number) => void;
  freeDaysLimit?: number;
}

export default function DayCalendar({ completedDays, onDayClick, freeDaysLimit = 10 }: DayCalendarProps) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Cronograma do Desafio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Primeiros 10 dias grátis. Desbloqueie o acesso completo aos 30 dias!
        </p>

        <div className="grid grid-cols-10 gap-2 md:gap-3">
          {days.map((day) => {
            const isLocked = day > freeDaysLimit;
            const isCompleted = completedDays.has(day);
            
            return (
              <div key={day} className="flex flex-col gap-1">
                {day <= 10 && (
                  <Badge 
                    className="text-[10px] md:text-xs justify-center px-1 py-0.5"
                    style={{
                      backgroundColor: '#7c3aed',
                      color: '#ffffff'
                    }}
                    data-testid={`stage-badge-${day}`}
                  >
                    Etapa {day}
                  </Badge>
                )}
                <button
                  onClick={() => onDayClick(day)}
                  disabled={isLocked}
                  className={`
                    relative rounded-lg border-2 p-2 md:p-4 flex flex-col items-center justify-center
                    transition-all duration-200
                    ${isLocked 
                      ? 'bg-muted/50 border-muted cursor-not-allowed opacity-60' 
                      : isCompleted
                      ? 'bg-green-50 dark:bg-green-950/30 border-green-500 hover-elevate active-elevate-2'
                      : 'bg-card border-border hover-elevate active-elevate-2'
                    }
                  `}
                  data-testid={`day-card-${day}`}
                >
                  {isLocked && (
                    <Lock className="absolute top-1 right-1 w-3 h-3 md:w-4 md:h-4 text-muted-foreground/60" />
                  )}
                  <div className={`text-2xl md:text-4xl font-bold ${isLocked ? 'text-muted-foreground/40' : 'text-foreground'}`}>
                    {day}
                  </div>
                  <div className={`text-[10px] md:text-xs ${isLocked ? 'text-muted-foreground/40' : 'text-muted-foreground'}`}>
                    Dia {day}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}