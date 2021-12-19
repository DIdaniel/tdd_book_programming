// import { render } from "@testing-library/react";
// import App from "./App";

// describe("App", () => {
//   it("renders tasks", () => {
//     const { container } = render(<App />);
//   });
//   expect(container).toHaveTextContent("Mehh");
// });

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Mehh");
  expect(linkElement).toBeInTheDocument();
});
