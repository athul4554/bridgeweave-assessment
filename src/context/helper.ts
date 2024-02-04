export type Grades = {
  Math: number;
  Science: number;
  English: number;
  History: number;
  Programming: number;
};
export type StudentOrg = {
  name: string;
  age: number;
  date_of_birth: string;
  city: string;
  grades: Grades;
};
export type ContextTypes = {
  data: StudentOrg[];
  error: boolean;
  tableRef: React.RefObject<HTMLDivElement> | null;
  studCatalog: StudentCatalogType[];
  isSortAsc: boolean;
  setStudCatalog: React.Dispatch<React.SetStateAction<StudentCatalogType[]>>;
  setIsSortAsc: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => void;
};
export type StudentCatalogType = {
  id: string;
  name: string;
  age: number;
  date_of_birth: string;
  city: string;
  joinDate: string;
  totalGrade: number;
  grades: Grades;
};
