//solution(5) dp 과정
/**
 * 1. solution(5)호출
 * 2. n !== 1이므로 통과
 * 3. n이 홀수이므로 else문
 * 4. (5-1) / 2 = 2 -> solution(2) + 1
 * 5. solution(2)호출
 * 6. n !== 1이므로 통과
 * 7. n이 짝수이므로 if문
 * 8. 2 / 2 -> solution(1) + 1
 * 9. solution(1)호출
 * 10. n === 1이므로 1을 반환
 * 11. 1 + 1 = 2
 */
function solution(n) {
  if (n === 1) {
      return 1; // 출발 지점이므로 건전지 사용량은 0
  }
  
  if (n % 2 === 0) {
      return solution(n / 2); // 짝수일 경우 순간이동
  } else {
      return solution((n - 1) / 2) + 1; // 홀수일 경우 점프 후 순간이동
  }
}

