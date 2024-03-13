import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("ErrorBit", () => {
  it("renders the error message when provided", () => {
    const testMessage = "Error occurred!";
    render(<Error message={testMessage} />);

    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });

  it("returns null when the message is not provided", () => {
    const { container } = render(<Error message="" />);
    expect(container.firstChild).toBeNull();
  });
});
