// https://www.acmicpc.net/problem/2742

const [n] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const num = +n;
let ans = "";

for (let i = num; i > 0; i--) {
  ans += i + "\n";
}

console.log(ans);
