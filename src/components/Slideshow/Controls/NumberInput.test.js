import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "./NumberInput";

describe("NumberInput", () => {
  const handleChangeMock = jest.fn();

  it("renders without crashing", () => {
    render(<NumberInput value="5" handleChange={handleChangeMock} />);
    expect(
      screen.getByLabelText(/Dogs to fetch 🦴 \(1-10\)/i)
    ).toBeInTheDocument();
  });

  it("has the correct value", () => {
    render(<NumberInput value="5" handleChange={handleChangeMock} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.value).toBe("5");
  });

  it("calls handleChange on value change", () => {
    render(<NumberInput value="5" handleChange={handleChangeMock} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "7" } });
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
