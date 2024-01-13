import React, { useEffect, useState } from "react";
import { StudDetails } from "../../context/DataContext";
import TableHeader from "./header/TableHeader";
import TableBody from "./body/TableBody";
import Pagination from "../pagination/Pagination";

const StudentCatalogTable = () => {
  const { studCatalog, setStudCatalog, setIsSortAsc, isSortAsc } =
    StudDetails();
  const [page, setPage] = useState(1);

  const handleSort = () => {
    setIsSortAsc(!isSortAsc);
    const sortedStudents = [...studCatalog];
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name)); //sort asc
    if (isSortAsc) {
      setStudCatalog(sortedStudents.reverse()); //sort desc
    } else {
      setStudCatalog(sortedStudents);
    }
  };

  return (
    <div className="overflow-x-scroll ">
      <table className="w-full ">
        <TableHeader handleSort={handleSort} isSortAsc={isSortAsc} />
        <TableBody studCatalog={studCatalog} page={page} />
      </table>

      {/* pagination */}
      {studCatalog && (
        <Pagination
          page={page}
          setPage={setPage}
          totalRecords={studCatalog.length}
        />
      )}
    </div>
  );
};

export default StudentCatalogTable;
