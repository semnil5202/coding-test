// https://www.acmicpc.net/problem/1931
// 정렬 완료 -> 어떤 기준으로 배치할 지 의문..

let [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let twoDimenArr = [];
let minArr = [];

for (let i = 0; i < arr.length; i++) {
  twoDimenArr.push(arr[i].split(" "));
}

for (let i = 0; i < arr.length - 1; i++) {
  if (twoDimenArr[i][1] > twoDimenArr[i + 1][1]) {
    minArr = twoDimenArr[i + 1];
    console.log(minArr, twoDimenArr[i][1]);
  }
}

// twoDimenArr.sort((a, b) => {
//   return a[0] - b[0];
// });

console.log(twoDimenArr.join("\n"));
