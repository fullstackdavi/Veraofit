import { Card } from "@/components/ui/card";
import { CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DayCardProps {
  day: number;
  isCompleted: boolean;
  isLocked?: boolean; // Adicionado para indicar se o dia está bloqueado
  onClick: () => void;
}

export default function DayCard({ day, isCompleted, isLocked = false, onClick }: DayCardProps) {
  return (
    <div
      onClick={isLocked ? undefined : onClick} // Desabilita o clique se o dia estiver bloqueado
      className={cn(
        "relative rounded-xl p-6 transition-all duration-300",
        "border-2 bg-white/90 backdrop-blur-sm",
        isLocked 
          ? "border-gray-300 bg-gray-100/50 cursor-not-allowed opacity-60" 
          : "cursor-pointer hover:shadow-lg hover:-translate-y-1",
        isCompleted && !isLocked
          ? "border-green-400 bg-green-50/90" 
          : !isLocked && "border-gray-200 hover:border-blue-300"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <span className={cn(
          "text-3xl font-bold",
          isLocked ? "text-gray-400" : "text-gray-800"
        )}>
          {day}
        </span>
        <span className={cn(
          "text-sm",
          isLocked ? "text-gray-400" : "text-gray-600"
        )}>
          Dia {day}
        </span>
        {isCompleted && !isLocked && (
          <CheckCircle2 className="w-6 h-6 text-green-600 absolute top-2 right-2" />
        )}
        {isLocked && (
          <Lock className="w-6 h-6 text-gray-400 absolute top-2 right-2" />
        )}
      </div>
    </div>
  );
}