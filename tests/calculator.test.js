import calculator from "../src/calculator.js";

describe('calculator', () => {
  describe('add()', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('throws error for invalid operands', () => {
      expect(() => calculator.add("2", 3)).toThrow('Invalid operands');
      expect(() => calculator.add(2, NaN)).toThrow('Invalid operands');
    });
  });

  describe('subtract()', () => {
    test('subtracts two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('throws error for invalid operands', () => {
      expect(() => calculator.subtract(null, 2)).toThrow('Invalid operands');
      expect(() => calculator.subtract(5, undefined)).toThrow('Invalid operands');
    });
  });

  describe('multiply()', () => {
    test('multiplies two numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(calculator.multiply(7, 0)).toBe(0);
    });

    test('throws error for invalid operands', () => {
      expect(() => calculator.multiply({}, 1)).toThrow('Invalid operands');
      expect(() => calculator.multiply(1, NaN)).toThrow('Invalid operands');
    });
  });

  describe('divide()', () => {
    test('divides two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('returns decimal if not divisible evenly', () => {
      expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });

    test('throws error for invalid operands', () => {
      expect(() => calculator.divide("10", 2)).toThrow('Invalid operands');
      expect(() => calculator.divide(undefined, 1)).toThrow('Invalid operands');
    });
  });
});
