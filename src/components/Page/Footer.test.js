import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer footer="Test Footer" attributes="Test Attributes" />);
  });

  it("displays the correct footer text", () => {
    const testFooter = "Test Footer";
    render(<Footer footer={testFooter} attributes="Test Attributes" />);
    expect(screen.getByText(testFooter)).toBeInTheDocument();
  });

  it("displays the correct attributes text", () => {
    const testAttributes = "Test Attributes";
    render(<Footer footer="Test Footer" attributes={testAttributes} />);
    expect(screen.getByText(testAttributes)).toBeInTheDocument();
  });
});
