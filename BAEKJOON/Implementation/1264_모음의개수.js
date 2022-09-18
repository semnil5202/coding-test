// https://www.acmicpc.net/problem/1264

const [...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "#") {
    break;
  }
  for (let j = 0; j < arr[i].length; j++) {
    if (
      arr[i][j] === "a" ||
      arr[i][j] === "A" ||
      arr[i][j] === "e" ||
      arr[i][j] === "E" ||
      arr[i][j] === "i" ||
      arr[i][j] === "I" ||
      arr[i][j] === "o" ||
      arr[i][j] === "O" ||
      arr[i][j] === "u" ||
      arr[i][j] === "U"
    ) {
      count++;
    }
  }
  console.log(count);
  count = 0;
}
