//진수를 잘라서 모두 순회하고
//5가지 조건을 만족하면 + result
function solution(n, k) {
  const parseNum = n.toString(k);
  let result = 0;
  console.log(parseNum);
  for(let i = 0; i < parseNum.length; i++) {

    [...parseNum].forEach((v, idx) => {
      const sliceStr = parseNum.slice(idx, idx + i);
      const leftStr = parseNum[idx - 1];
      const rightStr = parseNum[idx + i];
      //단, P는 각 자릿수에 0을 포함하지 않는 소수 (전제)
      if(sliceStr.includes('0') || !sliceStr || sliceStr === '1' || sliceStr.length !== i) return
      //1. 0P0처럼 소수 양쪽에 0이 있는 경우
      if(leftStr === '0' && rightStr === '0') {
        result += 1;
        return
      }
      //2. P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
      if(rightStr === '0' && !leftStr) {
        result += 1;
        return
      }
      //3. 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
      if(leftStr === '0' && !rightStr) {
        result += 1;
        return
      }
      //4. P처럼 소수 양쪽에 아무것도 없는 경우
      if(!leftStr && !rightStr) {
        result += 1;
        return
      }
    })
  }

  return result;
}

