import React from "react";

const TableHeader = ({
  handleSort,
  isSortAsc,
}: {
  handleSort: () => void;
  isSortAsc: boolean;
}) => {
  return (
    <thead className="bg-gray-50 border-b-2 border-gray-200">
      <tr>
        <th className="w-[20%] p-3 text-sm font-semibold tracking-wide text-left pl-10">
          ID
        </th>
        <th className="w-[20%] p-3 text-sm font-semibold tracking-wide text-left flex gap-1">
          <span>Name</span>

          <button
            onClick={handleSort}
            className="p-1 ml-1 text-xs rounded bg-gray-200 flex gap-2 items-center"
          >
            <span>{!isSortAsc ? "asc" : "desc"}</span>
          </button>
        </th>
        <th className="w-[20%] p-3 text-sm font-semibold tracking-wide text-center">
          DOB
        </th>
        <th className="w-[20%] p-3 text-sm font-semibold tracking-wide text-center">
          Grade(Total)
        </th>
        <th className="w-[20%] p-3 text-sm font-semibold tracking-wide text-center">
          Join Date
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
