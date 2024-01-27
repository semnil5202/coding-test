const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim();

const numbers = input.split(' ').map(Number);

console.log(numbers[0] - numbers[1]);
