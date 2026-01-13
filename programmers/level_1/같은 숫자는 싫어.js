function solution(arr) {
  const result = [];

  result.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const prevNum = result.pop();
    const num = arr[i];

    // 같은 숫자인 경우 num을 push
    if (prevNum === num) result.push(num);

    // 다른 숫자인 경우 prevNum 순서를 유지하여 num을 push
    if (prevNum !== num) {
      result.push(prevNum);
      result.push(num)
    }
  }

  return result;
}