// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
  it("translates the letters to the correct numbers", () => {
    const input = "message";
    const encode = true;
    const alphabet = "plmoknijbuhvygctfxrdzeswaq"
    const expected = "ykrrpik";
    const actual = substitutionModule.substitution(input, alphabet, encode);
    expect(actual).to.eql(expected);
  });
  it("Should keep spaces", () => {
  const input = "my message";
  const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
  const encode = true;
  const expected = "yp ysii.rs";
  const actual = substitutionModule.substitution(input, alphabet, encode);
  expect(actual).to.equal(expected);
  });
  it("Should work with unique characters", () => {
  const input = "message";
  const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
  const encode = true;
  const expected = "ysii.rs";
  const actual = substitutionModule.substitution(input, alphabet, encode);
  expect(actual).to.equal(expected); 
  });
  it("if encode is false then the function should decode the message", () => {
    const input = "ykrrpik";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq"
    const encode = false;
    const expected = "message";
    const actual = substitutionModule.substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
});