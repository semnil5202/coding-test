const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim();

const numbers = input.split('').map(Number);

const checkoutDuplicateNumber = (numberArr) => {
  const numbers = numberArr;
};
