import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function WeeklyTrendChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    // Mock data
    const option = {
      title: {
        text: "Weekly Trends",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Bookings", "Revenue"],
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
          name: "Bookings",
          type: "line",
          smooth: true,
          data: [12, 19, 10, 15, 22, 30, 25],
          areaStyle: {
            color: "rgba(74, 144, 226, 0.3)",
          },
          lineStyle: {
            color: "#4A90E2",
          },
        },
        {
          name: "Revenue",
          type: "line",
          smooth: true,
          data: [120, 190, 100, 150, 220, 300, 250],
          areaStyle: {
            color: "rgba(245, 166, 35, 0.3)",
          },
          lineStyle: {
            color: "#F5A623",
          },
        },
      ],
    };

    // Set options and render the chart
    chartInstance.setOption(option);

    // Cleanup on component unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Weekly Trend</h3>
      <div ref={chartRef} style={{ height: "300px", width: "100%" }}></div>
    </div>
  );
}