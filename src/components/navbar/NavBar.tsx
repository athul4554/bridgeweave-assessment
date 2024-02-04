import React from "react";
import { StudDetails } from "../../context/DataContext";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { tableRef } = StudDetails();
  const handleScroll = () => {
    window.scrollTo({
      top: tableRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="md:mx-2 bg-white font-bold text-2xl rounded py-3 px-3 flex justify-between">
      <div>
        <div className="font-bold text-2xl text-gray-600 ">
          {location?.pathname.includes("student-info")
            ? "Student Details"
            : "Dashboard"}
        </div>
        {/* {location?.pathname.includes("student-info") && (
          <p className="text-[0.75rem] p-0 m-0 font-medium  underline">
            <span className="text-blue-500">Dashboard/</span> Student-info
          </p>
        )} */}
      </div>
      <div className="flex gap-2 items-center">
        {!location?.pathname.includes("student-info") && (
          <button
            className="px-2 py-2 text-xs bg-sky-200 text-sky-800 rounded"
            onClick={handleScroll}
          >
            View Catalog
          </button>
        )}
        <button onClick={() => navigate("/")}>🏠</button>
      </div>
    </div>
  );
};

export default NavBar;
