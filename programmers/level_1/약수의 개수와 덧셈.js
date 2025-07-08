function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const list = calculateFactor(i);

    // 짝수
    if (list.length % 2 === 0) {
      answer = answer + i;
    }

    // 홀수
    if (list.length % 2 === 1) {
      answer = answer - i;
    }
  }

  return answer;
}

const calculateFactor = (num) => {
  const factorList = [];
  let idx = 1;
  // 약수는 본인을 제외하고 num/2 보다 클 수 없다.
  while (idx <= num / 2) {
    if (num % idx === 0) factorList.push(idx);
    idx++
  }

  return [...factorList, num];
}