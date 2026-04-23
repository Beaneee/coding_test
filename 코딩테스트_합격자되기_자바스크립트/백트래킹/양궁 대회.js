function calculateScore(arr1, arr2) {
  let score1 = 0;
  let score2 = 0;

  for(let i = 0; i < 11; i++) {
    if(arr1[i] === 0 && arr2[i] === 0) continue;

    if(arr1[i] >= arr2[i]) score1 += 10 - i;

    if(arr1[i] < arr2[i]) score2 += 10 - i;
  }

  return score2 - score1;
}

function solution(n, info) {
  let answer = [];
  let maxDiff = -Infinity;


  const result = [];

  function dfs(idx, restN) {
    // 11번 째 일 때 최대값을 계산한다.
    if(idx === 11) {
      result[10] = restN;
      // 최대값 갱신
      const diff = calculateScore(info, result);

      // 유망 함수: 라이언이 이길 때만 계산한다.
      if(diff > 0 && diff >= maxDiff) {
        // diff >= maxDiff 이걸 해줘야지 마지막 result가 저장된다.
        if(diff > maxDiff) {
          maxDiff = diff;
          answer = [...result];
        } else {
          // 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 return
          // 동점이면 낮은 점수부터 비교
          for (let i = 10; i >= 0; i--) {
            if(result[i] > answer[i]) {
              answer = [...result];
              break;
            }

            if(result[i] < answer[i]) break;
          }
        }
      }

      return;
    }

    // 점수를 획득하는 경우
    if (restN > info[idx]) {
      result[idx] = info[idx] + 1;
      dfs(idx + 1, restN - (info[idx] + 1));
      result[idx] = 0; // 백트래킹
    }

    // 점수를 포기하는 경우
    result[idx] = 0; // result에 0을 넣어준다.
    dfs(idx + 1, restN);
  }

  // dfs 시작
  dfs(0, n);
  // 라이언이 우승할 방법이 없는 경우
  if (maxDiff === -Infinity) return [-1];

  return answer;
}