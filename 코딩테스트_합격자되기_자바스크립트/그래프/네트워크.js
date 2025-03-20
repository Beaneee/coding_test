const dfs = (graph, node, visited) => {
  let connect = 0;
  visited.add(node);

  (graph[String(node)] || []).forEach((v) => {
    if (!visited.has(v)) {
      connect = (connect || 1) + dfs(graph, v, visited);
    }
  });

  return connect;
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

  const visited = new Set();
  const connect = dfs(adjList, 0, visited);

  return computers.length - connect;
}
