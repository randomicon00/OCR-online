import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render children", () => {
    const { getByText } = render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render navigation and footer", () => {
    const { getByText } = render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("OCR")).toBeInTheDocument();
    expect(screen.ggetByText("Contact")).toBeInTheDocument();
    expect(screen.ggetByText("© 2023 OCR App")).toBeInTheDocument();
  });
});
