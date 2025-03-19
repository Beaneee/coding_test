class Queue {
  constructor(props) {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  // push
  push(node) {
    this.items.push(node);
    this.rear++;
  }

  // pop
  pop() {
    // 뽑고 늘리기
    return this.items[this.front++];
  }

  // isEmpty
  isEmpty() {
    return this.rear === this.front;
  }

  size () {
    return this.rear - this.front;
  }
}

const solution = (graph, start) => {
  const q = new Queue();

  // 시작 노드를 push한다. -> 방문처리

  // 큐가 비어있는지 확인한다.

  // 큐에서 노드를 pop한다.

  // 인접한 모든 노드를 확인하고

  // 그 중 아직 방문하지 않은 노드들을 큐에 푸시한다.
}

console.log(solution([(1,2), (1,3), (2,4), (2,5), (3,6), (3,7), (4,8), (5,8), (6,9), (7,9)], 1));
console.log(solution([(0,1), (1,2), (2,3), (3,4), (4,5), (5,0)], 1));