function solution(m, n, puddles) {
  const min = (m - 1) + (n - 2);
  //우선 m,n만큼 배열을 만들어준다.
  let maps = [];
  for (let i = 0; i < n; i++) {
    maps[i] = [];
    for (let j = 0; j < m; j++) {
      maps[i].push(1);
    }
  }
  //비온 곳은 못가게 하고
  for (let i = 0; i < puddles.length; i++) {
    const [x, y] = puddles[i];
    maps[x-1][y-1] = 0;
  }
  //이동하고 -> 어떻게???
  console.log(min);
  //그 수 만큼 움직인 곳의 개수를 구한다
}