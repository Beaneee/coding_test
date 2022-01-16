function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n).fill(false);
  
  function dfs(idx) {
      visited[idx] = true;
      for(let i = 0; i < n; i++) {
          //방문하지 않은 것 다시 방문하기 위해서
          if(computers[idx][i] === 1 && visited[i] !== true) {
              dfs(i);
          }
      }
  }
  
  for (let j=0; j < n; j++) {
      //방문을 아직 하기 전 상태
      if(visited[j] !== true) {
          //방문을 시작합니다.
          dfs(j);
          answer+=1; // 방문 횟수를 저장
      }
      //방문을 했다면 하나의 네트워크
  }
      
  return answer;
}