// https://www.acmicpc.net/problem/8958

const [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < arr.length; i++) {
  let part = 1;
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "O") {
      sum += part;
      part++;
    } else {
      part = 1;
    }
  }
  console.log(sum);
}
