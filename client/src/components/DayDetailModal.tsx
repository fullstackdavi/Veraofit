import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lightbulb, UtensilsCrossed, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DayData {
  day: number;
  tip: string;
  recipe: {
    name: string;
    ingredients: string[];
    steps: string[];
  };
}

interface DayDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayData: DayData;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export default function DayDetailModal({
  isOpen,
  onClose,
  dayData,
  isCompleted,
  onToggleComplete,
}: DayDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-day-detail">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            Dia {dayData.day}
            {isCompleted && (
              <Badge className="bg-chart-3 text-white">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Concluído
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            Siga as orientações do dia para conquistar seus objetivos
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="bg-accent/50 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-primary rounded-full p-2">
                <Lightbulb className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Dica do Dia</h3>
            </div>
            <p className="text-foreground leading-relaxed" data-testid="text-tip">
              {dayData.tip}
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-secondary rounded-full p-2">
                <UtensilsCrossed className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Receita Saudável</h3>
            </div>
            
            <h4 className="font-semibold text-foreground mb-2" data-testid="text-recipe-name">
              {dayData.recipe.name}
            </h4>
            
            <div className="mb-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Ingredientes:</p>
              <ul className="list-disc list-inside space-y-1 text-foreground">
                {dayData.recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm">{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Modo de Preparo:</p>
              <ol className="list-decimal list-inside space-y-2 text-foreground">
                {dayData.recipe.steps.map((step, index) => (
                  <li key={index} className="text-sm">{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              className="flex-1"
              variant={isCompleted ? "outline" : "default"}
              onClick={onToggleComplete}
              data-testid="button-toggle-complete"
            >
              {isCompleted ? "Desmarcar como Feito" : "Marcar como Feito"}
            </Button>
            <Button variant="outline" onClick={onClose} data-testid="button-close">
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
