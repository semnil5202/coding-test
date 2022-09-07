// https://www.acmicpc.net/problem/11047

let coinType = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

let coinSum = +coinType[1];
let count = 0;

for (let i = coinType.length - 1; i > 1; i--) {
  if ( coinSum % +coinType[i] !== coinSum ) {
    let max = +coinType[i];
    count = count + parseInt(coinSum / max);
    coinSum = parseInt(coinSum % max);
    if ( coinSum === 0 ) { break; }
  }
}

console.log(count);