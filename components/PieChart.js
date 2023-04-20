import React from "react";
import { Pie } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  registerables,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);
Chart.register(Tooltip, Title, ArcElement, Legend);

const PieChart = () => {
  const data = {
    labels: ["Custom Short Pants", "Super Hoodies", "Basic Tees"],
    datasets: [
      {
        label: "Top Products",
        data: [31, 14, 55],
        backgroundColor: ["#F7DC7D", "#EE8484", "#98D89E"],
        borderColor: "transparent",
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          padding: 30,
          font: {
            family: "Montserrat",
            size: "14",
            weight: "700",
          },
        },
      },
    },
  };
  return <Pie data={data} options={options} />;
};

export default PieChart;
