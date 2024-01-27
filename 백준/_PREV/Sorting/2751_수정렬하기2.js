//https://www.acmicpc.net/problem/2751

const input = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

function deepCopy(arr) {
  const _array = arr.slice(1);
  return _array;
}

function useSortFunc(arr) {
  arr.sort((x, y) => x - y);
}

const inputCopied = deepCopy(input);
useSortFunc(inputCopied, 0, inputCopied.length - 1);
console.log(inputCopied.join("\n"));
