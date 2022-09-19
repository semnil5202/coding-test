// https://www.acmicpc.net/problem/1546

const [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const scores = arr[0].split(" ").map((i) => parseFloat(i, 10));
let maxValue = Math.max(...scores);
let avg = 0;

for (let i = 0; i < scores.length; i++) {
  avg += ((scores[i] / maxValue) * 100) / scores.length;
}

console.log(avg);
