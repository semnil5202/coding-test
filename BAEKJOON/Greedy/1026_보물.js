// https://www.acmicpc.net/problem/1026

const [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const arrA = arr.shift().split(" ");
const arrB = arr.shift().split(" ");
let sum = 0;

arrA.sort((a, b) => {
  return a - b;
});

arrB.sort((a, b) => {
  return b - a;
});

for (let i = 0; i < n; i++) {
  sum += arrA[i] * arrB[i];
}

console.log(sum);
