import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieData, pieOptions } from "./helper";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = ({
  refProp,
}: {
  refProp?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="w-full p-2 md:p-5" ref={refProp}>
      <div className="bg-white rounded p-5">
        <Pie data={pieData} options={pieOptions} width={"300"} height={"300"} />
      </div>
    </div>
  );
};

export default PieCharts;
