// https://www.acmicpc.net/problem/10817

let input = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split(" ");

function deepCopy(arr) {
  const arrCopyed = arr.slice();
  return arrCopyed;
}

function useSortFunc(arr) {
  arr.sort((x, y) => x - y);
}

const inputDeepCopied = deepCopy(input);
useSortFunc(inputDeepCopied);

console.log(inputDeepCopied[1]);
