/**
 * hash 생성
 * @param arr
 * @returns {number[]}
 */
const generateHashTable = (arr) => {
  const maxNum = Math.max(...arr);
  const hash = new Array(maxNum + 1).fill(0);

  for (const num of arr) {
    hash[num] = 1;
  }

  return hash;
};

/**
 * 두 수의 합이 target인지 찾기
 * @param arr {number[]} - 양의 정수 리스트
 * @param target {number} - 찾고 싶은 합
 * @returns {boolean} - 존재하면 true, 없으면 false
 */
const solution = (arr, target) => {
  const hashTable = generateHashTable(arr);

  for (const num of arr) {
    const complement = target - num;

    if (hashTable[complement] === 1 && complement !== num) {
      return true;
    }
  }
  return false;
};

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
console.log(solution([1, 4, 5, 6], 9)); // true (4 + 5 = 9)
console.log(solution([10, 20, 30, 40], 50)); // true (10 + 40)
console.log(solution([1, 2, 3, 7], 10)); // false (어떤 두 수도 합이 10이 아님)
