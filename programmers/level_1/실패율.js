function solution(N, stages) {
  // stage에 도전하고 있는 사람 hash로 만들기
  const challengerHash = {}

  // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
  for (let i = 1; i <= N; i++) {
    if(!stages.includes(i)) {
      challengerHash[i] = 0;
    }
  }

  stages.forEach(stages => {
    challengerHash[stages] = (challengerHash[stages] || 0) + 1;
  });

  // 실패율 계산하기
  const failHash = {};

  Object.entries(challengerHash).forEach(([key, value]) => {
    // value / 도전한 사람 수
    const challenger = stages.filter(stage => stage >= Number(key)).length;
    failHash[key] = value / challenger;
  });

  // 실패율 정렬
  // 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. -> 작은 번호 부터 되기 때문에 따로 처리하지 않아도 된다.
  const result = Object.entries(failHash).map(v => {
    return {
      key: v[0],
      value: v[1]
    }
  }).sort((a, b) => b.value - a.value).map((vv) => {
    return Number(vv.key)
  });

  // 실패율 return
  return result.filter(stage => stage < N + 1);
}