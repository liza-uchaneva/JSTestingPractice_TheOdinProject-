export function caesarCipher(string, shiftFactor) {
  const aCharCode = 'a'.charCodeAt(0);
  const ACharCode = 'A'.charCodeAt(0);
  const alphabetLength = 26;

  return string.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      const code = ((char.charCodeAt(0) - aCharCode + shiftFactor) % alphabetLength + alphabetLength) % alphabetLength;
      return String.fromCharCode(aCharCode + code);
    } 
    if (char >= 'A' && char <= 'Z') {
      const code = ((char.charCodeAt(0) - ACharCode + shiftFactor) % alphabetLength + alphabetLength) % alphabetLength;
      return String.fromCharCode(ACharCode + code);
    }
    return char;
  }).join('');
}
export default caesarCipher;