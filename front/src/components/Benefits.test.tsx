import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Benefits from "./Benefits";

describe("Benefits component", () => {
  // Benefits wihtout icons
  it("renders all benefits with their titles and texts", () => {
    render(<Benefits />);
    expect(screen.getByText("Use online")).toBeInTheDocument();
    expect(
      screen.getByText("Convert images to editable text")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Convert PDF files to editable Word documents")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Works on both iOS and Android devices")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Secure conversion with encryption and automatic deletion of uploaded files"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Completely free to use without any hidden fees or limits"
      )
    ).toBeInTheDocument();
  });

  // Benefits with icons
  it("renders all benefits with their icons", () => {
    render(<Benefits />);
    expect(screen.getByTestId("use-online-icon")).toBeInTheDocument();
    expect(screen.getByTestId("img-to-txt-icon")).toBeInTheDocument();
    expect(screen.getByTestId("pdf-to-doc-icon")).toBeInTheDocument();
    expect(screen.getByTestId("ios-android-icon")).toBeInTheDocument();
    expect(screen.getByTestId("secure-conversion-icon")).toBeInTheDocument();
    expect(screen.getByTestId("free-tool-icon")).toBeInTheDocument();
  });
});
