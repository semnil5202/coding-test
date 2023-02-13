const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim();

const inputs = input.split('').map(Number);
let temp = inputs[0];
let count = 0;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] !== temp) {
    count++;
    temp = inputs[i];
  }
}

console.log(Math.ceil(count / 2));
