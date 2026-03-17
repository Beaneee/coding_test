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

}

function solution(maps) {
  const moves = [[-1, 0], [0, -1], [0, 1], [1, 0]]; // [drow, dcol]
  const n = maps.length;      // 행 수
  const m = maps[0].length;   // 열 수
  const dist = Array.from({length: n}, () => Array(m).fill(-1));

  const q = new Queue();
  q.push([0, 0]); // [row, col]
  dist[0][0] = 1;

  while (!q.isEmpty()) {
    const [row, col] = q.pop();

    for (const [dr, dc] of moves) {
      const nr = row + dr;
      const nc = col + dc;

      // 경로를 벗어나거나
      if (nr < 0 || nc < 0 || nr >= n || nc >= m) continue;

      // 벽이거나
      if (maps[nr][nc] === 0) continue;

      // 방문할 수 있을 때
      if (dist[nr][nc] === -1) {
        // 방문 처리
        q.push([nr, nc]);
        dist[nr][nc] = dist[row][col] + 1;
      }
    }
  }

  return dist[n-1][m-1];
}