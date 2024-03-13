import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Logo from "./Logo";
import logo from "../logo.png";

describe("Logo", () => {
  it("renders without crashing", () => {
    render(<Logo sitename="TestSite" />);
    expect(screen.getByTestId("logo-img")).toHaveAttribute("src", logo);
    expect(screen.getByTestId("site-name")).toBeInTheDocument();
  });

  it("displays the correct site name", () => {
    const testSiteName = "AnotherTestSite";
    render(<Logo sitename={testSiteName} />);
    expect(screen.getByText(testSiteName)).toBeInTheDocument();
  });
});
