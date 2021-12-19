/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("컴포넌트가 올바르게 렌더링 되고 있다", () => {
    const { container } = render(<App />);

    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();

    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );

    expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      "Edit src/App.tsx and save to reload"
    );

    expect(container).toMatchSnapshot();
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
