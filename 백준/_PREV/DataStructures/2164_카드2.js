// https://www.acmicpc.net/problem/2164

const number = Number(require('fs').readFileSync('./INPUT.txt').toString().trim());

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

const node = new Queue();

for (let i = 0; i < number; i++) {
  node.enQueue(i + 1);
}

while (node.size !== 1) {
  node.deQueue();
  node.enQueue(node.deQueue());
}

console.log(node.deQueue());
