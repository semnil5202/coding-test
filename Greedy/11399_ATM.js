// https://www.acmicpc.net/problem/11399

let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const peopleNum = +n;
const personTime = arr.sort((x, y) => x - y);
let count = 0,
  sum = 0;

for (let i = 0; i < peopleNum; i++) {
  count += +personTime[i];
  sum += count;
}

console.log(sum);
