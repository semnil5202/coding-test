// https://www.acmicpc.net/problem/11650

const [n, ...a] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let res = "";
const arr = a.map((i) => {
  const point = i.split(" ");
  return point;
});

arr
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach((arr) => {
    res += `${arr[0]} ${arr[1]}\n`;
  });

console.log(res);
