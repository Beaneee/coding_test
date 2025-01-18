class Queue {
  // 변수
  items = [];
  front = 0;
  rear = 0;

  // push
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  // pop
  pop() {
    return this.items[this.front++];
  }

  // isEmpty
  isEmpty() {
    return this.front === this.rear;
  }

  // isFull
  isFull() {
    // 알 수 없다.
  }
}