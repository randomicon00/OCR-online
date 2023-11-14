import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders OCR application's intro text", () => {
  render(<App />);
  
  const introElement = screen.getByText(/online ocr image to text converter/i);
  
  expect(introElement).toBeInTheDocument();
});

