const { sum, person } = require("./index");

// toBe
describe("test index.js file => sum", () => {
  it("sums 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// toEqual
describe("test index.js file => person", () => {
  it("makes a person", () => {
    expect(person("Patrick", 31)).toEqual({
      name: "Patrick",
      age: 31,
    });
  });
});
