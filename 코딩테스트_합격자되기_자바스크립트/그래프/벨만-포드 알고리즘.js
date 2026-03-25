const solution = (graph, start) => {
  // 간선의 최단 길이 정보를 저장할 변수
  const n = graph.length;
  const dist = new Array(n).fill(Infinity);
  const prev = new Array(n).fill(null);
  dist[start] = 0;

  // n-1번 만큼 반복하면서 계속해서 최단 거리 찾기
  for (let i = 0; i < n - 1; i++) {
    for (let u = 0; u < n; u++) {
      if (dist[u] === Infinity) continue; // 아직 미방문 노드는 스킵

      for (const [v, w] of graph[u]) {
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          prev[v] = u; // 이전 노드 기록
        }
      }
    }
  }

  // 한번 더 반복해서, 음수 순환이 이루어지는 확인
  for (let u = 0; u < n; u++) {

    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        return [-1];
      }
    }
  }

  return [dist, prev];
}

console.log(solution([[[1, 4], [2, 3], [4, -6 ]], [[3, 5]], [[1, 2]], [[0, 7], [2, 4]], [[2, 2]]], 0)) // [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]
console.log(solution([[[1, 5], [2, -1]], [[2, 2]], [[3, -2]], [[0, 2], [1, 6]]], 0)) // [-1]
