import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Habit from "../habit";

describe("Habit component", () => {
  const habit = { name: "Habit", count: 4 };
  let HabitComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();

    HabitComponent = (
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("BUtton CLick", () => {
    beforeEach(() => {
      render(HabitComponent);
    });

    it("increment 버튼 클릭하면 onIncrement를 call 한다", () => {
      const button = screen.getByTitle("increase");
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });

    it("decrement 버튼 클릭하면 onDecrement를 call 한다", () => {
      const button = screen.getByTitle("decrease");
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });
  });
});
