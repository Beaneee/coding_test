function solution(topping) {
  const baseTopping = new Map();
  const sliceTopping = new Map();
  let result = 0;

  // 우선 baseTopping에 채우고
  for (const t of topping) {
    if (baseTopping.has(t)) {
      baseTopping.set(t, baseTopping.get(t) + 1);
      continue;
    }

    baseTopping.set(t, 1);
  }

  // baseTopping에 개수를 줄여가면서 비교한다.
  for (const t of topping) {
    if (baseTopping.size === sliceTopping.size) result += 1;

    if (baseTopping.has(t)) {
      baseTopping.set(t, baseTopping.get(t) - 1);

      // 만약 baseTopping.get(t)가 0이라면? 삭제!
      if (baseTopping.get(t) === 0) baseTopping.delete(t);
    }

    if (sliceTopping.has(t)) {
      sliceTopping.set(t, sliceTopping.get(t) + 1);
      continue;
    }

    sliceTopping.set(t, 1);
  }

  return result;
}