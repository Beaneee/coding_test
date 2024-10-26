function solution(numbers) {
  const addArr = [];
  // 배열을 순회하면서
  for (let i = 0; i < numbers.length; i++) {
    const targetNumber = numbers[i];

    // target index와 나머지 element를 더해서
    for (let j = i + 1; j < numbers.length; j++) {
      const addNumber = numbers[j];
      // 배열에 저장하고
      addArr.push(targetNumber + addNumber);
    }
  }
  // 중복값을 제거하고
  const result = [...new Set(addArr)];
  // 오름차순으로 반환한다.
  return result.sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));

