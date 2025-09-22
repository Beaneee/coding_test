
function solution(info, edges) {
  // 인접 리스트 만들기
  const graph = {};
  edges.forEach(([u, v]) => {
    if (!graph[u]) {
      graph[u] = [];
    }
    graph[u].push(v);
  })
  
  // dfs
}