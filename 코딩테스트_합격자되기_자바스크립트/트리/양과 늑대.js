function solution(info, edges) {
  const n = info.length;
  const graph = Array.from({ length: n }, () => []);
  let maxSheep = 0;


  // 1. 트리 구성
  for (const [p, c] of edges) {
    graph[p].push(c);
  }

  // 2. dfs
  const dfs = (sheep, wolf, candidates) => {
    maxSheep = Math.max(maxSheep, sheep);

    // 후보 노드들 중 하나를 골라 순회
    for (let i = 0; i < candidates.length; i++) {
      const next = candidates[i];

      // 방문 시 상태 변화
      const ns = sheep + (info[next] === 0 ? 1 : 0)
      const nw = wolf + (info[next] === 1 ? 1 : 0)

      // 양 <= 늑대면 다음 순회
      if (ns <= nw) continue;

      // 다음 후보 집합 만들기
      // 이번에 방문한 next는 제거
      // next의 자식들을 후보에 추가
      const nextCandidates = [...candidates];
      nextCandidates.splice(i, 1); // candidates에는 지금 내가 갈 수 있는 모든 노드들의 정보를 가지고있다. 업데이트 해줘야함

      // 예를 들어  [1, 4, 6] 에서 4를 방문하고 난 후 다음에 방문할 수 있는 노드들의 정보는
      // [1, 6, ...graph[4]] 가 되어야함
      for (const child of graph[next]) {
        nextCandidates.push(child);
      }

      dfs(ns, nw, nextCandidates);
    }

  }

  // 시작: 루트는 바로 방문한다고 가정
  // 후보는 루트의 자식들
  dfs(1, 0, [...graph[0]], maxSheep)

  return maxSheep;
}
