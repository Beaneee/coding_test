function solution(triangle) {
  const root = triangle[0];
  let answer = root[0];
  let compareIdx = 0;

  //이미 root를 가지고 있기 때문에 1부터 시작
  for(let i = 1; i < triangle.length; i++) {
    //이전 최대값 idx와 idx + 1의 최대값을 찾고
    const max = Math.max(triangle[i][compareIdx], triangle[i][compareIdx + 1]);
    //최대값의 idx를 갱신하고
    const maxIdx = triangle[i].findIndex(v => v === max);
    compareIdx = maxIdx
    //값을 더한다.
    answer += max
  }

  return answer;
}