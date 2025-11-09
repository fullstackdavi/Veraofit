import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface DayCardProps {
  day: number;
  isCompleted: boolean;
  onClick: () => void;
}

export default function DayCard({ day, isCompleted, onClick }: DayCardProps) {
  return (
    <Card
      className={`
        relative p-6 cursor-pointer transition-all duration-300 
        hover:shadow-lg hover:-translate-y-1 hover-elevate active-elevate-2
        ${isCompleted ? 'bg-chart-3/10 border-chart-3' : 'bg-card/80 backdrop-blur-sm'}
      `}
      onClick={onClick}
      data-testid={`card-day-${day}`}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className={`
          text-3xl font-bold 
          ${isCompleted ? 'text-chart-3' : 'text-foreground'}
        `}>
          {day}
        </div>
        <div className="text-xs text-muted-foreground font-medium">
          Dia {day}
        </div>
        
        {isCompleted && (
          <div className="absolute top-2 right-2 bg-chart-3 rounded-full p-1">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </Card>
  );
}
