// https://www.acmicpc.net/problem/1920

const [n, arrN, m, arrM] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let res = "";
const standard = arrN
  .split(" ")
  .map((i) => Number(i))
  .sort((a, b) => a - b);
const comparison = arrM.split(" ").map((i) => Number(i));

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid; //
    else if (arr[mid] > target) end = mid - 1; //
    else start = mid + 1;
  }
  return -1;
}

for (let i = 0; i < comparison.length; i++) {
  let result = binarySearch(standard, comparison[i], 0, standard.length - 1);

  result !== -1 ? (res += "1\n") : (res += "0\n");
}

console.log(res);
