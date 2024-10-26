/**
 * 정수 배열을 정렬해서 반환하는 solution() 함수를 완성하세요.
 */
const sortedArray = (arr) => {
  return arr.sort((a, b) => a - b);
}

console.log(sortedArray([1, -5, 2, 4, 3]));
console.log(sortedArray([2,1,1,3,2,5,4]));
console.log(sortedArray([6,1,7]));
