const dfs = (graph, node, visited) => {
  // 여기서 초기화를 해주기 때문에
  let cnt = 1;
  visited.add(node);

  (graph[node] || []).forEach(v => {
    if(!visited.has(v)) {
      // 더해줘야 한다.
      cnt += dfs(graph, v, visited);
    }
  })
  // 값을 return 해주고
  return cnt;
}

function solution(n, wires) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const adjList = {};
    const arr = wires.filter((v, idx) => i !== idx);

    for (const [u, v] of arr) {
      // 양방향으로 해줘야한다.
      // 그렇지 않으면 한 방향으로만 탐색하게 된다. -> 중요!!!
      if (!adjList[u]) adjList[u] = [];
      if (!adjList[v]) adjList[v] = [];
      adjList[u].push(v);
      adjList[v].push(u);
    }

    const start = Object.keys(adjList)[0];
    const visited = new Set();

    const count = dfs(adjList, Number(start), visited);
    const rest = n - count;
    result.push(Math.abs(count - rest));
  }

  return Math.min(...result);
}