import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders OCR application's title text", () => {
  render(<App />);
  const titleElement = screen.getByText(/image to text conversion/i);
  
  expect(titleElement).toBeInTheDocument();
});

// TODO More tests for the app are needed!
