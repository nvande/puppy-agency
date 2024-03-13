import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import SlideshowControls from "./SlideshowControls";

describe("SlideshowControls", () => {
  const mockChangeSlide = jest.fn();

  beforeEach(() => {
    mockChangeSlide.mockClear();
  });

  it("renders without crashing", () => {
    render(
      <SlideshowControls
        changeSlide={mockChangeSlide}
        leftDisabled={false}
        rightDisabled={false}
      />
    );
  });

  it("calls changeSlide with -1 when the left button is clicked", () => {
    render(
      <SlideshowControls
        changeSlide={mockChangeSlide}
        leftDisabled={false}
        rightDisabled={false}
      />
    );
    fireEvent.click(screen.getByTestId("left-button"));
    expect(mockChangeSlide).toHaveBeenCalledWith(-1);
  });

  it("calls changeSlide with 1 when the right button is clicked", () => {
    render(
      <SlideshowControls
        changeSlide={mockChangeSlide}
        leftDisabled={false}
        rightDisabled={false}
      />
    );
    fireEvent.click(screen.getByTestId("right-button"));
    expect(mockChangeSlide).toHaveBeenCalledWith(1);
  });

  it("disables the left button when leftDisabled is true", () => {
    render(
      <SlideshowControls
        changeSlide={mockChangeSlide}
        leftDisabled={true}
        rightDisabled={false}
      />
    );
    expect(screen.getByTestId("left-button")).toBeDisabled();
  });

  it("disables the right button when rightDisabled is true", () => {
    render(
      <SlideshowControls
        changeSlide={mockChangeSlide}
        leftDisabled={false}
        rightDisabled={true}
      />
    );
    expect(screen.getByTestId("right-button")).toBeDisabled();
  });
});
