class Queue {
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

  size () {
    return this.rear - this.front;
  }
}

const solution = (N, K) => {
  const q = new Queue();

  // 모두 push
  for (let i = 0; i < N; i++) {
    q.push(i);
  }

  console.log(q.size())


  while (q.size() > 1) {
    // 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앤다. (front 기준으로 자른다.
    // 없앤 사람 다음 사람을 기준으로 다시 K번째 사람을 없앤다.
  }

  // 마지막까지 살아 있는 사람을 return 한다.
}


solution(5, 2);