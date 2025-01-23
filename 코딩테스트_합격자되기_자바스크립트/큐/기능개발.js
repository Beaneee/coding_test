const solution = (progresses, speeds) => {

  // 각 progress마다 개발이 언제 완료되는지 알아야한다.
  const restDate = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx])
  })

  const result = [];

  let front = 0;

  // front를 먼저 뽑고,
  let count = 1;

  // 개발이 완료된 front부터 차례대로 뽑는다.
  for (let i = 0; i < restDate.length; i++) {

    if(front >= restDate[i]) {
      // next가 front 보다 크면 뽑는다.
      count++;
    } else {
      // next가 front보다 작으면 뽑지 않는다.
      count = 1;
    }
    // 뽑힌 수를 result에 push한다.
    // 언제 푸시를 하지?
    front = restDate[i];
  }

  return result;
}