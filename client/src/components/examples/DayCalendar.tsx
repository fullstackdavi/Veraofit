import DayCalendar from '../DayCalendar';

export default function DayCalendarExample() {
  const completedDays = new Set([1, 3, 5, 7, 10]);
  
  return (
    <DayCalendar 
      completedDays={completedDays} 
      onDayClick={(day) => console.log(`Day ${day} clicked`)} 
    />
  );
}
