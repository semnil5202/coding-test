// https://www.acmicpc.net/problem/1920

const [n, arrN, m, arrM] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const standard = arrN.split(" ");
const comparison = arrM.split(" ");
let str = "";

for (let i = 0; i < comparison.length; i++) {
  let count = 0;
  for (let j = 0; j < standard.length; j++) {
    if (+comparison[i] === +standard[j]) {
      count++;
    }
  }
  str += count + "\n";
}

console.log(str);
