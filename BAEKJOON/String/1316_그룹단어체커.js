// https://www.acmicpc.net/problem/1316

const [n, ...inputs] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
let count = 0;
let trigger = true;

for (let i = 0; i < inputs.length; i++) {
  let strings = [];
  trigger = true;
  for (let j = 0; j < inputs[i].length; j++) {
    if (!strings.includes(inputs[i][j])) strings.push(inputs[i][j]);
    else {
      if (inputs[i][j] !== inputs[i][j - 1]) trigger = false;
    }
  }
  if (trigger) count++;
}

console.log(count);
