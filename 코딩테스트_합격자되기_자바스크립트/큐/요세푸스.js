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

  size () {
    return this.rear - this.front;
  }
}

const solution = (N, K) => {
  const q = new Queue();

  // 모두 push
  for (let i = 0; i < N; i++) {
    q.push(i + 1);
  }

  while (q.size() > 1) {
    // K - 1까지 뒤에 이어붙이면, 결국 K번째가 front가 된다.
    for (let i = 0; i < K - 1; i++) {
      q.push(q.pop());
    }
    // front가 된 K를 pop한다.
    q.pop();
  }

  // 마지막까지 살아 있는 사람을 return 한다.
  return q.pop();
}


console.log(solution(5, 2));