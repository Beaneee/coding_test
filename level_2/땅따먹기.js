function solution(land) {
  //dp로 풀어야한다.
  //이전 값을 바라보고 값을 구해야한다.
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
    land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
    land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
    land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
  }

  return Math.max(...land[land.length - 1]);
}