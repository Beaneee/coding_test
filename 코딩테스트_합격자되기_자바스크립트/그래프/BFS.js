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

/**
 * q.push(1)  // 시작 노드 추가
 *
 * // 1을 꺼내고, 인접한 2, 3을 큐에 추가
 * q.pop()  -> 1 방문
 * q.push(2)
 * q.push(3)
 *
 * // 2를 꺼내고, 인접한 4, 5를 큐에 추가
 * q.pop()  -> 2 방문
 * q.push(4)
 * q.push(5)
 *
 * // 3을 꺼내고, 인접한 6, 7을 큐에 추가
 * q.pop()  -> 3 방문
 * q.push(6)
 * q.push(7)
 *
 * // 4를 꺼내고, 인접한 8을 큐에 추가
 * q.pop()  -> 4 방문
 * q.push(8)
 *
 * // 5, 6, 7, 8, 9 순서대로 진행
 */
const bfs = (graph, node, visited) => {
  const q = new Queue();
  // 시작 노드를 push한다. -> 방문처리
  q.push(node);
  // 큐가 비어있는지 확인한다.
  while (!q.isEmpty()) {
    // 큐에서 노드를 pop한다.
    const currNode = q.pop();

    // 방문을 확인한다.
    if(!visited.has(currNode)) {
      visited.add(currNode);
    }

    // 인접한 모든 노드를 확인하고
    // bfs의 인접노드는 currNode이다.... dfs랑 다름. 주의!!!
    (graph[currNode] || []).forEach(v => {
      if (!visited.has(v)) {
        q.push(v);
      }
    });

  }
}

const solution = (graph, start) => {
  const adjList = {};
  const visited = new Set();
  // 인접 리스트를 만든다.
  graph.forEach(([u, v]) => {
    if(!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  })

  bfs(adjList, start, visited);
  return [...visited];
}

console.log(solution([[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]], 1)) // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 1)) // 반환값 : [1, 2, 3, 4, 5, 0]