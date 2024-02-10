import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    // ...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders it's good here by default", () => {
    render(<Greeting />);
    const noClickBtn = screen.getByText("It's good here", { exact: false });
    expect(noClickBtn).toBeInTheDocument();
  });
  test("renders 'Changed!' if the button clicked", () => {
    render(<Greeting />);

    // Get the button element by its role
    const buttonElement = screen.getByRole("button");

    // Simulate a click event on the button
    // userEvent.click(buttonElement);

    // Check if the text "Changed!" is rendered after the button click
    const outPutButton = screen.getByText("It's good here", { exact: false });

    // Assert that the text "Changed!" is in the document
    expect(outPutButton).toBeInTheDocument();
  });
  test("renders does not render good here if the button click", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    // userEvent.click(buttonElement);
    const outPut = screen.getByText("Hello World!", { exact: false });
    expect(outPut).toBeInTheDocument();
  });
}); // for groupe test in one interval
