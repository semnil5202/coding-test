class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 주어진 위치에 요소 추가
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log('Invalid index');
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let currentIndex = 0;
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.size++;
  }

  // 주어진 위치의 요소 삭제
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log('Invalid index');
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }
      prev.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // 링크드 리스트 출력
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }

  getSize() {
    return this.size;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // 특정 위치의 요소 반환
  elementAt(index) {
    if (index < 0 || index >= this.size) {
      return console.log('Invalid index');
    }

    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.data;
  }
}

// 예제 사용
const ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);

ll.printList(); // 10 -> 20 -> 30 -> 40 -> null

ll.insertAt(25, 2);
ll.printList(); // 10 -> 20 -> 25 -> 30 -> 40 -> null

ll.removeFrom(3);
ll.printList(); // 10 -> 20 -> 25 -> 40 -> null

console.log('Size of linked list: ', ll.getSize()); // Size of linked list:  4

console.log('Index of 25: ', ll.indexOf(25)); // Index of 25:  2

console.log('Element at index 2: ', ll.elementAt(2)); // Element at index 2:  25
