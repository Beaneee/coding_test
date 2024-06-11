function solution(n) {
  const orderedStr = String(n).split('').map((v) => Number(v)).sort((a, b) => b - a).join('');
  return Number(orderedStr)
}