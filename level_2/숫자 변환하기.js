/* dp로 풀어야한다. bfs는 shift, push 때문에 시간 초과가 발생한다. */
function solution(x, y, n) {
  //애초에 x,y가 같은 경우
  if (x === y) return 0;

  let arr = [];
  //y길이 만큼 배열 생성
  for (let i = 0; i <= y; i++) {
    arr.push(-1);
  }

  arr[x] = 0;

  for (let j = x; j <= y; j++) {
    if (arr[j] === -1) continue; // 현재 위치에서 변환 불가능한 경우

    if (j * 2 <= y && arr[j * 2] === -1) {
      arr[j * 2] = arr[j] + 1;
    }

    if (j * 3 <= y && arr[j * 3] === -1) {
      arr[j * 3] = arr[j] + 1;
    }

    if (j + n <= y && arr[j + n] === -1) {
      arr[j + n] = arr[j] + 1;
    }
  }
  return arr[y];
}

