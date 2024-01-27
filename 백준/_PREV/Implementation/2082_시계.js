const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim()
  .split('\n')
  .map((tile) => tile.split(' '));

const DOT = '.';
const clock = {
  first: input
    .map((tile) => tile[0])
    .join('')
    .split(''),
  second: input
    .map((tile) => tile[1])
    .join('')
    .split(''),
  third: input
    .map((tile) => tile[2])
    .join('')
    .split(''),
  fourth: input
    .map((tile) => tile[3])
    .join('')
    .split(''),
};

const clockValues = Object.values(clock);

let answer = '';

clockValues.forEach((clock) => {
  if (clock[4] === DOT && clock[7] === DOT && clock[10] === DOT) {
    answer += '0';
    return;
  }

  if (
    clock[0] === DOT &&
    clock[1] === DOT &&
    clock[3] === DOT &&
    clock[4] === DOT &&
    clock[6] === DOT &&
    clock[7] === DOT &&
    clock[9] === DOT &&
    clock[10] === DOT &&
    clock[12] === DOT &&
    clock[13] === DOT
  ) {
    answer += '1';
    return;
  }

  if (clock[3] === DOT && clock[10] === DOT && clock[11] === DOT) {
    answer += '2';
    return;
  }

  if (clock[3] === DOT && clock[4] === DOT && clock[9] === DOT) {
    answer += '3';
    return;
  }

  if (
    clock[1] === DOT &&
    clock[4] === DOT &&
    clock[9] === DOT &&
    clock[12] === DOT
  ) {
    answer += '4';
    return;
  }

  if (clock[4] === DOT && clock[5] === DOT && clock[9] === DOT) {
    answer += '5';
    return;
  }

  if (clock[4] === DOT && clock[5] === DOT && clock[10] === DOT) {
    answer += '6';
    return;
  }

  if (
    clock[3] === DOT &&
    clock[4] === DOT &&
    clock[6] === DOT &&
    clock[7] === DOT &&
    clock[9] === DOT &&
    clock[10] === DOT &&
    clock[12] === DOT &&
    clock[13] === DOT
  ) {
    answer += '7';
    return;
  }

  if (clock[4] === DOT && clock[10] === DOT) {
    answer += '8';
    return;
  }

  if (clock[4] === DOT && clock[9] === DOT && clock[10] === DOT) {
    answer += '9';
    return;
  }
});

console.log(answer[0] + answer[1] + ':' + answer[2] + answer[3]);
