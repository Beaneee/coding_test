/**
 * dynamic programming으로 풀어야 한다. (0,0)에서 시작해서 끝 지점 (m,n)이 고정되어있다.
 * 직전의 값을 +1 만 해주면 된다.
 *
 * @param m
 * @param n
 * @param puddles
 */
function solution(m, n, puddles) {
  //우선 m,n만큼 배열을 만들어준다.
  let maps = [];
  for (let i = 0; i < n; i++) {
    maps[i] = [];
    for (let j = 0; j < m; j++) {
      maps[i].push(0);
    }
  }
  //비온 곳은 못가게 하고
  for (let i = 0; i < puddles.length; i++) {
    const [x, y] = puddles[i];
    //x, y 설정을 잘못해줬다.
    maps[y-1][x-1] = -1;
  }

  //탐색 시작
  maps[0][0] = 1;

  //이동하고
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if(maps[i][j] === -1) {
        maps[i][j] = 0;
        continue; //웅덩이 좌표는 통과
      }
      //y좌표 이동했을 경우
      if(i > 0) {
        maps[i][j] += maps[i - 1][j];
      }
      //x좌표 이동했을 경우
      if(j > 0) {
        maps[i][j] += maps[i][j - 1];
      }
    }
  }
  //그 수 만큼 움직인 곳의 개수를 구한다
  return maps[n - 1][m - 1] % 1000000007;
}