class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }
}

const bfs = (adjList, start, visited) => {
  const q = new Queue();
  q.push(start);
  visited.add(start);

  while (!q.isEmpty()) {
    const currNode = q.pop();

    // 인접노드 방문여부 확인
    (adjList[currNode] || []).forEach(v => {
      if (!visited.has(v)) {
        visited.add(v);
        q.push(v);
      }
    })

  }

}

const solution = (graph, start) => {
  // 인접행렬 만들기
  const adjList = {};

  for (const [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  }

  // bfs
  const visited = new Set();
  bfs(adjList, start, visited);

  return [...visited];
}

console.log(solution([[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]], 1)) // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 1)) // 반환값 : [1, 2, 3, 4, 5, 0]