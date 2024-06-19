function solution(maps) {
  let queue = [];
  const m = maps[0].length; //x
  const n = maps.length; //y
  const goalX = m - 1;
  const goalY = n - 1;
  //상 하 좌 우
  const dx = [-1, 1, 0, 0]; 
  const dy = [0, 0, 1, -1];

  queue.push([0, 0, 1]);

  while(queue.length > 0) {
    const [currY, currX, move] = queue.shift();

    if(currY === goalY && currX === goalX) return move;

    for(let i = 0; i < 4; i++) {
      //이동한 좌표
      const moveX = currX + dx[i];
      const moveY = currY + dy[i];
      //움직인 좌표가 유효한지
      const isValidMoveXY = moveX >= 0 && moveY >= 0;
      //움직인 좌표가 maps안에 있는지
      const isContainMoveXY = moveX < m && moveY < n;
      //범위내에 있다면
      if(isValidMoveXY && isContainMoveXY && maps[moveY][moveX] === 1) {
        queue.push([moveY, moveX, move + 1]);
        //이미 방문했으니 못가게 만들어야 한다.
        maps[moveY][moveX] = 0;
      }

    }
  }

  return -1
}
