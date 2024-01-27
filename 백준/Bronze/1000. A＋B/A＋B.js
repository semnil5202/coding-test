const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim();

const numbers = input.split(' ').map(Number);

console.log(numbers.reduce((acc, cur) => acc + cur, 0));
