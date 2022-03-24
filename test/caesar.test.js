// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("if the shift value is 0, less than -25 or greater than 25, should return false", () => {
    const input = "word";
    const shift = 36;
    const encode = true;
    const expected = false;
    const actual = caesarModule.caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("if given a string, a number and encode is true, should return a coded message", () => {
  const input = "code";
  const shift = 3;
  const encode = true;
  const expected = "frgh";
  const actual = caesarModule.caesar(input, shift, encode);
  expect(actual).to.equal(expected);
  });
  it("if given a string with special characters, should return a codded message without changing the special characters", () => {
  const input = "Code Code!";
  const shift = 3;
  const encode = true;
  const expected = "frgh frgh!";
  const actual = caesarModule.caesar(input, shift, encode);
  expect(actual).to.equal(expected); 
  });
  it("if encode is false then the function should decode the message", () => {
    const input = "frgh frgh!";
    const shift = 3;
    const encode = false;
    const expected = "code code!";
    const actual = caesarModule.caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
});
