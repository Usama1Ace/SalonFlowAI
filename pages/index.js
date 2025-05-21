import WeeklyTrendChart from '@/src/components/WeeklyTrendChart';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Salon Dashboard</h1>
      
      {/* Weekly Trend Chart */}
      <WeeklyTrendChart />
    </div>
  );
}
