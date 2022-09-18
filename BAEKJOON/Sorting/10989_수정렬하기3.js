// https://www.acmicpc.net/problem/10989
// JS는 메모리 초과로 인해 풀이 불가

const [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

arr.sort((a, b) => {
  return a - b;
});

console.log(arr.join("\n"));
