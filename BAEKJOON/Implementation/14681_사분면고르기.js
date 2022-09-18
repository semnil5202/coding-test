// https://www.acmicpc.net/problem/14681

const [n, m] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

if (n > 0 && m > 0) {
  console.log(1);
} else if (n < 0 && m > 0) {
  console.log(2);
} else if (n < 0 && m < 0) {
  console.log(3);
} else {
  console.log(4);
}
