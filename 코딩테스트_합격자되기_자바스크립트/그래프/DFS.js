const dfs = (graph, node, visited = new Set(), path = []) => {
  // 방문처리
  visited.add(node);
  path.push(node);

  // 인접노드 탐색
  (graph[node] || []).forEach(v => {
    if (!visited.has(v)) dfs(graph, v, visited, path);
  })
  return path;
};

const solution = (graph, start) => {
  // 1. 인접리스트 만들기
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  })

  // 2. DFS
  const result = dfs(adjList, start);
  return result;
};

const answer1 = solution([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A');
const answer2 = solution([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A');
console.log(answer1, answer2);
