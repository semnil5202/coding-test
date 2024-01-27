const [square, ...inputs] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');

const [height, width] = square.split(' ').map((i) => Number(i));
const boards = inputs.map((i) => i.trim().split(''));
const WHITE = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
].map((i) => i.trim().split(''));
const BLACK = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
].map((i) => i.trim().split(''));

let answer = 100;

for (let h = 0; h <= height - 8; h++) {
  for (let w = 0; w <= width - 8; w++) {
    temp = checkBoard(h, w);
    answer > temp ? (answer = temp) : (answer = answer);
  }
}

console.log(answer);

function checkBoard(h, w) {
  let diffWhite = 0;
  let diffBlack = 0;
  for (let i = h; i < 8 + h; i++) {
    for (let j = w; j < 8 + w; j++) {
      if (boards[i][j] !== WHITE[i - h][j - w]) diffWhite++;
      if (boards[i][j] !== BLACK[i - h][j - w]) diffBlack++;
    }
  }

  if (diffWhite > diffBlack) return diffBlack;
  return diffWhite;
}
