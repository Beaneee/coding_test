function solution(tickets) {
  var answer = [];
  
  function dfs (ticket, init , route) {
      //재귀 함수 base case : 주어진 항공권은 모두 사용해야 합니다.
      if(ticket.length === 0) {
          answer.push(route);
      }
      //순열과 비슷한데????
      ticket.forEach(([start, arrival], idx) => {
          if(start === init) {
              //원소가 String, Number 객체가 아닌 문자열과 숫자의 경우 새 배열에 복사되어 원본에 영향을 주지 않습니다.
              const newTicket = ticket.slice(); // 복사를 꼭 해주고 splice를 해줘야 한다
              newTicket.splice(idx, 1); //idx번째에서 한개 요소 제거, 원본을 직접수정하는 것은 위험하다.
              dfs(newTicket, arrival, route.concat(arrival));
          }
      })
  }
  
  // 항상 "ICN" 공항에서 출발합니다.
  dfs(tickets,"ICN",["ICN"]);
  //만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
  answer.sort();
  console.log(answer[0]);
  return answer[0];
}