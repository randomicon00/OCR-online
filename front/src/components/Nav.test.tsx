import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav", () => {
  it("renders a navigation menu with links", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    const ocrLink = screen.getByRole("link", { name: "OCR" });
    const contactLink = screen.getByRole("link", { name: "Contact" });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(ocrLink).toHaveAttribute("href", "/ocr");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
