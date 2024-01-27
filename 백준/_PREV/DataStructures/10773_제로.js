// https://www.acmicpc.net/problem/10773

const [n, ...inputs] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');

const number = Number(n);
const moneys = inputs.map((el) => Number(el));
const answers = [];

for (let i = 0; i < number; i++) {
  if (moneys[i] === 0) answers.pop();
  else answers.push(moneys[i]);
}

console.log(answers.reduce((acc, cur) => acc + cur, 0));
