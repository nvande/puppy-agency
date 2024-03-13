import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  act,
  screen,
  fireEvent,
} from "@testing-library/react";
import Slideshow from "./Slideshow";
import { getDogs } from "../../utility/dogapi";
import useDebounce from "../../utility/useDebounce";

jest.mock("../../utility/dogapi");
jest.mock("../../utility/useDebounce");
jest.mock("../Slides/Slide", () => ({ title, imageUrl }) => (
  <div>
    {title} {imageUrl}
  </div>
));
jest.mock("./Controls/SlideshowControls", () => () => (
  <div>SlideshowControls</div>
));
jest.mock("../../bits/Spinner", () => () => <div>Spinner</div>);
jest.mock("../../bits/Error", () => ({ message }) => (
  <div>Error: {message}</div>
));

describe("Slideshow", () => {
  const mockPosts = [
    {
      title: "Lookey lookey cute dogey",
      imageUrl: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
    },
    {
      title: "Shibas <3",
      imageUrl: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
    },
  ];

  beforeEach(() => {
    getDogs.mockResolvedValue(mockPosts);
    useDebounce.mockImplementation((value) => value);
  });

  it("fetches dog posts and renders first slide", async () => {
    await act(async () => {
      render(<Slideshow />);
    });

    expect(getDogs).toHaveBeenCalledWith(10);
    expect(
      screen.getByText(`${mockPosts[0].title} ${mockPosts[0].imageUrl}`)
    ).toBeInTheDocument();
    expect(screen.getByText("SlideshowControls")).toBeInTheDocument();
    expect(screen.queryByText("Spinner")).toBeNull();
  });

  it("shows loading spinner while loading", async () => {
    let resolveFunction;
    const promise = new Promise((resolve) => {
      resolveFunction = resolve;
    });
    getDogs.mockReturnValueOnce(promise);

    render(<Slideshow />);
    expect(screen.getByText("Spinner")).toBeInTheDocument();

    await act(async () => {
      resolveFunction(mockPosts);
    });
  });

  it("displays an error message when fetching fails", async () => {
    const errorMessage = "Something went wrong fetching the data.";
    getDogs.mockRejectedValueOnce(new Error(errorMessage));

    await act(async () => {
      render(<Slideshow />);
    });

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it("updates the number of posts to fetch based on user input", async () => {
    const userEnteredValue = "5";

    await act(async () => {
      render(<Slideshow />);
    });

    await act(async () => {
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: userEnteredValue },
      });
    });

    expect(getDogs).toHaveBeenCalledWith(parseInt(userEnteredValue));
  });
});
