// https://www.acmicpc.net/problem/2217

const inputs = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
inputs.shift();
const roafs = inputs.map((el) => Number(el)).sort((a, b) => b - a);
let max = roafs[0];

for (let i = 1; i < roafs.length; i++) {
  let temp = roafs[i];
  if (temp * (i + 1) > max) max = temp * (i + 1);
}

console.log(max);
