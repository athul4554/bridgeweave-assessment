import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineData, lineOpt } from "./helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  return (
    <div className="w-full p-2 md:p-5">
      <div className="bg-white rounded p-5">
        <Line options={lineOpt} data={lineData} width={"300"} height={"300"} />
      </div>
    </div>
  );
};

export default LineChart;
