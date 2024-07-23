import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Chart4({ title }) {
  return (
    <div className="border-2 border-black w-[auto] h-[auto]">
      <h2 className="text-l font-semibold">{title}</h2>
      <Line
        data={{
          labels: [1, 2, 3, 4, 5],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart4;
