// https://www.acmicpc.net/problem/10828

const inputs = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const length = inputs.shift();
const commands = inputs.map((el) => {
  if (el.includes(' ')) return el.trim().split(' ');
  else return el.trim();
});
const answerArr = [];
let answer = '';

for (let i = 0; i < length; i++) {
  if (commands[i].length > 1 && commands[i][0] === 'push') {
    answerArr.push(commands[i][1]);
  }
  if (commands[i] === 'pop') {
    if (answerArr.length === 0) answer += '-1\n';
    else answer += `${answerArr.pop()}\n`;
  }
  if (commands[i] === 'size') answer += `${answerArr.length}\n`;
  if (commands[i] === 'empty') {
    if (answerArr.length === 0) answer += '1\n';
    else answer += '0\n';
  }
  if (commands[i] === 'top') {
    if (answerArr.length === 0) answer += '-1\n';
    else answer += `${answerArr[answerArr.length - 1]}\n`;
  }
}

console.log(answer);
