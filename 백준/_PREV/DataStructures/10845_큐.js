// https://www.acmicpc.net/problem/10845

const inputs = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const length = inputs.shift();
const commands = inputs.map((el) => {
  if (el.includes(' ')) return el.trim().split(' ');
  else return el.trim();
});
let answer = '';

class Node {
  value;
  prev = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class Queue {
  size = 0;
  start = null;
  end = null;

  enQueue(value) {
    const newNode = new Node(value);

    if (this.start === null) this.start = newNode;
    else {
      this.end.next = newNode;
      newNode.prev = this.end;
    }

    this.end = newNode;
    this.size += 1;

    return newNode;
  }

  deQueue() {
    const value = this.start;

    if (this.start === null) return null;
    if (this.start === this.end) this.end = null;

    this.start = this.start.next;
    this.size -= 1;

    return value.value;
  }
}

const queue = new Queue();

for (let i = 0; i < length; i++) {
  if (commands[i].length > 1 && commands[i][0] === 'push') {
    queue.enQueue(commands[i][1]).value;
    continue;
  }
  if (commands[i] === 'pop') {
    if (queue.start === null) answer += '-1\n';
    else answer += `${queue.deQueue()}\n`;
  }
  if (commands[i] === 'size') answer += `${queue.size}\n`;
  if (commands[i] === 'empty') {
    if (queue.start === null) answer += '1\n';
    else answer += '0\n';
  }
  if (commands[i] === 'front') {
    if (queue.start === null) answer += '-1\n';
    else answer += `${queue.start.value}\n`;
  }
  if (commands[i] === 'back') {
    if (queue.end === null) answer += '-1\n';
    else answer += `${queue.end.value}\n`;
  }
}

console.log(answer);
