class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  getSize() {
    return this.rear - this.front;
  }

  enQueue(value) {
    this.storage[this.rear] = value;
    this.rear += 1;
  }

  deQueue() {
    let value = null;

    if (this.front === this.rear) {
      value = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
      return value;
    }

    value = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return value;
  }
}
