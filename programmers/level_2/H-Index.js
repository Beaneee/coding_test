function solution(citations) {
  var answer = 0;
  //오름차순 정렬
  citations = citations.sort((a, b) => a - b)
  let n = citations.length
  for (let i = 0; i < n; i++) {
      let Hindex = n-i
      if (Hindex <= citations[i]) {
          answer = Hindex
          break
      }
  }

  return answer;
}