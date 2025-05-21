import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

export default function WeeklyTrendChart() {
  const chartRef = useRef(null);
  const [selectedMetric, setSelectedMetric] = useState("Bookings");

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const data = {
      Bookings: [12, 19, 10, 15, 22, 30, 25],
      Revenue: [120, 190, 100, 150, 220, 300, 250],
    };

    const option = {
      title: {
        text: "Weekly Trends",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: [selectedMetric],
        top: "10%",
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: selectedMetric,
          type: "line",
          smooth: true,
          data: data[selectedMetric],
          areaStyle: {
            color: selectedMetric === "Bookings" ? "rgba(74, 144, 226, 0.3)" : "rgba(245, 166, 35, 0.3)",
          },
          lineStyle: {
            color: selectedMetric === "Bookings" ? "#4A90E2" : "#F5A623",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [selectedMetric]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Weekly Trend</h3>
        <select
          className="border rounded-md px-2 py-1"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="Bookings">Bookings</option>
          <option value="Revenue">Revenue</option>
        </select>
      </div>
      <div ref={chartRef} style={{ height: "300px", width: "100%" }}></div>
    </div>
  );
}