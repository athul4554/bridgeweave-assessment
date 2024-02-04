import React from "react";

const Pagination = ({
  page,
  totalRecords,
  setPage,
}: {
  page: number;
  totalRecords: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="md:p-10 flex justify-end items-center sm:gap-1 md:gap-3">
      <button
        style={{ display: page > 1 ? "block" : "none" }}
        onClick={() => setPage((prev: number) => prev - 1)}
      >
        ◀️
      </button>

      {[...Array(totalRecords / 10)].map((pages, index) => {
        return (
          <div key={index}>
            <button
              className={`${
                page === index + 1
                  ? "bg-sky-200 text-sky-800 px-2 rounded text-center"
                  : ""
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          </div>
        );
      })}
      <button
        onClick={() => setPage((prev: number) => prev + 1)}
        className={`${page < totalRecords / 10 ? "block" : "hidden"}`}
      >
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
