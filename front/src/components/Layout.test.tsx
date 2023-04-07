import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render children", () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render navigation and footer", () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("OCR")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("© 2023 OCR App")).toBeInTheDocument();
  });
});
