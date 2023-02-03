// https://www.acmicpc.net/problem/10610

const N = require('fs')
  .readFileSync('./INPUT.txt')
  .toString()
  .trim()
  .split('')
  .map((el) => Number(el));

if (!N.includes(0) || N.reduce((acc, cur) => acc + cur, 0) % 3 !== 0) console.log(-1);
else console.log(N.sort((a, b) => b - a).join(''));
