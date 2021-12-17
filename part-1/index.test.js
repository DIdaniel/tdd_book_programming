const { sum, person, toggle, range } = require("./index");

//toBe;
describe("test index.js => sum", () => {
  it("sums 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// toEqual
// describe("test index.js => person", () => {
//   it("makes a person", () => {
//     expect(person("Patrick", 31)).toEqual({
//       name: "Patrick",
//       age: 31,
//     });
//   });
// });

// toBeTruthy, toBeFalsy
describe("test index.js => toggle ", () => {
  it("returns false", () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });
});

// toContain
describe("test index.js => range", () => {
  it("has 2", () => {
    expect(range(1, 3)).toContain(2);
  });
});

////////////// 이 외에도 다양한 Machers가 있다
/// 이후 npx jest --coverage를 해보면 수치적으로 볼 수 있다
