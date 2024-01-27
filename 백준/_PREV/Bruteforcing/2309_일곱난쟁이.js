// https://www.acmicpc.net/problem/2309

let [...input] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((i) => Number(i));

const sum = arr.reduce((pre, cur) => pre + cur, 0);
let falseDwarf1 = 0;
let falseDwarf2 = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    let tempSum = sum;

    if (tempSum - arr[i] - arr[j] === 100) {
      falseDwarf1 = arr[i];
      falseDwarf2 = arr[j];

      arr.splice(i, 1);
      arr.splice(j - 1, 1);
      break;
    }
  }
  if (falseDwarf1 > 0) break;
}

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
