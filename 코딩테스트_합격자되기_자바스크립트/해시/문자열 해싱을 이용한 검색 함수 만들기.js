/**
 * 문자열 해싱
 * @param str
 */
const polynomialHash = (str) => {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue
}

const solution = (stringList, queryList) => {
  // stringList를 문자열 해싱
  const hashList = stringList.map((str) => polynomialHash(str));
  const result = [];

  for (const query of queryList) {
    // queryList를 문자열 해싱
    const queryHash = polynomialHash(query);
    // queryList를 순회하면서 요소가 stringList에 있는지 확인
    if(hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

console.log(solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']))
console.log(solution(['apple2', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']))