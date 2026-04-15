function solution(board) {
  // 현재 위치에 num이 들어갈 수 있는지 체크
  function isValid(num, row, col) {
    return isRow(num, row) || isCol(num, col) || inBox(num, row, col)
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
        if (board[boxRow][boxCol] === num) return true
      }
    }

    return false;
  }
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
