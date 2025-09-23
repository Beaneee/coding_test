const dfs = (graph, node, visited, info, countObj) => {
  const stack = [];
  stack.push(node);

  while(stack.length > 0) {
    const currNode = stack.pop();
    const target = info[currNode];

    if(!countObj[target]) countObj[target] = 0;
    countObj[target] += 1;

    if(!visited.has(currNode)) {
      visited.add(currNode);
    }

    // 인접한 모든 노드를 확인한다
    (graph[currNode] || []).forEach(v => {
      const sheepIdx = 0;
      const wolfIdx = 1;
      const isSearch = countObj[sheepIdx] > countObj[wolfIdx];

      if(!visited.has(v) && isSearch) {
        console.log(countObj);
        dfs(graph, v, visited, info, countObj);
      }
    })
  }
}

function solution(info, edges) {
  // 인접 리스트 만들기
  const graph = {};
  const countObj = {
    0: 0,
    1: 0
  };
  const visited = new Set();

  edges.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];

    graph[u].push(v);
  })

  dfs(graph, 0, visited, info, countObj);
}