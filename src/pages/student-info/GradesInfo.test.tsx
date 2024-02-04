import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GradesInfo from "./GradesInfo";

HTMLCanvasElement.prototype.getContext = jest.fn();
const student = {
  id: "1",
  name: "Athul",
  age: 25,
  date_of_birth: "1999-03-20",
  city: "kollam",
  joinDate: "1999-03-20",
  totalGrade: 350,
  grades: { Math: 80, Science: 90, English: 70, History: 81, Programming: 100 },
};
test("name label test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const nameLabel = screen.getByText(/Grades Information/i);
  expect(nameLabel).toBeInTheDocument();
});
test("age label test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const mathLabel = screen.getByText(/maths/i);
  expect(mathLabel).toBeInTheDocument();
});
test("dob label test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const scienceLabel = screen.getByText(/science/i);
  expect(scienceLabel).toBeInTheDocument();
});
test("city label test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const englishLabel = screen.getByText(/english/i);
  expect(englishLabel).toBeInTheDocument();
});
test("join date label test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const historyLabel = screen.getByText(/history/i);
  expect(historyLabel).toBeInTheDocument();
});
test("grade label test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const programmingLabel = screen.getByText(/programming/i);
  expect(programmingLabel).toBeInTheDocument();
});
test("maths grade rendered test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const math = screen.getByText(/80/i);
  expect(math).toBeInTheDocument();
});
test("science rendered test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const science = screen.getByText(/90/i);
  expect(science).toBeInTheDocument();
});

test("english rendered test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const english = screen.getByText(/70/i);
  expect(english).toBeInTheDocument();
});

test("history grade rendered test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const history = screen.getByText(/80/i);
  expect(history).toBeInTheDocument();
});
test("programming grade rendered test", () => {
  render(
    <BrowserRouter>
      <GradesInfo student={student} />
    </BrowserRouter>
  );
  const programming = screen.getByText(/100/i);
  expect(programming).toBeInTheDocument();
});
