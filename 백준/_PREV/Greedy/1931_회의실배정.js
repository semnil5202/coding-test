// https://www.acmicpc.net/problem/1931

const [n, ...arr] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const meetings = arr.map((el) => el.split(' ').map((el) => Number(el)));
let count = 1;

meetings.sort((a, b) => {
  if (a[1] - b[1] === 0) return a[0] - b[0];
  return a[1] - b[1];
});

let meetNow = meetings[0];

for (let i = 1; i < meetings.length; i++) {
  const end = meetings[i];
  if (meetNow[1] <= end[0]) {
    meetNow = meetings[i];
    count++;
  }
}

console.log(count);
