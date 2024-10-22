//철수는 롤케이크를 '두 조각'으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다.
function solution(topping) {
  let sliceTopping = new Map();
  let baseTopping = new Map();
  let answer = 0;

  //topping의 개수를 모두 넣어주고
  for (const t of topping) {
    if (baseTopping.get(t)) {
      baseTopping.set(t, baseTopping.get(t) + 1);
      continue
    }
    baseTopping.set(t, 1);
  }

  //왼쪽부터 커팅을 했을 경우 size비교
  for (const t of topping) {

    if(baseTopping.size === sliceTopping.size) {
      answer += 1;
    }

    if(baseTopping.has(t)) {
      baseTopping.set(t, baseTopping.get(t) - 1);

      //더이상 토핑이 없으면 삭제해주기
      if (baseTopping.get(t) === 0) {
        baseTopping.delete(t);
      }
    }

    if(sliceTopping.get(t)) {
      sliceTopping.set(t, sliceTopping.get(t) + 1);
      continue
    }

    sliceTopping.set(t, 1);
  }

  return answer
}

