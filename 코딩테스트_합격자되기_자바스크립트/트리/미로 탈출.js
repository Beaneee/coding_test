class Queue {
  constructor(props) {
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

// ➊ 이동 가능한 좌표인지 판단하는 함수
const isValidMove = (ny, nx, n, m, maps) => {
  return ny >=0 && nx >=0 && ny < n && nx < m && maps[ny][nx] !== 'X'
}

// ➋ 방문한 적이 없으면 큐에 넣고 방문 여부 표시 함수
const appendToQueue = (visited, q, ny, nx, k, time) => {
  if (!visited[ny][nx][k]) {
    q.push([ny, nx, k, time + 1]); // 시간을 하나 늘림
    visited[ny][nx][k] = true;
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));

  // ➌ 위, 아래, 왼쪽, 오른쪽 이동 방향
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;

  // ➍ 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const target = maps[i][j];
      // 시작점
      if (target === 'S') {
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }

      // 도착점
      if (target === 'E') {
        endY = i;
        endX = j;
      }
    }
  }

  while(!q.isEmpty()) {
    // ➎ 큐에서 좌표와 레버 스위치 여부 이동 횟수를 꺼냄
    const [y, x, k, time] = q.pop();

    // ➏ 도착점에 도달하면 결과 반환
    if(y === endY && x === endX && k === 1) {
      return time;
    }

    // ➐ 네 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // ➑ 이동 가능한 좌표인 때에만 큐에 넣음
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      // ➒ 다음 이동 지점이 물인 경우
      if (maps[ny][nx] === 'L') {
        appendToQueue(visited, q, ny, nx, 1 ,time);
      } else { // ➓ 다음 이동 지점이 물이 아닌 경우
        appendToQueue(visited, q, ny, nx, k ,time);
      }

    }

  }

  // ⓫ 도착점에 도달하지 못한 경우
  return -1
}

