function solution(brown, yellow) {
  const totalSize = brown + yellow;

  for (let vertical = 3; vertical <= Math.sqrt(totalSize) ; vertical++) {

    // 사각형이 되는지 조건 체크
    if (totalSize % vertical === 0) {
      const horizontal = totalSize / vertical;
      // 카펫 형태로 만들 수 있는지 확인
      if (brown === totalSize - ((horizontal -2) * (vertical - 2))) {
        return [horizontal, vertical];
      }
    }
  }

  return []
}