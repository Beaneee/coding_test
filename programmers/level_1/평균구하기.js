function solution(arr) {
  return arr.reduce(
    (acc, curr) => acc + curr, 0) / arr.length;
}

console.log(solution([1,2,3,4]));
console.log(solution([5,5]));