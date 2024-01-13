import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import BasicInfo from "./BasicInfo";

HTMLCanvasElement.prototype.getContext = jest.fn();
const student = {
  id: "1",
  name: "Athul",
  age: 25,
  date_of_birth: "1999-03-20",
  city: "kollam",
  joinDate: "1999-03-20",
  totalGrade: 350,
  grades: { Math: 80, Science: 90, English: 70, History: 80, Programming: 100 },
};
test("name label test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const nameLabel = screen.getByText(/name/i);
  expect(nameLabel).toBeInTheDocument();
});
test("age label test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const ageLabel = screen.getByText(/age/i);
  expect(ageLabel).toBeInTheDocument();
});
test("dob label test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const dobLabel = screen.getByText(/age/i);
  expect(dobLabel).toBeInTheDocument();
});
test("city label test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const cityLabel = screen.getByText(/age/i);
  expect(cityLabel).toBeInTheDocument();
});
test("join date label test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const cityLabel = screen.getByText(/join date/i);
  expect(cityLabel).toBeInTheDocument();
});
test("grade label test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const gradeLabel = screen.getByText(/join date/i);
  expect(gradeLabel).toBeInTheDocument();
});
test("name rendered test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const name = screen.getByText(/athul/i);
  expect(name).toBeInTheDocument();
});
test("age rendered test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const age = screen.getByText(/25/i);
  expect(age).toBeInTheDocument();
});

test("city rendered test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const city = screen.getByText(/kollam/i);
  expect(city).toBeInTheDocument();
});

test("total grade rendered test", () => {
  render(
    <BrowserRouter>
      <BasicInfo student={student} />
    </BrowserRouter>
  );
  const total = screen.getByText(/350/i);
  expect(total).toBeInTheDocument();
});
