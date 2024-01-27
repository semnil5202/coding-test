// https://www.acmicpc.net/problem/2839

let input = require("fs").readFileSync("/dev/stdin").toString();

let weight = +input;
let count = 0;

while (true) {
  if (weight % 5 === 0) {
    count += weight / 5;
    break;
  } else {
    if (weight < 0) {
      count = -1;
      break;
    }
    weight -= 3;
    count++;
  }
}

console.log(count);
