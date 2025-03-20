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
    return this.front === this.rear;
  }

}

const bfs = (graph, node) => {
  const q = new Queue();
  // 오른쪽, 왼쪽, 위, 아래 이동
  const move = [[1,0], [-1,0], [0,1],[0,-1]];
  const m = graph.length; // row
  const n = graph[0].length; // col
  const dist = Array.from({ length: m }, () => Array(n).fill(-1));

  // 시작노드 push
  q.push(node);
  // 방문처리
  dist[node[0]][node[1]] = 1;

  // q가 비어있는지 확인하고
  while (!q.isEmpty()) {
    // pop한다.
    const curr = q.pop();

    // 이동가능한 모든 경로에 대해서
    for (const [dx, dy] of move) {
      const row = curr[0] + dx;
      const col = curr[1] + dy;

      // 경로를 벗어나거나
      if (row < 0 || col < 0 || row >= m || col >= n) {
        continue;
      }

      // 벽이거나
      if (graph[row][col] === 0) {
        continue;
      }

      // 갈 수 있는 경로일 경우에
      // 방문여부을 확인한다.
      if (dist[row][col] === -1) {
        // push하고
        q.push([row, col]);
        // 방문처리한다.
        // 이전 값을 누적한다.
        dist[row][col] = dist[curr[0]][curr[1]] + 1;
      }

    }

  }
  return dist[m - 1][n -1];
}

const solution = (maps) => {
  return bfs(maps, [0, 0]);
}