const solution = (graph, start) => {
  const dist = {};
  const visited = new Set();
  const pq = [[0, start]];

  for (const node of Object.keys(graph)) {
    dist[node] = Infinity;
  }

  dist[start] = 0;

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, node] = pq.shift();

    // 방문한거에 대해서는 다시 찾지 않는다
    if (visited.has(node)) continue;
    visited.add(node);

    for (const [next, weight] of Object.entries(graph[node])) {
      const updateDist = d + weight;

      if (updateDist < dist[next]) {
        // 간선 정보 update
        dist[next] = updateDist;
        pq.push([updateDist, next]);
      }

    }
  }
  return {dist, visited};
}

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, 'A'));
// [{'A': 0, 'B': 4, 'C': 3}, {'A': ['A'], 'B': ['A', 'C', 'B'], 'C': ['A', 'C']}]

console.log(solution({ A: { B: 1 },B: { C: 5 },C: { D: 1 }, D: {} }, 'A'));
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]