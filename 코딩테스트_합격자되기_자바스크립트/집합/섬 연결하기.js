let parent;

function find(x) {
  if (parent[x] === x) return x;
  parent[x] = find(parent[x]); // path compression
  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return false; // cycle 발생
  parent[rootB] = rootA;
  return true;
}

function solution(n, costs) {
  // Union-Find 초기화
  parent = Array.from({ length: n }, (_, i) => i);

  // 비용 기준 정렬
  costs.sort((a, b) => a[2] - b[2]);

  let total = 0;
  let picked = 0;

  for (const [a, b, cost] of costs) {
    if (union(a, b)) {
      total += cost;
      picked += 1;
      if (picked === n - 1) break;
    }
  }

  return total;
}
