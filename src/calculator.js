const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);

const calculator = {
  add: (a, b) => {
    if (!isValidNumber(a) || !isValidNumber(b)) throw new Error('Invalid operands');
    return a + b;
  },
  subtract: (a, b) => {
    if (!isValidNumber(a) || !isValidNumber(b)) throw new Error('Invalid operands');
    return a - b;
  },
  divide: (a, b) => {
    if (!isValidNumber(a) || !isValidNumber(b)) throw new Error('Invalid operands');
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
  multiply: (a, b) => {
    if (!isValidNumber(a) || !isValidNumber(b)) throw new Error('Invalid operands');
    return a * b;
  },
};

export default calculator;
