function solution(board) {
  // 현재 위치에 num이 들어갈 수 있는지 체크
  function isValid(num, row, col) {
    return !(isRow(num, row) || isCol(num, col) || inBox(num, row, col))
  }

  // 조건1: 해당 행에 넣으려는 숫자 num이 있는지 확인합니다.
  function isRow(num, row) {
    return board[row].includes(num);
  }
  // 조건2: 해당 열에 넣으려는 숫자 num이 있는지 확인합니다.
  function isCol(num, col) {
    return board.some(row => row[col] === num);
  }
  // 조건3: 해당 위치를 포함하는 3 * 3박스에 num이 있는지 확인합니다.
  function inBox(num, row, col) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return true
      }
    }

    return false;
  }

  function findEmpty() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return [i, j]
      }
    }
    return null;
  }

  function findSolution() {
    // 빈 칸(0)을 찾는다
    // 못 찾으면 → 다 채워진 것! return true
    const emptyPos = findEmpty();
    if (!emptyPos) return true;

    // 찾았으면 해당 (row, col)에 대해:
    const [row, col] = emptyPos;

    //   1~9를 하나씩 시도:
    for (let num = 1  ; num <= 9; num++) {
      //   isValid 통과하면:
      if (isValid(num, row, col)) {
        //   board[row][col] = num  // 놓기
        board[row][col] = num;
        // solve() 재귀 호출
        //         → true 리턴되면 성공, 그대로 return true
        if (findSolution()) return true;
        //         → false 리턴되면 board[row][col] = 0  // 되돌리기 (백트래킹)
        board[row][col] = 0;
      }
    }
    // 시도 다 실패했으면 return false
    return false;
  }
  findSolution();
  return board;
}

console.log(
  solution(
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]
  )
)

console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
  )
)
