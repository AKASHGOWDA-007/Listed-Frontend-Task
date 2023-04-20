import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);

const LineChart = () => {
  const data = {
    labels: ["Week 0", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Guest",
        data: [200, 380, 200, 300, 220, 450],
        fill: false,
        borderColor: "#E9A0A0",
        pointRadius: 0,
        tension: 0.4,
        backgroundColor: "#FFF",
      },
      {
        label: "User",
        data: [100, 420, 150, 450, 180, 250],
        fill: false,
        borderColor: "rgb(155, 221, 124)",
        pointRadius: 0,
        tension: 0.4,
        backgroundColor: "#FFF",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        align: "end",
        title: {
          position: "end",
        },
        labels: {
          boxWidth: 5,
          boxHeight: 5,
          usePointStyle: true,
          pointStyle: "circle",
          // padding: 30,
        },
      },
    },
    layout: {
      padding: 20,
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
