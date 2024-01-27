const [T, ...input] = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const fodder = [];
const distributions = [];
let answer = '';

input.forEach((food, idx) => {
  if (idx % 2 === 0) fodder.push(food);
  if (idx % 2 === 1) distributions.push(food);
});

const pigs = distributions.map((pig) => pig.split(' ').map(Number));

const nextDayFodder = (arr) => {
  const nextDay = arr.map((pig, idx) => {
    if (idx === 0) {
      return pig + arr[5] + arr[1] + arr[3];
    }
    if (idx === 1) {
      return pig + arr[0] + arr[2] + arr[4];
    }
    if (idx === 2) {
      return pig + arr[1] + arr[3] + arr[5];
    }
    if (idx === 3) {
      return pig + arr[2] + arr[4] + arr[0];
    }
    if (idx === 4) {
      return pig + arr[3] + arr[5] + arr[1];
    }
    if (idx === 5) {
      return pig + arr[4] + arr[0] + arr[2];
    }
  });

  return nextDay;
};

for (let i = 0; i < fodder.length; i++) {
  let count = 1;

  while (true) {
    if (Number(fodder[i]) < pigs[i].reduce((acc, cur) => acc + cur, 0)) {
      answer += `${count}\n`;
      break;
    } else {
      pigs[i] = nextDayFodder(pigs[i]);
      count++;
    }
  }
}

console.log(answer);
