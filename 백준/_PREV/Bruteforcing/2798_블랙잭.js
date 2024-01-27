let [n, ...arr] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');

let canBeAnswer = 0;
const answerNumber = n.split(' ').map((i) => Number(i))[1];
const sources = arr
  .join('')
  .split(' ')
  .map((i) => Number(i));

for (let i = 0; i < sources.length; i++) {
  for (let j = i + 1; j < sources.length; j++) {
    for (let k = j + 1; k < sources.length; k++) {
      const sourceSum = sources[i] + sources[j] + sources[k];

      if (!(answerNumber - sourceSum < 0) && canBeAnswer <= sourceSum) canBeAnswer = sourceSum;
    }
  }
}

console.log(canBeAnswer);
