function solution(land) {
  let sum = Math.max(...land[0]);
  let maxIdx = land[0].findIndex(v => v === Math.max(...land[0]));

  for (let i = 1; i < land.length; i++) {
    land[i].splice(maxIdx, 1);
    const max = Math.max(...land[i]);
    maxIdx = land[i].findIndex(v => v === Math.max(...land[i]));

    sum += max;
  }
  return sum
}