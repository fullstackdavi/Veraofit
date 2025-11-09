import DayDetailModal from '../DayDetailModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DayDetailModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const dayData = {
    day: 1,
    tip: "Beba pelo menos 2 litros de água ao longo do dia e caminhe por 30 minutos. A hidratação é essencial para o metabolismo e a caminhada ajuda a queimar calorias.",
    recipe: {
      name: "Salada de Quinoa com Legumes",
      ingredients: [
        "1 xícara de quinoa cozida",
        "1 tomate picado",
        "1 pepino picado",
        "1/2 cebola roxa picada",
        "Suco de 1 limão",
        "Azeite de oliva a gosto",
        "Sal e pimenta a gosto"
      ],
      steps: [
        "Cozinhe a quinoa conforme as instruções da embalagem e deixe esfriar",
        "Em uma tigela, misture a quinoa com todos os vegetais picados",
        "Tempere com limão, azeite, sal e pimenta",
        "Misture bem e sirva gelado"
      ]
    }
  };

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Abrir Modal do Dia 1</Button>
      <DayDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dayData={dayData}
        isCompleted={isCompleted}
        onToggleComplete={() => setIsCompleted(!isCompleted)}
      />
    </div>
  );
}
