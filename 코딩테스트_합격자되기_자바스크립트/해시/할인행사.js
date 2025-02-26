const solution = (want, number, discount) => {
  // want-number로 hash를 생성
  const hash = want.reduce((acc, part, idx) => {
    acc[part] = number[idx];
    return acc;
  }, {})

  let initIndx = 0;
  let startIdx = initIndx;

  // discount를 10일까지 순회하면서
  while (true) {

    if(initIndx > discount.length - 1) return 0;

    const key = discount[startIdx];

    if(hash[key]) {
      // want의 count를 지워줌
      hash[key]--;
    }

    startIdx++;

    // 종료 조건
    if(startIdx === initIndx + 9) {
      if(Object.keys(hash).find(key => hash[key] > 0)) {
        initIndx++;
        continue;
      }
      // 모두 0이 되는 경우 중 가장 짧은 날을 return;
      return initIndx;
    }

  }
}