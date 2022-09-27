// https://www.acmicpc.net/problem/1152

const arr = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split(" ");

console.log(arr[0] === "" ? 0 : arr.length);
