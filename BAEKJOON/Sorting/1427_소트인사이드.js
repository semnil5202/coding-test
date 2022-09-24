const input = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("");

input.sort((a, b) => b - a);

console.log(input.join(""));
