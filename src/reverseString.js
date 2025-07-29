const reverseString = (str) => {
  if (typeof str !== 'string') return null;
  if (str.length === 0) return "";

  return str.split('').reverse().join('');
};

export default reverseString;
