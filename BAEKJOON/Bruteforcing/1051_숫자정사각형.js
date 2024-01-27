const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim()
  .split('\n');

const [height, width] = input.shift().split(' ').map(Number);
const rectangle = input.map((line) => line.split('').map(Number));
const size = height > width ? width : height;
const canWidthMove = width - size;
const canHeightMove = height - size;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < canHeightMove; j++) {
    for (let k = 0; k < canWidthMove; k++) {}
  }
}
