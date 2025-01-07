const solution = (n, k, cmd) => {
  // 삭제된 행의 인덱스를 저장하는 배열
  const stack = [];

  // 연결 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 배열
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  // 현재 위치를 나타내는 인덱스
  k = k + 1;

  // 주어진 cmd 배열 요소를 하나씩 처리
  for (const item of cmd) {
    const [action , x] = item.split(' ');
    const isMove = x ? true : false;

    if(isMove) {

      if(action === 'U') {
        // x 만큼 이동
        for (let i = 0; i < x; i++) {
          k = up[k];
        }

      } else if (action === 'D') {
        // x 만큼 이동
        for (let i = 0; i < x; i++) {
          k = down[k];
        }
      }

    } else {

      if(action === 'C') {
        // 위치를 저장하고
        stack.push(k);
        // 이동
        up[down[k]] = up[k];
        down[up[k]] = down[k];

        k = n < down[k] ? up[k] : down[k];
      }

      if(action === 'Z') {
        const restore = stack.pop();
        down[up[restore]] = restore;
        up[down[restore]] = restore;
      }

    }

  }

  // 삭제된 행의 위치에 X를 그렇지 않은 행의 위치에 O를 포함하는 문자열 반환
  const answer = new Array(n).fill('O');

  for (const deletedIdx of stack) {
    answer[deletedIdx - 1] = 'X';
  }

  return answer.join('');
}

