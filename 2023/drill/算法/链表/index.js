class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  insertAt(index, value) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Invalid index");
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = newNode;
      newNode.next = currentNode;
    }

    this.length++;
  }
}
