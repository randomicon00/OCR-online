import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  beforeEach(() => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
  });

  it("should render children", () => {
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "OCR" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("should render the footer text", () => {
    expect(screen.getByText("© 2023 OCR App")).toBeInTheDocument();
  });
});
