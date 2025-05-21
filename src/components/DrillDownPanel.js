export default function DrillDownPanel({ selectedCard, onClose }) {
  return (
    <div className="fixed top-0 right-0 w-2/3 max-w-lg bg-white shadow-2xl h-full overflow-y-auto p-6 transition-transform transform translate-x-0">
      <button onClick={onClose} className="mb-4 text-red-500 font-semibold">
        Close
      </button>
      <h3 className="text-xl font-bold mb-4">{selectedCard} Details</h3>
      {/* Replace with detailed table and chart */}
      <div className="h-40 bg-gray-200 rounded-lg"></div>
    </div>
  );
}