import DayCard from '../DayCard';

export default function DayCardExample() {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <DayCard day={1} isCompleted={false} onClick={() => console.log('Day 1 clicked')} />
      <DayCard day={2} isCompleted={true} onClick={() => console.log('Day 2 clicked')} />
      <DayCard day={3} isCompleted={false} onClick={() => console.log('Day 3 clicked')} />
    </div>
  );
}
