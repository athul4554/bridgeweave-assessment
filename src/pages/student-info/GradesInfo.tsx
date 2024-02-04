import React from "react";
import { StudentCatalogType } from "../../context/helper";

const GradesInfo = ({
  student,
}: {
  student: StudentCatalogType | undefined;
}) => {
  return (
    <div className="p-3">
      <div className="text-lg font-bold text-gray-600">Grades Information</div>
      <div className="flex items-center py-4 ">
        <div className="text-base font-medium text-slate-600 flex gap-5 w-[5rem]">
          Maths
        </div>
        :
        <div className="text-base font-normal ml-5">{student?.grades.Math}</div>
      </div>
      <div className="flex items-center py-4 ">
        <div className="text-base font-medium text-slate-600 flex gap-5 w-[5rem]">
          Science
        </div>
        :
        <div className="text-base font-normal ml-5">
          {student?.grades.Science}
        </div>
      </div>
      <div className="flex items-center py-4 ">
        <div className="text-base font-medium text-slate-600 flex gap-5 w-[5rem]">
          English
        </div>
        :
        <div className="text-base font-normal ml-5">
          {student?.grades.English}
        </div>
      </div>
      <div className="flex items-center py-4 ">
        <div className="text-base font-medium text-slate-600 flex gap-5 w-[5rem]">
          History
        </div>
        :
        <div className="text-base font-normal ml-5">
          {student?.grades.History}
        </div>
      </div>
      <div className="flex items-center py-4 ">
        <div className="text-base font-medium text-slate-600 flex gap-5 w-[7.5rem] ">
          Programming
        </div>
        :
        <div className="text-base font-normal ml-5">
          {student?.grades.Programming}
        </div>
      </div>
    </div>
  );
};

export default GradesInfo;
