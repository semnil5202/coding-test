// https://www.acmicpc.net/problem/1764

const [n, ...inputs] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const [notListen, notSee] = n.split(' ').map((el) => Number(el));

const notListens = [];
const notSees = [];

for (let i = 0; i < inputs.length; i++) {
  if (i < notListen) notListens.push(inputs[i]);
  else notSees.push(inputs[i]);
}

const listenSet = new Set(notListens);
const answers = [];

notSees.forEach((el) => {
  if (listenSet.has(el)) answers.push(el);
});

answers.sort();

console.log(answers.length + '\n' + answers.join('\n'));
