// https://www.acmicpc.net/problem/13305

const [N, KM, prices] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim()
  .split('\n');

const distances = KM.split(' ').map((el) => BigInt(el));
const cities = prices.split(' ').map((el) => BigInt(el));
cities.pop();

let lowPrice = cities[0];
let answer = 0n;

for (let i = 0; i < cities.length; i++) {
  answer += lowPrice * distances[i];
  if (lowPrice > cities[i + 1]) lowPrice = cities[i + 1];
}

console.log(String(answer));
