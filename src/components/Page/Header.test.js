import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("../../bits/Logo", () => {
  return {
    __esModule: true,
    default: ({ sitename }) => <div data-testid="logo-bit">{sitename}</div>,
  };
});

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header sitename="TestSite" />);
  });

  it("includes the Logo component with the correct sitename", () => {
    const testSitename = "TestSite";
    render(<Header sitename={testSitename} />);
    const logo = screen.getByTestId("logo-bit");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent(testSitename);
  });
});
