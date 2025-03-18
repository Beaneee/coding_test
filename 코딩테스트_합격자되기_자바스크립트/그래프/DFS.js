const dfs = (graph, node, visited) => {
  const stack = [];

  stack.push(node);
  // stack이 비어있다면 종료
  while (stack.length) {
    // 스택에 노드를 팝한다.
    const currNode = stack.pop();
    // 아직 방문하지 않았다면 방문 처리
    if(visited && !visited.has(currNode)) {
      visited.add(currNode);
    }
    // 방문했다면 아무런 행동을 하지 않는다.

    // 인접한 모든 노드를 확인한다.
    (graph[node] || []).forEach((v) => {
      // push하고, pop하고, 방문여부를 확인한다.
      // 반복한다.
      // 언제까지? 스택이 비어있을 때 동안.
      dfs(graph, v, visited);
    })
  }
}

const solution = (graph, start) => {
  const visited = new Set();
  // 인접 리스트로 만들고
  const adjList = {};
  graph.forEach(([u, v]) => {
    if(!adjList[u]) {
      adjList[u] = [];
    }
    adjList[u].push(v);
  })
  // dfs

  dfs(adjList, start, visited);
  return Array.from(visited);
}

const answer1 = solution([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A');
const answer2 = solution([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A');
console.log(answer1, answer2);
