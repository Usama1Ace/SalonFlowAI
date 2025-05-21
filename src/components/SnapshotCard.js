export default function SnapshotCard({ card, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
    >
      <div>
        <h3 className="text-lg font-semibold">{card.title}</h3>
        <p className="text-2xl">{card.value}</p>
      </div>
      <span className={`text-sm ${card.trend.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
        {card.trend}
      </span>
    </div>
  );
}