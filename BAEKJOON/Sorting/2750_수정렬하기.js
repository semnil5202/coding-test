//https://www.acmicpc.net/problem/2750

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

function oneValuePerLine(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const inputCopied = deepCopy(input);
useSortFunc(inputCopied);
oneValuePerLine(inputCopied);
