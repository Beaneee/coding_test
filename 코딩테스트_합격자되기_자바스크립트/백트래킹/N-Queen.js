

function solution(n) {
  let count = 0;
  const queens = Array(n).fill(0);

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      // 같은 열이 아니거나
      if (queens[i] === col) return false
      // 대각선이 아니거나
      if (Math.abs(i - row) === Math.abs(queens[i] - col)) return false;
    }
    return true;
  }

  function dfs(row) {
    if(row === n) count++;

    for (let i = 0; i < n; i++) {
      const col = i;

      if (isValid(row, col)) {
        queens[row] = col;
        dfs(row + 1);
        queens[row] = 0;
      }
    }
  }

  dfs(0);
  return count;
}