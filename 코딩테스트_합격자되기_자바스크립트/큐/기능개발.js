const solution = (progresses, speeds) => {
  // 각 작업이 완료되는데 필요한 날짜 계산
  const restDate = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });

  const result = [];
  let front = restDate[0]; // 첫 번째 작업 기준
  let count = 1; // 첫 번째 작업은 무조건 포함

  for (let i = 1; i < restDate.length; i++) {
    if (restDate[i] <= front) {
      // 현재 작업이 front 기준으로 함께 배포 가능
      count++;
    } else {
      // 새로운 배포 시작
      // 새로운 그룹이 시작될 때만 호출
      result.push(count);
      count = 1; // 초기화

      // front를 기준으로 봐야하는데 조건문 밖에서 front를 초기화해주면 항상 초기화가 되기 때문에 문제가 된다.
      front = restDate[i]; // 새로운 기준 작업
    }
  }

  // 마지막 작업 그룹은 "다음 그룹"이 없기 때문에 추가되지 않는다.
  // 마지막 배포 처리
  result.push(count);

  return result;
};
