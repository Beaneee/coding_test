/**
 * 경로 update
 * @param dir
 */
const updatePath = (dir, x, y) => {
  switch (dir) {
    case 'U': // 위쪽으로 한 칸 가기
      return [x, y + 1];
    case 'D': // 아래쪽으로 한 칸 가기
      return [x, y - 1];
    case 'R': // 오른쪽으로 한 칸 가기
      return [x + 1, y];
    case 'L': // 왼쪽으로 한 칸 가기
      return [x - 1, y];
  }
}

/**
 * 좌표 유효성 검사
 * @param x
 * @param y
 * @returns {boolean}
 */
const isValid = (x, y) => {
  return x >= -5 && x <= 5 && y >= -5 && y <= 5
}

function solution(dirs) {
  const pathArr = dirs.split('');

  let x= 0;
  let y = 0;
  const pathSet = new Set();
  // dirs를 규칙대로 순회한다.
  pathArr.forEach(path => {
    // 단, (x, y)는 각각 -5 ~ 5의 범위를 가진다.
    // 순회한 순서대로 좌표를 구해 저장한다.
    const [nx ,ny] = updatePath(path, x, y);
    // 업데이트 된 경로가 좌표 허용 범위를 벗어나면 종료해버린다.
    if (!isValid(nx, ny))  return;
    //양방향으로 봐야한다.
    // 캐릭터가 처음 걸어본 길의 길이를 구하려고 한다. -> 중복된 길은 계산하지 않는다.
    pathSet.add(`${x}${y},${nx}${ny}`);
    pathSet.add(`${nx}${ny},${x}${y}`);

    // 저장 후 x,y를 업데이트 해준다.
    [x, y] = [nx ,ny];
    // dirs의 길이 만큼 계속 반복한다.
  })

  // 양방향은 같은 경로 이므로 나눠준다.
  return pathSet.size / 2
}