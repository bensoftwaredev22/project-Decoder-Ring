// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
  it("translates the letters to the correct numbers", () => {
    const input = "word";
    const encode = true;
    const expected = "25432441";
    const actual = polybiusModule.polybius(input, encode);
    expect(actual).to.eql(expected);
  });
  it("Should keep spaces", () => {
  const input = "code code";
  const encode = true;
  const expected = "31434151 31434151";
  const actual = polybiusModule.polybius(input, encode);
  expect(actual).to.equal(expected);
  });
  it("if the string has the letter i or j should return 42 for both", () => {
  const input = "juice";
  const encode = true;
  const expected = "4254423151";
  const actual = polybiusModule.polybius(input, encode);
  expect(actual).to.equal(expected); 
  });
  it("if encode is false then the function should decode the message", () => {
    const input = "42543444423151";
    const encode = false;
    const expected = "(i/j)ust(i/j)ce";
    const actual = polybiusModule.polybius(input, encode);
    expect(actual).to.equal(expected);
  });
});

