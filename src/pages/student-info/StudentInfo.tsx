import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudDetails } from "../../context/DataContext";
import BasicInfo from "./BasicInfo";
import GradesInfo from "./GradesInfo";
import PdfExport from "../../components/export/PdfExport";

const StudentInfo = () => {
  const { id } = useParams();
  const [showExportSetting, setShowExportSetting] = useState(false);
  const { studCatalog, fetchData } = StudDetails();
  let student = studCatalog.find((stud) => stud.id === id);
  useEffect(() => {
    //scroll to top on initial render
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!studCatalog?.length) {
      fetchData();
    }
  }, []);

  return (
    <div className="p-2 md:p-5 h-full ">
      <div className="w-50% m-auto bg-white sm:p-3 md:p-10 ">
        <div className="flex justify-between">
          <div className="text-lg px-3 font-bold text-gray-600 md:ml-16">
            Basic Information
          </div>
          <button
            className="bg-sky-200 text-base font-semibold py-1 px-3 rounded text-sky-800 md:mr-16"
            onClick={() => setShowExportSetting((prev) => !prev)}
          >
            Export
          </button>
        </div>
        <div className="md:flex">
          <div className="w-full md:w-[50%] md:ml-16">
            {/* for smaller screen resolution */}
            {showExportSetting && (
              <div className="p-3 md:hidden ">
                <PdfExport />
              </div>
            )}
            <BasicInfo student={student} />
            <GradesInfo student={student} />
          </div>
          {/* for desktop screen */}
          {showExportSetting && (
            <div className="hidden md:flex w-[50%] border-l  justify-center pl-16">
              <PdfExport />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
