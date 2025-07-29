import { caesarCipher } from "../src/caesarCipher.js";

describe('caesarCipher()', () => {
  test('returns an empty string when given an empty string', () => {
    expect(caesarCipher("", 3)).toBe("");
  });

  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 2)).toBe("zab");
  });

  test('shifts uppercase letters correctly', () => {
    expect(caesarCipher("ABC", 1)).toBe("BCD");
    expect(caesarCipher("XYZ", 2)).toBe("ZAB");
  });

  test('preserves non-alphabetic characters', () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  test('handles mixed case and punctuation', () => {
    expect(caesarCipher("JavaScript 101!", 4)).toBe("NezeWgvmtx 101!");
  });

  test('wraps correctly with large shift values', () => {
    expect(caesarCipher("abc", 52)).toBe("abc");
    expect(caesarCipher("xyz", 27)).toBe("yza");
  });

  test('handles negative shifts', () => {
    expect(caesarCipher("bcd", -1)).toBe("abc");
    expect(caesarCipher("a", -1)).toBe("z");
    expect(caesarCipher("A", -1)).toBe("Z");
  });

  test('does not modify numbers or symbols', () => {
    expect(caesarCipher("123!@#", 3)).toBe("123!@#");
  });
});
