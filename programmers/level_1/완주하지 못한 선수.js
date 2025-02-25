function solution(participant, completion) {
  const hash = {};

  // 참가자 이름으로 hash 값 초기화 및 생성
  for (const part of participant) {
    if(hash[part]) {
      hash[part] = hash[part] + 1;
    } else {
      hash[part] = 1;
    }
  }

  // 완주한 사람 지워주기
  for (const comp of completion) {
    if(hash[comp]) {
      hash[comp] -= 1;
    }
  }

  // value가 양수인 사람이 완주하지 못한 사람
  const positiveKey = Object.entries(hash).find(([key, value]) => value > 0)[0];
  return positiveKey;
}