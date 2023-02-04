// https://www.acmicpc.net/problem/11656

const input = require('fs').readFileSync('./INPUT.txt').toString().trim();
const answers = [input];

for (let i = 1; i < input.length; i++) {
  answers.push(input.slice(i, input.length));
}

console.log(answers.sort().join('\n'));
