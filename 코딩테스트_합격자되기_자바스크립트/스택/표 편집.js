const solution = (n, k, cmd) => {
  // 길이가 n인 배열 생성
  // 표의 index가 어떻게 조정되는지가 관건
  const arr = Array.from({ length: n }, (_, index) => ({ key: index, value: index }));
  // cmd 명령대로 수행할 함수
  handleCMD(cmd, arr, k);
  // stack에 있는 key의 value만 O로 표시해서 return
}


const handleCMD = (cmd, arr, k) => {
  const stack = [];

  for (const cmdValue of cmd) {
    const key = cmdValue.split(' ')[0];
    const value = Number(cmdValue.split(' ')[1]);

    switch (key) {
      case 'U':
        // U X -> k + x;
        k = k + value;
      case 'D':
        // D X -> k - x;
        k = k - value;
      case 'C':
        // C -> split k
        const deletedItem = arr.splice(k, 1);
        // push stack
        stack.push(deletedItem[0]);

        // 표 정렬

        // 현재 위치 이동
        if(k === (arr.length - 1)) {
          k = 0;
        } else {
          k = k + 1;
        }

      case 'Z':
        // Z -> pop stack
        const recoveredItem = stack.pop();
        // pop된 value를 다시 배열에 삽입;

        // 표 정렬

        // 현재 위치 이동
        // 만약에 삽입된 item이 현재 위치보다 위면 k + 1;
        // 그렇지 않다면 유지
    }
  }
}
