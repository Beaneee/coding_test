function solution(s) {
  // s의 길이가 4 또는 6
  if (s.length !== 4 && s.length !== 6) return false;

  // 숫자로만 구성되어 있는지 확인
  // isNaN()함수는 매개변수가 Number형이 아닌 경우, 그 값을 먼저 숫자로 강제 변환 시킨다.
  // 예외 케이스 "0x16"
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c < '0' || c > '9') {
      return false;
    }
  }

  return true;
}
