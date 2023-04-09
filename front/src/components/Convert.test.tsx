import React from "react";
import { render, screen } from "@testing-library/react";
import Convert from "./Convert";

describe("Convert component", () => {
  it("should render idle state", () => {
    render(<Convert />);
    const idleState = screen.getByText(/convert component/i);
    expect(idleState).toBeInTheDocument();
  });

  it("should render progress state", () => {
    render(<Convert state="progress" />);
    const progressState = screen.getByText(/converting/i);
    expect(progressState).toBeInTheDocument();
  });

  it("should render complete state", () => {
    render(<Convert state="complete" />);
    const completeState = screen.getByText(/conversion complete/i);
    expect(completeState).toBeInTheDocument();
  });
});
