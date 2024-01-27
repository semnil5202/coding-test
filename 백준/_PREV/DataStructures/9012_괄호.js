// https://www.acmicpc.net/problem/9012

const [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < arr.length; i++) {
  let countLeft = 0;
  let countRight = 0;
  let countException = 0;
  for (let j = 0; j < arr[i].trim().length; j++) {
    arr[i][j] === "(" ? countLeft++ : countRight++;
    if (arr[i][j] === ")" && countLeft < countRight) {
      countException++;
    }
  }
  countLeft === countRight && countException === 0
    ? console.log("YES")
    : console.log("NO");
}
