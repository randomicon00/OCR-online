import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders ocr title text", () => {
  render(<App />);
  const titleElement = screen.getByText(/image to text conversion/i);
  expect(titleElement).toBeInTheDocument();
});
