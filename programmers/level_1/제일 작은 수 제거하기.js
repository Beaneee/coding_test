function solution(arr) {
  if (arr.length === 1) return [-1];

  const min = Math.min(...arr);
  const minIdx = arr.indexOf(min);

  return arr.slice(0, minIdx).concat(arr.slice(minIdx + 1, arr.length))
}