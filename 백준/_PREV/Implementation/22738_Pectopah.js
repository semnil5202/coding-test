const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim()
  .split('');

const answer = input.map((char) => {
  if (char === 'B') return 'v';
  if (char === 'E') return 'ye';
  if (char === 'H') return 'n';
  if (char === 'P') return 'r';
  if (char === 'C') return 's';
  if (char === 'Y') return 'u';
  if (char === 'X') return 'h';

  return char.toLowerCase();
});

console.log(answer.join(''));
