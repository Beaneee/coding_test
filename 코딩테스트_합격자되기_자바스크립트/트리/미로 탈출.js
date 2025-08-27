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

// ➎ 큐에서 좌표와 이동 횟수를 꺼냄
// ➏ 도착점에 도달하면 결과 반환
// ➐ 네 방향으로 이동
// ➑ 이동 가능한 좌표인 때에만 큐에 넣음
// ➋ 방문한 적이 없으면 큐에 넣고 방문 여부 표시

// ➊ 이동 가능한 좌표인지 판단하는 함수
// ➒ 다음 이동 지점이 물인 경우
// ➓ 다음 이동 지점이 물이 아닌 경우

// ⓫ 도착점에 도달하지 못한 경우
function solution(maps) {
  console.log(maps);
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

  console.log(visited, q)
}

