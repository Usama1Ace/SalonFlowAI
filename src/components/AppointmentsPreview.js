import { useState } from "react";

export default function AppointmentsPreview() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    { time: "9:00 AM", status: "booked" },
    { time: "10:00 AM", status: "gap" },
    { time: "11:00 AM", status: "booked" },
    { time: "12:00 PM", status: "risk" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">Appointments Preview</h3>
      <div className="grid grid-cols-4 gap-4">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            onClick={() => setSelectedSlot(slot.time)}
            className={`p-2 rounded-md cursor-pointer ${
              slot.status === "booked" ? "bg-blue-500 text-white" : slot.status === "risk" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            {slot.time}
          </div>
        ))}
      </div>
      {selectedSlot && <p className="mt-4 text-center">Selected Slot: {selectedSlot}</p>}
    </div>
  );
}