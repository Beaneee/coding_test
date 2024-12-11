function solution(board, moves) {
  // 2차원 배열에서 가장 상단에 있는 내역을 알 수 있는 방법이 중요하겄는데
  // n * n을 순회 해야함

  const stack = [];
  let result = 0;

  for (const move of moves) {
    for (const arr of board) {
      // 만약 0이 아닌 값이 있다면
      if(arr[move - 1]) {
        // stack 자료구조 사용
        if(arr[move - 1] === stack[stack.length - 1]) {
          // top이랑 같은 값이라면 pop후 result ++;
          stack.pop();
          result++;
        } else {
          stack.push(arr[move - 1]);
        }
        // 뽑았으면 0으로 변환
        arr[move - 1] = 0;
        break;
      }
    }
  }
  return result * 2;
}