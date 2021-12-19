import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import renderer from "react-test-renderer";

describe("HabitAddForm", () => {
  it("renders", () => {
    // 스냅샷 테스트 실행
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Form Submit", () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    });

    it("버튼 클릭되었고, 유효한 Habit이 입력되어있다면 calls가 onadd 되기", () => {
      // input에 원하는 습관의 이름을 타이핑 한 다음, add 클릭하면 onAdd가 input에 입력된 이름과 함께 호출되어야함
      // fireEvent를 사용해도 되지만, fireEvent는 버튼에 초점을 안맞추고, focus가 되지 않는다
      // userEvent로 하는 클릭은 실제 클릭 같은 효과를 준다
      userEvent.type(input, "New Habit");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it("버튼이 클릭 되었는데, habit이 들어가 있지 않다면 onAdd를 호출하지 않는다", () => {
      userEvent.type(input, "");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
