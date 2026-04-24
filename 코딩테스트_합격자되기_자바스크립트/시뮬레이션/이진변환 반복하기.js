function solution(s) {
  const result = [0, 0];
  let parseStr = s;

  while(parseStr !== '1') {
    let onesCount = 0;

    for (let str of parseStr) {
      if(str === '1') {
        onesCount += 1;
      }

      if(str === '0') {
        result[1] += 1;
      }
    }

    result[0] += 1;
    parseStr = onesCount.toString(2);
  }

  return result;
}