import { useState } from "react";

export default function QuickActionsToolbar() {
  const [actionMessage, setActionMessage] = useState("");

  const handleAction = (action) => {
    setActionMessage(`Action "${action}" executed successfully!`);
    setTimeout(() => setActionMessage(""), 3000);
  };

  return (
    <div className="fixed bottom-0 right-0 left-0 bg-white shadow-lg p-4 flex justify-between items-center">
      {actionMessage && <span className="text-green-500 font-semibold">{actionMessage}</span>}
      <div>
        <button
          onClick={() => handleAction("Resend Reminders")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition"
        >
          Resend Reminders
        </button>
        <button
          onClick={() => handleAction("Add Quick Booking")}
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600 transition"
        >
          Add Quick Booking
        </button>
        <button
          onClick={() => handleAction("Export CSV")}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          Export CSV
        </button>
      </div>
    </div>
  );
}