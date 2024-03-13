import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SlideshowPage from "./SlideshowPage";

jest.mock("../components/Page/Page", () => {
  return {
    __esModule: true,
    default: ({ children }) => (
      <div data-testid="page-component">{children}</div>
    ),
  };
});

jest.mock("../components/Slideshow/Slideshow", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="slideshow-component"></div>,
  };
});

describe("SlideshowPage", () => {
  it("renders without crashing", () => {
    render(<SlideshowPage />);
  });

  it("includes Page and Slideshow", () => {
    const { getByTestId } = render(<SlideshowPage />);
    expect(getByTestId("page-component")).toBeInTheDocument();
    expect(getByTestId("slideshow-component")).toBeInTheDocument();
  });
});
