function solution(keyinput, board) {
  const pos = [0, 0];
  const width = Math.floor(board[0] / 2);
  const height = Math.floor(board[1] / 2);

  const moves = {
    up:    [0, 1],
    down:  [0, -1],
    left:  [-1, 0],
    right: [1, 0]
  };

  for (const move of keyinput) {
    const [dx, dy] = moves[move];

    const nextX = pos[0] + dx;
    const nextY = pos[1] + dy;

    if (nextX >= -width && nextX <= width) {
      pos[0] = nextX;
    }

    if (nextY >= -height && nextY <= height) {
      pos[1] = nextY;
    }
  }

  return pos;
}