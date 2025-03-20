class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

const bfs = (graph, node, visited) => {

}

function solution(maps) {
  // 최단거리 -> bfs
  // 오른쪽, 왼쪽, 위, 아래로 이동할 수 있다.

  // 인접한 곳에서 이동할 수 있으면 이동하고
  // 아니면 이동하지 않는다.
  // 이동할 때마다 count++;
  // 상대 진영에 도착할 때 result에 count를 push한다.
  // 최소 count를 return 한다.
}