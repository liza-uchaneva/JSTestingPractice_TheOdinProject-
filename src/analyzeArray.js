export function analyzeArray(array) {
    return {
      average: calculateAverage(array),
      length: array.length,
      min: Math.min.apply(Math, array),
      max: Math.max.apply(Math, array)
    }
}
    
function calculateAverage(array) {
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    return sum / array.length;
}