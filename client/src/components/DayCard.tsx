
import { Card } from "@/components/ui/card";
import { CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DayCardProps {
  day: number;
  isCompleted: boolean;
  isLocked?: boolean;
  onClick: () => void;
}

export default function DayCard({ day, isCompleted, isLocked = false, onClick }: DayCardProps) {
  const shouldBlock = day > 10;

  return (
    <div
      onClick={shouldBlock ? undefined : onClick}
      className={cn(
        "relative rounded-xl p-6 transition-all duration-300",
        "border-4 backdrop-blur-md",
        shouldBlock 
          ? "border-gray-400 cursor-not-allowed opacity-50" 
          : "cursor-pointer hover:shadow-2xl hover:-translate-y-1",
        isCompleted && !shouldBlock
          ? "border-green-500" 
          : !shouldBlock && "border-white/30 hover:border-blue-400"
      )}
      style={{
        backgroundColor: isCompleted && !shouldBlock 
          ? 'rgba(209, 250, 229, 0.25)' 
          : shouldBlock 
          ? 'rgba(229, 231, 235, 0.25)' 
          : 'rgba(255, 255, 255, 0.15)',
        boxShadow: isCompleted && !shouldBlock 
          ? '0 10px 25px rgba(34, 197, 94, 0.2)' 
          : '0 4px 10px rgba(0,0,0,0.1)'
      }}
      data-testid={`card-day-${day}`}
    >
      {shouldBlock ? (
        <div className="flex items-center justify-center">
          <Lock className="w-10 h-10 text-gray-500" style={{ color: '#6b7280' }} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <span className={cn(
            "text-4xl font-bold",
            isCompleted ? "text-green-700" : "text-gray-900"
          )}
          style={{ 
            color: isCompleted ? '#15803d' : '#111827',
            textShadow: 'none'
          }}>
            {day}
          </span>
          <span className={cn(
            "text-sm font-semibold",
            isCompleted ? "text-green-600" : "text-gray-700"
          )}
          style={{ 
            color: isCompleted ? '#16a34a' : '#374151',
            textShadow: 'none'
          }}>
            Dia {day}
          </span>
          {isCompleted && (
            <CheckCircle2 className="w-7 h-7 text-green-600 absolute top-2 right-2" style={{ color: '#16a34a' }} />
          )}
        </div>
      )}
    </div>
  );
}
