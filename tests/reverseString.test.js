import reverseString from "../src/reverseString.js";

describe('reverseString()', () => {
  test('returns an empty string when given an empty string', () => {
    expect(reverseString("")).toBe("");
  });

  test('reverses a simple word', () => {
    expect(reverseString("cat")).toBe("tac");
  });

  test('returns the same string if its length is 1', () => {
    expect(reverseString("c")).toBe("c");
  });

  test('reverses a string with mixed characters', () => {
    expect(reverseString("123!abc")).toBe("cba!321");
  });

  test('reverses a sentence with spaces', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test('returns null if input is null', () => {
    expect(reverseString(null)).toBe(null);
  });
});
