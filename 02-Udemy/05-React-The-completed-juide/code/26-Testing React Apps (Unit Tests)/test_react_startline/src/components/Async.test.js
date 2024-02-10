import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async componetn", () => {
  test("renders posts if request succeeds", async () => {
    // Mock the fetch function
    global.fetch = jest.fn();
    global.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    // Render the Async component
    render(<Async />);

    // Wait for the list items to appear
    const listItemElements = await screen.findAllByRole("listitem");

    // Assert that list items are rendered
    expect(listItemElements).not.toHaveLength(0);
  });
});
