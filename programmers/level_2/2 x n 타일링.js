function solution(n) {
  //dp의 길이를 미리 생성하는 연산을 하지 않는다.
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    const sum = dp[i - 1] + dp[i - 2];
    //1000000007보다 큰 값만 연산한다.
    dp[i] = sum > 1000000007 ? sum % 1000000007 : sum ;
  }

  return dp[n-1];
}