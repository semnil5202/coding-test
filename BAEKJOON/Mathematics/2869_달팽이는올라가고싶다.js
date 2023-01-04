const [up, down, goal] = require('fs')
  .readFileSync('./INPUT.txt')
  .toString()
  .trim()
  .split(' ')
  .map((i) => Number(i));

console.log(Math.ceil((goal - down) / (up - down)));
