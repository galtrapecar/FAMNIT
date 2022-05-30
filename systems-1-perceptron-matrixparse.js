let output = '';

// Make so every number in matrix is positive.
const FRAME_OF_REFERENCE = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    let number = matrix[i][j] = matrix[i][j] + FRAME_OF_REFERENCE;
    let hex = number.toString(16).toUpperCase();
    if (hex.length === 3) {
      output = `${output}\\x0${hex.split('')[0]}\\x${hex.split('')[1]}${hex.split('')[2]}`
    }
    if (hex.length === 2) {
      output = `${output}\\x00\\x${hex.split('')[0]}${hex.split('')[1]}`
    }
    if (hex.length === 5) {
      output = `${output}\\x00\\x0${hex.split('')[0]}`
    }
  } 
}

console.log(matrix);
console.log(output);
