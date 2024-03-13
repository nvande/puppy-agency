import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./Page";

jest.mock("./Header", () => {
  return {
    __esModule: true,
    default: () => <header>Header Content</header>,
  };
});

jest.mock("./Footer", () => {
  return {
    __esModule: true,
    default: () => <footer>Footer Content</footer>,
  };
});

describe("Page", () => {
  const testChildren = <div>Test content</div>;

  it("renders without crashing", () => {
    render(<Page children={testChildren} />);
  });

  it("includes Header component", () => {
    render(<Page children={testChildren} />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it("includes Footer component", () => {
    render(<Page children={testChildren} />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<Page children={testChildren} />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
