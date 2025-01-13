function solution(arr, divisor) {
  const result = [];

  for (const num of arr) {
    num % divisor === 0 ? result.push(num) : null
  }

  return result.length > 0 ? result.sort((a, b) => a - b) : [-1]
}