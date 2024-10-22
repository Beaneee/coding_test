function solution(dirs) {
  const moveList = dirs.split('');
  const moveObj = { 'U' : [0, 1], 'D': [0,-1], 'R': [1, 0], 'L': [-1, 0] };

  let curr = [0, 0];
  //방문한 좌료를 hash map으로 해보자.
  const visited = {};

  //좌표를 돌면서
  moveList.forEach(v => {
    const moveObjX = moveObj[v][0];
    const moveObjY = moveObj[v][1];

    const next = [curr[0] + moveObjX, curr[1] + moveObjY];

    // 경계를 벗어나는 경우 무시
    if (next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5) {
      return;
    }
    //양방향으로 봐야한다.
    const path1 = `${curr[0]},${curr[1]}-${next[0]},${next[1]}`;
    const path2 = `${next[0]},${next[1]}-${curr[0]},${curr[1]}`;

    if (!visited[path1]) {
      visited[path1] = true;
      visited[path2] = true;
    }

    curr = next; // 현재 위치를 다음 위치로 업데이트
  })

  return Object.keys(visited).length / 2
}