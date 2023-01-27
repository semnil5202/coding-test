// https://www.acmicpc.net/problem/7568

const [n, ...inputs] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');

const samples = inputs.map((el) => [Number(el.split(' ')[0]), Number(el.split(' ')[1])]);
const answers = [];

for (let i = 0; i < n; i++) {
  let grade = 1;
  for (let j = 0; j < n; j++) {
    if (samples[i][0] < samples[j][0] && samples[i][1] < samples[j][1]) grade++;
  }
  answers.push(grade);
}

console.log(answers.join(' '));
