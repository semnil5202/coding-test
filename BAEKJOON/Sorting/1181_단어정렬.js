// https://www.acmicpc.net/problem/1181

let [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

function sortingFunc(arr) {
  arr.sort();
  arr.sort((x, y) => {
    return x.length - y.length;
  });
}

const arrCopied = (function (arr) {
  return arr.slice();
})(arr);

sortingFunc(arrCopied);
const set = new Set(arrCopied);
const uniqueArr = [...set];
console.log(uniqueArr.join("\n"));
