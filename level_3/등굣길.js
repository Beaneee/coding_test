function solution(m, n, puddles) {
  const min = (m - 1) + (n - 2);
  //우선 m,n만큼 배열을 만들어준다.
  let maps = [];

  for (let i = 0; i < n; i++) {
    maps[i] = [];
    for (let j = 0; j < m; j++) {
      maps[i].push(1);
    }
  }

  //비온 곳은 못가게 하고
  for (let i = 0; i < puddles.length; i++) {
    const [x, y] = puddles[i];
    maps[x-1][y-1] = 0;
  }

  let queue = [];
  const dx = [1, 0];
  const dy = [0 , 1];

  queue.push([0, 0, 0]);

  while (queue.length > 0) {
    const [currY, currX, move] = queue.shift();

    if(move === min) {
      console.log(currY, currX);
    }

    for (let i = 0; i < 2; i++) {

      const moveX = currX + dx[i];
      const moveY = currY + dy[i];
      const isContainMoveXY = moveX < m && moveY < n;

      if(isContainMoveXY && maps[moveY][moveX] === 1) {
        queue.push([moveY, moveX, move + 1]);
        maps[moveY][moveX] = 0;
      }
    }
    console.log(maps);
  }
  //이동하고 -> 어떻게???

  //그 수 만큼 움직인 곳의 개수를 구한다

}