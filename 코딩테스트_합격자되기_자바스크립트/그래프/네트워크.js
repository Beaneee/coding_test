function dfs(visited, computers, start) {
  // 방문 처리
  visited[start] = true;

  for (let j = 0; j < computers[start].length; j++) {
    // 자신은 항상 1이니 방문하지 않고
    // 연결 되어있고
    // 방문하지 않았으면 다시 순회
    if (!visited[j] && computers[start][j] === 1 && j !== start) {
      dfs(visited, computers, j);
    }
  }
}

function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++)  {
    if(!visited[i]) {
      dfs(visited, computers, i);
      count++;
    }
  }

  return count;
}