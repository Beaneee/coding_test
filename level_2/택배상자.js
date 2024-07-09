function solution(order) {
  let stack = [];
  let result = [];
  let num = 1;
  let idx = 0;

  while (idx < order.length) {
    //순서에 맞는 i가 나온다면 상자에 담는다.
    if(order[idx] === num) {
      result.push(num);
      num += 1;
      idx += 1;
      continue;
    }
    //보조 컨테이너에 순서에 맞는것이 있다면, 뽑아서 쓴다.
    if (stack.length > 0 && order[idx] === stack[stack.length - 1]) {
      result.push(stack.pop());
      idx += 1;
      continue;
    }

    //만약 모두 맞지 않는다면, stack에 num을 모두 넣고, while문을 다시 시작한다.
    if(num <= order.length) {
      stack.push(num);
      num += 1;
      continue;
    }
    //보조 컨테이너 벨트를 이용해도 기사님이 원하는 순서대로 상자를 싣지 못 한다면, 더 이상 상자를 싣지 않는다.
    break;
  }

  return result.length;
}