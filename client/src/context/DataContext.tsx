import React, { createContext, useState, useContext, useRef } from "react";
import { ContextTypes, StudentCatalogType, StudentOrg } from "./helper";

export const DataContext = createContext<ContextTypes>({
  data: [],
  error: false,
  tableRef: null,
  studCatalog: [],
  isSortAsc: false,
  setIsSortAsc: () => {},
  setStudCatalog: () => {},
  fetchData: () => {},
});

const DataContextProvider = ({ children }: { children: any }) => {
  const axios = require("axios");
  const [data, setData] = useState<StudentOrg[]>([]);
  const [isSortAsc, setIsSortAsc] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const [studCatalog, setStudCatalog] = useState<StudentCatalogType[]>([]);

  const fetchData = async () =>
    await axios // Data Fetching
      .get("/students.json")
      .then((res: { data: StudentOrg[] }) => {
        setData(res.data);
        setError(false);
        const refactoredData = res.data.map((student, index) => {
          //Refactoring for adding missing values in API
          return {
            id: `${index + 1 + student.date_of_birth}`,
            name: student.name,
            age: student.age,
            city: student.city,
            totalGrade: Object.values(student.grades).reduce(
              (sum, grade) => sum + grade,
              0
            ),
            date_of_birth: student.date_of_birth,
            joinDate: String(new Date().toISOString().split("T")[0]),
            grades: student.grades,
          };
        });
        setStudCatalog(refactoredData);
      })
      .catch((err: any) => setError(err));

  return (
    <DataContext.Provider
      value={{
        data,
        error,
        fetchData,
        tableRef,
        isSortAsc,
        studCatalog,
        setStudCatalog,
        setIsSortAsc,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const StudDetails = () => {
  const {
    data,
    error,
    fetchData,
    tableRef,
    isSortAsc,
    studCatalog,
    setStudCatalog,
    setIsSortAsc,
  } = useContext(DataContext);
  return {
    data,
    error,
    tableRef,
    fetchData,
    studCatalog,
    isSortAsc,
    setStudCatalog,
    setIsSortAsc,
  };
};

export default DataContextProvider;
