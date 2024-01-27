// https://www.acmicpc.net/problem/2941

const inputs = require('fs').readFileSync('./INPUT.txt').toString().trim();
let count = 0;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === 'c' && inputs[i + 1] === '=') {
    count++;
    i++;
  } else if (inputs[i] === 'c' && inputs[i + 1] === '-') {
    count++;
    i++;
  } else if (inputs[i] === 'd' && inputs[i + 1] === 'z' && inputs[i + 2] === '=') {
    count++;
    i += 2;
  } else if (inputs[i] === 'd' && inputs[i + 1] === '-') {
    count++;
    i++;
  } else if (inputs[i] === 'l' && inputs[i + 1] === 'j') {
    count++;
    i++;
  } else if (inputs[i] === 'n' && inputs[i + 1] === 'j') {
    count++;
    i++;
  } else if (inputs[i] === 's' && inputs[i + 1] === '=') {
    count++;
    i++;
  } else if (inputs[i] === 'z' && inputs[i + 1] === '=') {
    count++;
    i++;
  } else count++;
}

console.log(count);
