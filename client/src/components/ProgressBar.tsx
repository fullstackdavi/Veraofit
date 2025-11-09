import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  completedDays: number;
  totalDays: number;
}

export default function ProgressBar({ completedDays, totalDays }: ProgressBarProps) {
  const percentage = (completedDays / totalDays) * 100;
  
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-foreground">
            Seu Progresso
          </h3>
          <span className="text-sm font-bold text-primary" data-testid="text-progress">
            {completedDays}/{totalDays} dias completos
          </span>
        </div>
        <Progress value={percentage} className="h-3" data-testid="progress-bar" />
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {percentage.toFixed(0)}% concluído
        </p>
      </div>
    </div>
  );
}
