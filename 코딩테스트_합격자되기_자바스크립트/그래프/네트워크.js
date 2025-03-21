const dfs = (graph, node, visited) => {
  visited.add(node);

  (graph[String(node)] || []).forEach((v) => {
    if (!visited.has(v)) {
      dfs(graph, v, visited);
    }
  });
};

function solution(n, computers) {
  const adjList = {};

  computers.forEach((arr, index) => {
    arr.forEach((v, idx) => {
      if (index !== idx && v) {
        if (!adjList[index]) adjList[index] = [];
        adjList[index].push(idx);
      }
    });
  });

  let count = 0;
  const visited = new Set();
  // 모든 노드를 시작으로 탐색해야 한다.
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(adjList, i, visited);
    }
  }

  return count;
}
