// https://www.acmicpc.net/problem/2292

let input = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let level = 1;
let count = 1;

while (count < input) {
  count += 6 * level;
  level++;
}

console.log(level);
