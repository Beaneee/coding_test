function solution(s) {
  if (s.length % 2 === 0) {
    return s.substring((s.length / 2) - 1, s.length / 2 + 1);
  }

  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)];
  }
}