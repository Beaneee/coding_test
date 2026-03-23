const dfs = (graph, visited, node) => {
  visited[node] = true;
  let cnt = 1;

  (graph[node] || []).forEach(v => {
    if (!visited[v]) {
      cnt += dfs(graph, visited, v);
    }
  });

  return cnt;
};

function solution(n, wires) {
  let result = Infinity;

  for (let i = 0; i < wires.length; i++) {  // wires.length
    const graph = {};

    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;  // i번째 간선만 제거

      const [u, v] = wires[j];
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];
      graph[u].push(v);
      graph[v].push(u);
    }

    const visited = Array(n + 1).fill(false);
    const count = dfs(graph, visited, 1);
    const diff = Math.abs(count - (n - count));
    result = Math.min(result, diff);
  }

  return result;
}