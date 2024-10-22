function solution(numbers, target) {
  var answer = 0;
  
  dfs(0,0);
  function dfs(index, sum) {
      if(index === numbers.length) {
          if (sum === target) {
              answer++;
           }
          //2. 마지막 인덱스에 다다랐을 경우, 해당 함수를 스택에서 제거한 뒤
          return;
      }
      dfs(index + 1, sum + numbers[index]); // 1. 다음 인덱스의 숫자가 (+) 인 자식 노드를 계속 탐색한다.
      dfs(index + 1, sum - numbers[index]); // 3. (-)인 자식 노드를 탐색한다.
  }
  
  return answer;
}