import capitalize from "../src/capitalize.js";

describe('capitalize()', () => {
  test('returns an empty string when given an empty string', () => {
    expect(capitalize("")).toBe("");
  });

  test('capitalizes the first letter of a lowercase word', () => {
    expect(capitalize("cat")).toBe("Cat");
  });

  test('returns the same string if the first letter is already capitalized', () => {
    expect(capitalize("Cat")).toBe("Cat");
  });

  test('capitalizes a single lowercase character', () => {
    expect(capitalize("c")).toBe("C");
  });

  test('returns null if input is null', () => {
    expect(capitalize(null)).toBe(null);
  });

  test('does not change string if it starts with a non-letter character', () => {
    expect(capitalize("1cat")).toBe("1cat");
    expect(capitalize("!hello")).toBe("!hello");
  });

  test('only capitalizes the first character, leaves rest unchanged', () => {
    expect(capitalize("cAT")).toBe("CAT");
  });
});
