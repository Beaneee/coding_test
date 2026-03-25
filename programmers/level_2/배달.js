function solution(N, road, K) {

  // 방향성이 없으니 양방향으로 만들어줘야 한다.
  const graph = Array.from({length: N + 1 }, () => []);
  const dist = Array(N + 1).fill(Infinity);
  const pq = [[0, 1]];

  dist[1] = 0;

  for (const [u, v, w] of road) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  while (pq.length > 0) {
    pq.sort((a,b) => a[0] - b[0]);
    const [d, node] = pq.shift();

    for (const [nextNode, nextDist] of graph[node]) {
      const cost = d + nextDist;

      if (cost < dist[nextNode]) {
        dist[nextNode] = cost;
        pq.push([cost, nextNode]);
      }
    }
  }


  return dist.filter(v => v <= K ).length;
}