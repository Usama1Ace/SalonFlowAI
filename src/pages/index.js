import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SnapshotCard from "../components/SnapshotCard";
import WeeklyTrendChart from '@/src/components/WeeklyTrendChart';
import TopServicesList from "../components/TopServicesList";
import AppointmentsPreview from "../components/AppointmentsPreview";
import QuickActionsToolbar from "../components/QuickActionsToolbar";
import DrillDownPanel from "../components/DrillDownPanel";
import { useState } from "react";

export default function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(null);

  const snapshotCards = [
    { title: "Today's Bookings", value: 28, trend: "+5%" },
    { title: "Revenue", value: "$1,200", trend: "+10%" },
    { title: "No-Show Rate", value: "8%", trend: "-2%" },
    { title: "Utilization %", value: "75%", trend: "+3%" },
  ];

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Overview Pane */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {snapshotCards.map((card, index) => (
            <SnapshotCard
              key={index}
              card={card}
              onClick={() => handleCardClick(card.title)}
            />
          ))}
        </div>

        {/* Trends & Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WeeklyTrendChart />
          <TopServicesList />
        </div>

        {/* Appointments Preview */}
        <AppointmentsPreview />

        {/* Quick Actions Toolbar */}
        <QuickActionsToolbar />

        {/* Drill-Down Panel */}
        {selectedCard && (
          <DrillDownPanel selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </div>
      <Footer />
    </div>
  );
}
