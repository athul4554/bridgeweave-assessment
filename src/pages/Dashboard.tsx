import React, { useEffect, useRef } from "react";
import PieCharts from "../components/charts/PieCharts";
import LineChart from "../components/charts/LineChart";
import StudentCatalogTable from "../components/table/StudentCatalogTable";
import { StudDetails } from "../context/DataContext";

const Dashboard = () => {
  const { tableRef, fetchData } = StudDetails();
  useEffect(() => {
    fetchData(); // Call the fetch function on component mount
  }, []);
  return (
    <div>
      <div className="md:flex w-full">
        <div className="md:w-[50%]">
          <PieCharts />
        </div>
        <div className="md:w-[50%]">
          <LineChart />
        </div>
      </div>
      <div
        ref={tableRef}
        className=" md:mx-2 bg-white rounded py-3 px-3  font-medium text-gray-600 "
      >
        <div className="text-xl font-bold my-2 p-2"> Students Catalog</div>
        <div>
          <StudentCatalogTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
