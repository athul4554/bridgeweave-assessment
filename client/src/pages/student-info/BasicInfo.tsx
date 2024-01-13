import React from "react";
import { StudentCatalogType } from "../../context/helper";

const BasicInfo = ({
  student,
}: {
  student: StudentCatalogType | undefined;
}) => {
  return (
    <div className=" p-3">
      <div className="flex items-center  ">
        <div className="py-2 md:py-4 text-base font-medium text-slate-600 flex gap-5 w-[5rem]">
          Name
        </div>
        :<div className="text-base font-normal ml-5">{student?.name}</div>
      </div>
      <div className="flex items-center py-2 md:py-4  ">
        <div className="text-base py-2 md:py-4  font-medium text-slate-600  flex gap-5 w-[5rem]">
          Age
        </div>
        :<div className="text-base font-normal ml-5">{student?.age}</div>
      </div>

      <div className="flex items-center md:py-4 py-2 ">
        <div className="text-base py-2 md:py-4  font-medium text-slate-600  flex gap-5 w-[5rem]">
          DOB
        </div>
        :
        <div className="text-base font-normal ml-5">
          {student?.date_of_birth}
        </div>
      </div>
      <div className="flex items-center py-2 md:py-4">
        <div className="text-base py-2 md:py-4  font-medium text-slate-600 flex gap-5 w-[5rem]">
          City
        </div>
        :<div className="text-base font-normal ml-5">{student?.city}</div>
      </div>
      <div className="flex items-center py-2 md:py-4">
        <div className="text-base py-2 md:py-4  font-medium text-slate-600 flex gap-5 w-[5rem]">
          Join Date
        </div>
        :<div className="text-base font-normal ml-5">{student?.joinDate}</div>
      </div>
      <div className="flex items-center py-2 md:py-4">
        <div className="text-base py-2 md:py-4  font-medium text-slate-600 flex gap-5 w-[5rem]">
          Grade
        </div>
        :<div className="text-base font-normal ml-5">{student?.totalGrade}</div>
      </div>
    </div>
  );
};

export default BasicInfo;
