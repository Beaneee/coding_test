function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let maxCount = 0;

  function dfs(cntK, visitedDungeons, path) {
    maxCount = Math.max(maxCount, visitedDungeons)  // 매 호출마다 최댓값 갱신


    for (let i = 0; i < dungeons.length; i++) {
      const dungeon = dungeons[i];
      // 유망함수
      if (!visited[i] && cntK >= dungeon[0]) {
        visited[i] = true;
        dfs(cntK - dungeon[1], visitedDungeons + 1, [...path, i]);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0, []);

  return maxCount;
}