const [T, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './INPUT.txt')
  .toString()
  .trim()
  .split('\n');

const lists = input.map((order) => order.split(' '));
const answer = [];

lists.forEach((order) => {
  if (order[0] === 'order') {
    answer.push(order);
  }
  if (order[0] === 'sort') {
    answer.sort((a, b) => {
      if (a[2] === b[2]) return a[1] - b[1];
      return a[2] - b[2];
    });
  }
  if (order[0] === 'complete') {
    answer.splice(answer.map((table) => table[1]).indexOf(order[1]), 1);
  }

  if (answer.length === 0) {
    console.log('sleep');
    return;
  }
  console.log(answer.map((ans) => ans[1]).join(' '));
});
