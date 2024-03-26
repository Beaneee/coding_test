function solution(elements) {
  const result = [];
  
  for(let length = 1; length <= elements.length; length++) {
      for(let i = 0; i <= elements.length - length; i++) {
          const subarray = elements.slice(i, i + length);
          const sum = subarray.reduce((acc, curr) => acc + curr, 0); // 부분 배열의 요소들의 합 계산
          result.push(sum);
      }   
  }
  
  const removeDuplicateArr = new Set(result);
  return removeDuplicateArr.size;
}