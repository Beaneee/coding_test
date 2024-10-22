function solution(msg) {
  let strIdx = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let answer = [];
  let str = msg;
  let endIdx = 1;

  while (str) {
    //다음문자열이 이미 indexing되어 있다면??
    const nextStr = str.slice(0, endIdx + 1);
    //endIdx가 str범위를 넘기지 않아야한다.
    if(strIdx.includes(nextStr) && endIdx <= str.length) {
      endIdx += 1;
      continue;
    }

    //그게 아니라면??
    const currStr = str.slice(0, endIdx);
    const currStrIdx = strIdx.findIndex(v => v === currStr);
    //index를 넣어주고
    answer.push(currStrIdx + 1);
    //새로운 문자열을 사전에 추가
    strIdx.push(nextStr);

    str = str.slice(endIdx);
    endIdx = 1;
  }
  return answer
}