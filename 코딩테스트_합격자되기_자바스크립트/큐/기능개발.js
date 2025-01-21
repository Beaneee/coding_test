const solution = (progresses, speeds) => {
  // 각 progress마다 개발이 언제 완료되는지 알아야한다.
  // (100 - progress) / speeds[idx]
  const restDate = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx])
  })

  const queue = [];
  // 개발이 완료된 front부터 차례대로 뽑는다.
  // front를 먼저 뽑고, next가 front 보다 크면 뽑는다.
  // next가 front보다 작으면 뽑지 않는다.

  // 뽑힌 수를 result에 push한다.

  // result를 return

}