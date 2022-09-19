// https://www.acmicpc.net/problem/1110

const n = Number(require("fs").readFileSync("./INPUT.txt").toString().trim());

const arr = [];
let newOne = 0;
let count = 0;

if (n % 10 === n) {
  arr.push(0, n);
} else {
  arr.push(parseInt(n / 10), n % 10);
}

do {
  count++;
  let temp = (arr[0] + arr[1]) % 10;
  newOne = arr[1];

  arr.splice(0, 2);
  arr.push(newOne, temp);
} while (!(n === arr[0] * 10 + arr[1]));

console.log(count);
