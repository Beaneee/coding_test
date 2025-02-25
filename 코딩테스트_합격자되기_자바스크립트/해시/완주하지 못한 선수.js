function solution(participant, completion) {
  // 참가자 이름으로 hash 값 초기화 및 생성
  const hash = participant.reduce((acc, part) => {
    acc[part] = (acc[part] || 0) + 1;
    return acc;
  }, {});

  // 완주한 사람 지워주기
  completion.forEach(comp => hash[comp]--);

  // value가 양수인 사람이 완주하지 못한 사람
  return Object.keys(hash).find(key => hash[key] > 0);
}