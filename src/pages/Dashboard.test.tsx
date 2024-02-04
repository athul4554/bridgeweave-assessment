import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

HTMLCanvasElement.prototype.getContext = jest.fn();
test("table title test", () => {
  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/students catalog/i);
  expect(linkElement).toBeInTheDocument();
});
test("table title test2", () => {
  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
  const linkElement2 = screen.getByText(/students catalog/i);
  expect(linkElement2).toBeInTheDocument();
});
