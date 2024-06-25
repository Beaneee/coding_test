function solution(dirs) {
  const moveList = dirs.split('');
  let x = 0;
  let y = 0;
  //방문한 좌료를 hash map으로 해보자.
  const visited = { [String(x) + String(y)]: true };
  //좌표를 돌면서
  moveList.forEach(v => {

    if(v === 'U') {
      y += 1;
    }

    if(v === 'D') {
      y -= 1;
    }

    if(v === 'R') {
      x += 1;
    }

    if(v === 'L') {
      x -= 1;
    }
    if(!visited[String(x) + String(y)] && ( x >= -5 && x <= 5 ) && ( y >= -5 && y <= 5 )) {
      //방문했던 좌표는 count하지 않으면 되겄다. => 아! 방문한 좌표의 총 개수만 count하면 되겠네.
      visited[String(x) + String(y)] = true;
    }
  })
  return Object.keys(visited).length
}