import HabitPresenter from "./habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];

  let presenter;

  // for Mock function
  let update;

  // 초기화
  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    // Mock function
    update = jest.fn();
  });

  it("habits으로 초기화 한다", () => {
    expect(presenter.getHabtis()).toEqual(habits);
  });

  it("habit count를 증가하고, update 콜백을 호출한다", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabtis()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it("max habits 리미트가 100 초과가 되면 에러를 던진다", () => {
    presenter.add("Eating", update);
    expect(() => {
      presenter.add("Eating", update);
    }).toThrow(`습관의 갯수는 3 이상이 될 수 없습니다!`);
  });

  it("habit count를 감소하고, update 콜백을 호출한다", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabtis()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("감소 시, 0 이하로 내려가지 않는다", () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);

    expect(presenter.getHabtis()[0].count).toBe(0);
  });

  it("삭제하고, update 콜백 호출", () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabtis().length).toBe(1);
    expect(presenter.getHabtis()[0].name).toBe("Running");
    checkUpdateIsCalled();
  });

  it("추가하고, update 콜백 호출", () => {
    presenter.add("Eating", update);

    expect(presenter.getHabtis().length).toBe(3);
    expect(presenter.getHabtis()[2].name).toBe("Eating");
    expect(presenter.getHabtis()[2].count).toBe(0);

    checkUpdateIsCalled();
  });

  describe("reset", () => {
    it("모든 카운트 0으로 reset", () => {
      presenter.reset(update);

      expect(presenter.getHabtis()[0].count).toBe(0);
      expect(presenter.getHabtis()[1].count).toBe(0);

      checkUpdateIsCalled();
    });

    it("카운트가 0이면, 새로운 object를 생성하지 않는다", () => {
      const habits = presenter.getHabtis();
      presenter.reset(update);
      const updatedHabits = presenter.getHabtis();

      expect(updatedHabits[1]).toBe(habits[1]);
    });
  });

  // 반복적인 것을 함수에 넣고 돌리기
  function checkUpdateIsCalled() {
    // 업데이트 콜백 호출 횟수
    expect(update).toHaveBeenCalledTimes(1);
    // callback한 업데이트 콜백이 동일한지
    expect(update).toHaveBeenCalledWith(presenter.getHabtis());
  }
});
