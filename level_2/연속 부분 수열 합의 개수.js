function solution(elements) {
  const n = elements.length;
  const sums = new Set(); // 부분 수열의 합을 저장할 Set

  // 각 원소를 시작으로 하는 부분 수열의 합을 구함
  for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
          sum += elements[(i + j) % n]; // 원형 수열에서 요소를 가져오기 위해 % 연산 사용 
          sums.add(sum);
      }
  }

  return sums.size;
}

// sum += elements[(i + j) % n]
// elements[3 % 5]: 배열의 인덱스 3
// elements[4 % 5]: 배열의 인덱스 4
// elements[5 % 5]: 배열의 인덱스 0 (배열의 끝을 넘어가므로 배열의 시작으로 돌아감)
// elements[6 % 5]: 배열의 인덱스 1
// elements[7 % 5]: 배열의 인덱스 2