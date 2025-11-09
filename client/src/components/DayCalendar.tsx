import DayCard from "./DayCard";

interface DayCalendarProps {
  completedDays: Set<number>;
  onDayClick: (day: number) => void;
}

export default function DayCalendar({ completedDays, onDayClick }: DayCalendarProps) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Calendário do Desafio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Clique em cada dia para ver as dicas, receitas e marcar como concluído
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {days.map((day) => (
            <DayCard
              key={day}
              day={day}
              isCompleted={completedDays.has(day)}
              onClick={() => onDayClick(day)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
