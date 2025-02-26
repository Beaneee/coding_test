const solution = (want, number, discount) => {
  // want-number로 hash를 생성
  const hash = want.reduce((acc, part, idx) => {
    acc[part] = number[idx];
    return acc;
  }, {});

  let startIdx = 0;
  let result = 0;

  // discount를 10일까지 순회하면서
  while (startIdx + 9 < discount.length) {
    // hash를 복사하여 초기 상태로 만들기
    const tempHash = { ...hash };

    // 10일간의 할인 항목 처리
    for (let i = startIdx; i < startIdx + 10; i++) {
      const key = discount[i];
      if (tempHash[key] > 0) { // 존재하고 수량이 남아있을 때만 감소
        tempHash[key]--;
      }
    }

    // 모든 상품의 수량이 0이 되었는지 확인
    if (Object.values(tempHash).every(count => count === 0)) {
      result++;
    }

    startIdx++;
  }

  return result;
};
