// https://www.acmicpc.net/problem/2309

let a = require("fs").readFileSync("./INPUT.txt").toString().trim().split("\n");

const Total = a.reduce((r, v) => {
  return r + v;
}, 0);
let answer = "";
for (let i = 0; i < 9; i++) {
  if (answer.length > 0) break;
  for (let j = i + 1; j < 9; j++) {
    if (Total - a[i] - a[j] == 100) {
      const truth = a.filter((_, k) => k != i && k != j).sort((a, b) => a - b);
      answer = truth.join("\n");
      console.log(answer);
      break;
    }
  }
}
