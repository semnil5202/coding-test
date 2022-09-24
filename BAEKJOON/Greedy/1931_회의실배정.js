// https://www.acmicpc.net/problem/1931

const [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

console.log(arr);
