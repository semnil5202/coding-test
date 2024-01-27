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
