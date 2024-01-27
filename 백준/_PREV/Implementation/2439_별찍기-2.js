// https://www.acmicpc.net/problem/2439

const [n] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let num = +n;
let starCount = new Array(num).fill(" ");

for (let i = num; i > 0; i--) {
  starCount[i - 1] = "*";

  console.log(starCount.join(""));
}
