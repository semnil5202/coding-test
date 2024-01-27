// https://www.acmicpc.net/problem/14425

const [N, ...inputs] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const [setNum, wordNum] = N.split(' ').map(Number);
const [sets, words] = [[], []];
let count = 0;

for (let i = 0; i < inputs.length; i++) {
  if (i < setNum) sets.push(inputs[i]);
  else words.push(inputs[i]);
}

const setData = new Set(sets);

for (let i = 0; i < words.length; i++) {
  if (setData.has(words[i])) count++;
}

console.log(count);
