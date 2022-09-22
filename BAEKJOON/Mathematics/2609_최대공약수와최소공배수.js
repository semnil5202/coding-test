// https://www.acmicpc.net/problem/2609

const [...input] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split(" ");

let [a, b] = input;

function GCD(a, b) {
  let c = 0;
  while (a % b) {
    c = a % b;
    a = b;
    b = c;
  }
  return b;
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

console.log(GCD(a, b));
console.log(LCM(a, b));
