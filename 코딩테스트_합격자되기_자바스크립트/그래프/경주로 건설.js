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
    return this.rear === this.front;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(board) {
  const move = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  const N = board.length;
  const visited = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(4).fill(Infinity)));
  let answer = Infinity;
  const q = new Queue();
  q.push([0, 0, -1, 0]);

  function calculateCost(direction, prevDirection, cost) {
    if (prevDirection === -1 || prevDirection === direction) {
      return cost + 100;
    } else {
      return cost + 600;
    }
  }

  while (!q.isEmpty()) {
    const [x, y, prevMove, cost] = q.pop();

    for (let direction = 0; direction < 4; direction++) {
      const [dx, dy] = move[direction];
      const newX = x + dx;
      const newY = y + dy;

      if (newX < 0 || newX >= N || newY < 0 || newY >= N || board[newX][newY] === 1) {
        continue;
      }

      const newCost = calculateCost(direction, prevMove, cost);

      if (newX === N - 1 && newY === N - 1) {
        answer = Math.min(answer, newCost);
      } else if (visited[newX][newY][direction] > newCost) {
        q.push([newX, newY, direction, newCost]);
        visited[newX][newY][direction] = newCost;
      }
    }
  }
  return answer;
}