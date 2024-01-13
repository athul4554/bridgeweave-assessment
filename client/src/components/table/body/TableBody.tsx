import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentCatalogType } from "../../../context/helper";

const TableBody = ({
  studCatalog,
  page,
}: {
  studCatalog: StudentCatalogType[];
  page: number;
}) => {
  const navigate = useNavigate();
  return (
    <tbody className="divide-y divide-gray-100">
      {studCatalog?.slice(page * 10 - 10, 10 * page).map((student, index) => {
        return (
          <tr
            className="bg-white hover:bg-slate-100"
            onClick={() => navigate(`/student-info/${student.id}`)}
            key={student.date_of_birth + index}
          >
            <td className="p-3 pl-10 text-sm text-gray-700 whitespace-nowrap">
              {page * 10 - 10 + index + 1}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
              {student?.name}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-sky-800 bg-sky-200 rounded-lg bg-opacity-50">
                {student?.date_of_birth}
              </span>
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
              {student?.totalGrade}
            </td>
            <td className="p-3 text-sm  whitespace-nowrap text-center">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-sky-800 bg-sky-200 rounded-lg bg-opacity-50">
                {student?.joinDate}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
