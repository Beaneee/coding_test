const dfs = (graph, node, visited) => {
  let cnt = 1;
  visited.add(node);

  (graph[node] || []).forEach(v => {
    if(!visited.has(v)) {
      cnt += dfs(graph, v, visited);
    }
  })
  return cnt;
}

function solution(n, wires) {

  for (let i = 0; i < n; i++) {
    const adjList = {};
    const arr = wires.filter((v, idx) => i !== idx);

    for (const [u ,v] of arr) {
      if(!adjList[u]) adjList[u] = [];
      adjList[u].push(v);
    }

    const start = Object.keys(adjList)[0];
    const visited = new Set();

    const count = dfs(adjList, Number(start), visited);
  }

}