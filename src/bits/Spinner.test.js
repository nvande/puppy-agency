import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Spinner />);
    const spinner = getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
