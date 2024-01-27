// https://www.acmicpc.net/problem/1541

const inputs = require('fs').readFileSync('./INPUT.txt').toString().trim();

const answer = inputs
  .split('-')
  .map((el) => el.split('+').reduce((acc, cur) => Number(acc) + Number(cur), 0));

console.log(answer.reduce((acc, cur) => acc - cur));
