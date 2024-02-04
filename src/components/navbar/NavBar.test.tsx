import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

HTMLCanvasElement.prototype.getContext = jest.fn();

test("navbar view catalog button test", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const catalogBtn = screen.getByText(/view catalog/i);
  expect(catalogBtn).toBeInTheDocument();
});
test("navbar dashboard header test", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const catalogBtn = screen.getByText(/dashboard/i);
  expect(catalogBtn).toBeInTheDocument();
});
