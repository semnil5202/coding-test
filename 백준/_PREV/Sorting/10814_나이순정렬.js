// https://www.acmicpc.net/problem/10814

let [n, ...a] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const arr = a.map((i) => i.split(" "));
let res = "";

arr
  .sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10))
  .forEach((arr) => (res += `${arr[0]} ${arr[1]}\n`));

console.log(res);
