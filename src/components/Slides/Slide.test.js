import Slide from "./Slide";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Slide", () => {
  describe("it renders the title and image", () => {
    var testTitle, testImageUrl;

    beforeEach(function () {
      testTitle = "Test Title";
      testImageUrl = "https://example.com/test-image.jpg";
    });

    it("renders the title", () => {
      render(<Slide title={testTitle} imageUrl={testImageUrl} />);

      const titleElement = screen.getByText(testTitle);
      expect(titleElement).toBeInTheDocument();
    });

    it("renders the image", () => {
      render(<Slide title={testTitle} imageUrl={testImageUrl} />);

      const imageElement = screen.getByRole("img", { name: testTitle });
      expect(imageElement).toHaveAttribute("src", testImageUrl);
      expect(imageElement).toHaveAttribute("alt", testTitle);
    });
  });
});
