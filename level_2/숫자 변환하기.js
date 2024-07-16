/* dp로 풀어야한다. bfs는 shift, push 때문에 시간 초과가 발생한다. */
function solution(x, y, n) {
  if (x === y) return 0;

  let dp = new Array(y + 1).fill(Infinity); // y+1 길이 만큼 배열 생성
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (dp[i] === Infinity) continue; // 현재 위치에서 변환 불가능한 경우

    if (i + n <= y) {
      dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }

    if (i * 2 <= y) {
      dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    }

    if (i * 3 <= y) {
      dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

