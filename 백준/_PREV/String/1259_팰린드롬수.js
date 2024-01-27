// https://www.acmicpc.net/problem/1259

const arr = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "0") {
    break;
  }

  let compareArr = arr[i].split("").reverse().join("");
  arr[i].trim() === compareArr.trim() ? console.log("yes") : console.log("no");
}
